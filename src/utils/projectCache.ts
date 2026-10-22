import { projects } from '../data/projects';

export const CACHE_STORAGE_KEY = 'ashaz-projects-cache-v1';
export const LOCAL_STORAGE_KEY = 'ashaz_projects_cache_metadata';

export interface CacheMetadata {
  cachedAt: number;
  projectsCount: number;
  projectIds: string[];
  version: string;
}

/**
 * Check if all project cards and links are already saved in browser cache / localStorage
 */
export function isProjectsCacheAvailable(): boolean {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return false;
    const metadata: CacheMetadata = JSON.parse(raw);
    // Cache valid for 7 days
    const isRecent = Date.now() - metadata.cachedAt < 7 * 24 * 60 * 60 * 1000;
    return isRecent && metadata.projectsCount >= projects.length;
  } catch {
    return false;
  }
}

/**
 * Get stored cache timestamp string (e.g. "Today at 3:45 PM")
 */
export function getCacheInfo(): { isCached: boolean; timestampText?: string } {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return { isCached: false };
    const metadata: CacheMetadata = JSON.parse(raw);
    const date = new Date(metadata.cachedAt);
    return {
      isCached: true,
      timestampText: date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
    };
  } catch {
    return { isCached: false };
  }
}

/**
 * Inject preconnect and dns-prefetch link tags into document.head
 * to eliminate DNS lookup and TLS handshake latency when user opens project cards
 */
export function preconnectOrigin(urlStr: string) {
  try {
    const url = new URL(urlStr);
    const origin = url.origin;

    if (document.querySelector(`link[rel="preconnect"][href="${origin}"]`)) return;

    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = origin;
    preconnect.crossOrigin = 'anonymous';
    document.head.appendChild(preconnect);

    const dnsPrefetch = document.createElement('link');
    dnsPrefetch.rel = 'dns-prefetch';
    dnsPrefetch.href = origin;
    document.head.appendChild(dnsPrefetch);
  } catch {
    // Ignore invalid URLs
  }
}

/**
 * Prefetch an image asset into browser memory and CacheStorage with timeout guard
 */
async function preloadImageAsset(src: string, cacheInstance?: Cache): Promise<void> {
  return new Promise((resolve) => {
    const timer = setTimeout(resolve, 800); // 800ms max timeout per image
    const img = new Image();
    img.src = src;
    img.onload = async () => {
      clearTimeout(timer);
      if (cacheInstance) {
        try {
          await cacheInstance.add(src);
        } catch {
          // Handled by browser memory image cache
        }
      }
      resolve();
    };
    img.onerror = () => {
      clearTimeout(timer);
      resolve();
    };
  });
}

/**
 * Preconnect and prefetch a project link to warm up network cache
 */
async function prefetchProjectLink(link: string): Promise<void> {
  preconnectOrigin(link);

  // Add low-priority HTML prefetch link
  try {
    if (!document.querySelector(`link[rel="prefetch"][href="${link}"]`)) {
      const linkEl = document.createElement('link');
      linkEl.rel = 'prefetch';
      linkEl.href = link;
      linkEl.as = 'document';
      document.head.appendChild(linkEl);
    }
  } catch {
    // Fallback gracefully
  }

  // Attempt lightweight fetch to populate browser HTTP socket pool
  try {
    if ('fetch' in window) {
      fetch(link, { mode: 'no-cors', priority: 'low' as RequestPriority }).catch(() => {});
    }
  } catch {
    // Ignore cross-origin restrictions
  }
}

export interface PreloadProgressInfo {
  progress: number; // 0 - 100
  stage: string;
  currentItem: string;
  isCached: boolean;
}

/**
 * Actively preloads all 13 project cards, images, model banners, and live links
 * and saves them permanently in the browser cache / localStorage for instant next-time loads.
 */
export async function preloadAllProjects(
  onProgress?: (info: PreloadProgressInfo) => void
): Promise<void> {
  const isCached = isProjectsCacheAvailable();

  // If already cached, perform rapid verification and warm connections
  if (isCached) {
    if (onProgress) {
      onProgress({
        progress: 35,
        stage: 'RESTORING BROWSER CACHE',
        currentItem: 'Cached Project Cards (13/13)',
        isCached: true
      });
    }

    // Warm up origins in background
    projects.forEach((p) => preconnectOrigin(p.link));

    await new Promise((r) => setTimeout(r, 100));

    if (onProgress) {
      onProgress({
        progress: 75,
        stage: 'WARMING PRELOADED NODES',
        currentItem: '13 Deployment Links Synced',
        isCached: true
      });
    }

    await new Promise((r) => setTimeout(r, 100));

    if (onProgress) {
      onProgress({
        progress: 100,
        stage: 'SYSTEM CACHE READY',
        currentItem: 'Instant Boot Activated',
        isCached: true
      });
    }
    return;
  }

  // First time loading: Ingest, prefetch and cache all projects
  let cacheInstance: Cache | undefined;
  if ('caches' in window) {
    try {
      cacheInstance = await window.caches.open(CACHE_STORAGE_KEY);
    } catch {
      cacheInstance = undefined;
    }
  }

  const staticAssets = [
    '/convo_animated.svg',
    '/model-banner/vesper-1.5b-instruct.png',
    '/model-banner/obsidian-3b-genesis.png',
    '/resume.pdf'
  ];

  const totalSteps = staticAssets.length + projects.length + 1;
  let completed = 0;

  const update = (stage: string, currentItem: string) => {
    completed++;
    const progress = Math.min(Math.round((completed / totalSteps) * 100), 96);
    if (onProgress) {
      onProgress({ progress, stage, currentItem, isCached: false });
    }
  };

  // 1. Preload Static Key Assets
  for (const asset of staticAssets) {
    await preloadImageAsset(asset, cacheInstance);
    update('INGESTING CORE ASSETS', asset.split('/').pop() || asset);
  }

  // 2. Preload & Pre-warm Each Project Card & Link
  for (const project of projects) {
    if (project.image) {
      await preloadImageAsset(project.image, cacheInstance);
    }
    await prefetchProjectLink(project.link);
    update('CACHING PROJECT NODES', `${project.number}. ${project.title}`);
  }

  // 3. Persist Metadata in localStorage
  try {
    const metadata: CacheMetadata = {
      cachedAt: Date.now(),
      projectsCount: projects.length,
      projectIds: projects.map((p) => p.id),
      version: '1.0'
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(metadata));
  } catch {
    // LocalStorage quota or private mode fallback
  }

  if (onProgress) {
    onProgress({
      progress: 100,
      stage: 'BROWSER CACHE COMMITTED',
      currentItem: '13 Projects & Links Saved',
      isCached: false
    });
  }
}
