/**
 * Project Availability & Maintenance Feature Service
 * 
 * Manages project availability states, server health statuses, and metadata.
 * Fetches project IDs and flags matching projects as "Unavailable" with
 * detailed technical context, maintenance reasons, and health check utilities.
 */

export type AvailabilityFlag = 'Available' | 'Unavailable';

export interface UnavailableProjectMetadata {
  id: string;
  flag: 'Unavailable';
  statusLabel: string;
  badgeText: string;
  reason: string;
  detailedMessage: string;
  estimatedReturn: string;
  maintenanceType: 'server-migration' | 'infrastructure-upgrade' | 'model-retraining' | 'scheduled-maintenance';
  technicalSpecs: {
    serviceName: string;
    architecture: string;
    techStack: string[];
    coreFeatures: string[];
    migrationDetails: string;
  };
}

export interface AvailableProjectMetadata {
  id: string;
  flag: 'Available';
  statusLabel: 'Online & Operational';
  badgeText: 'Active';
}

export type ProjectAvailabilityResult =
  | UnavailableProjectMetadata
  | AvailableProjectMetadata;

/**
 * Registry of Project IDs flagged as Currently Unavailable
 * Add or remove project IDs here to update their global availability status.
 */
export const UNAVAILABLE_PROJECT_IDS: readonly string[] = [
  'project-vidpull',     // VidPull (4K Video & MP3 Downloader)
  'project-bg-remover',  // Remove Background (BG-Remove AI Tool)
];

/**
 * Detailed maintenance and technical profile for unavailable projects
 */
export const UNAVAILABLE_PROJECTS_REGISTRY: Record<string, UnavailableProjectMetadata> = {
  'project-vidpull': {
    id: 'project-vidpull',
    flag: 'Unavailable',
    statusLabel: 'Currently Unavailable',
    badgeText: 'Under Maintenance',
    reason: 'Upgrading downstream media extraction engine & CDN bandwidth',
    detailedMessage:
      'VidPull is temporarily offline while the backend extraction microservices and high-throughput video pipelines are being upgraded to support reliable 4K downloads and 320kbps audio encoding without throttling.',
    estimatedReturn: 'Server updates in progress',
    maintenanceType: 'server-migration',
    technicalSpecs: {
      serviceName: 'VidPull High-Speed Downloader',
      architecture: 'Node.js / Express microservice cluster with yt-dlp & FFmpeg workers',
      techStack: ['TypeScript', 'Node.js', 'Express', 'FFmpeg', 'TailwindCSS', 'Render'],
      coreFeatures: [
        'Ad-free 4K/1080p video extraction',
        'High-bitrate 320kbps MP3 audio processing',
        'Streaming queue pipeline with progress indicators',
        'Zero tracking and ad-free modern UI'
      ],
      migrationDetails:
        'Migrating to a dedicated compute cluster with persistent FFmpeg transcoding queues and anti-rate-limit proxies.'
    }
  },
  'project-bg-remover': {
    id: 'project-bg-remover',
    flag: 'Unavailable',
    statusLabel: 'Currently Unavailable',
    badgeText: 'Under Maintenance',
    reason: 'AI model compute container migration & GPU optimization',
    detailedMessage:
      'Remove Background (BG-Remove) is temporarily offline while migrating AI inference models (RMBG / U2-Net) to high-speed dedicated GPU containers for instantaneous, high-resolution edge segmentation.',
    estimatedReturn: 'Container migration in progress',
    maintenanceType: 'infrastructure-upgrade',
    technicalSpecs: {
      serviceName: 'BG-Remove AI Background Remover',
      architecture: 'Python / PyTorch inference API paired with Vite React frontend',
      techStack: ['React', 'Python', 'FastAPI', 'PyTorch', 'ONNX Runtime', 'Render'],
      coreFeatures: [
        'Automatic human and object contour segmentation',
        'Instant client-side canvas preview and side-by-side wipe comparison',
        'Lossless transparent PNG export up to 4K resolution',
        'Privacy-focused in-memory inference pipeline'
      ],
      migrationDetails:
        'Upgrading from CPU containers to GPU-accelerated serverless endpoints to eliminate cold starts.'
    }
  }
};

/**
 * Check if a project ID is flagged as unavailable
 */
export function isProjectUnavailable(projectId: string): boolean {
  if (!projectId) return false;
  return UNAVAILABLE_PROJECT_IDS.includes(projectId);
}

/**
 * Fetch project ID and return its availability status and technical details.
 * If the project ID is flagged, returns Unavailable status with rich maintenance specs.
 */
export function getProjectAvailability(projectId: string): ProjectAvailabilityResult {
  if (isProjectUnavailable(projectId)) {
    const details = UNAVAILABLE_PROJECTS_REGISTRY[projectId];
    if (details) return details;

    // Fallback for any newly added unavailable project ID
    return {
      id: projectId,
      flag: 'Unavailable',
      statusLabel: 'Currently Unavailable',
      badgeText: 'Temporarily Offline',
      reason: 'Scheduled maintenance and server updates',
      detailedMessage: 'This service is currently undergoing scheduled infrastructure updates.',
      estimatedReturn: 'Service will resume shortly',
      maintenanceType: 'scheduled-maintenance',
      technicalSpecs: {
        serviceName: 'Application Service',
        architecture: 'Web Service Infrastructure',
        techStack: ['TypeScript', 'React'],
        coreFeatures: ['Web application capabilities'],
        migrationDetails: 'Routine maintenance updates'
      }
    };
  }

  return {
    id: projectId,
    flag: 'Available',
    statusLabel: 'Online & Operational',
    badgeText: 'Active'
  };
}

/**
 * Retrieve all registered unavailable project IDs
 */
export function getUnavailableProjectIds(): readonly string[] {
  return UNAVAILABLE_PROJECT_IDS;
}

/**
 * Interactive simulated server ping / diagnostic check.
 * Allows user to test the service connection in real time from the UI.
 */
export async function pingProjectServer(projectId: string): Promise<{
  status: 'offline' | 'online' | 'degraded';
  statusCode: number;
  latencyMs: number;
  timestamp: string;
  message: string;
}> {
  const isUnavailable = isProjectUnavailable(projectId);
  // Add realistic network delay (between 80ms and 180ms)
  const delay = Math.floor(Math.random() * 100) + 80;
  await new Promise((resolve) => setTimeout(resolve, delay));

  if (isUnavailable) {
    return {
      status: 'offline',
      statusCode: 503,
      latencyMs: delay,
      timestamp: new Date().toLocaleTimeString(),
      message: 'HTTP 503 — Service Temporarily Unavailable (Scheduled Maintenance)'
    };
  }

  return {
    status: 'online',
    statusCode: 200,
    latencyMs: delay,
    timestamp: new Date().toLocaleTimeString(),
    message: 'HTTP 200 — Service Operational'
  };
}
