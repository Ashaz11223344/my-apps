import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Points, PointMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { inSphere } from 'maath/random';
import { useModeContext } from '../../context/ModeContext';

interface SceneProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function Scene({ containerRef }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const color1 = useRef(new THREE.Color());
  const color2 = useRef(new THREE.Color());
  const { isDark } = useModeContext();

  // Use Three.js state to detect current canvas dimensions
  const { width } = useThree((state) => state.size);
  const isMobile = width < 768;

  // Create particles in a sphere with exact 3-float alignment and NaN sanitization
  const particleCount = isMobile ? 1200 : 3000;
  const positions = useMemo(() => {
    const coords = new Float32Array(particleCount * 3);
    inSphere(coords, { radius: 4 });
    for (let i = 0; i < coords.length; i++) {
      if (!Number.isFinite(coords[i])) {
        coords[i] = 0;
      }
    }
    return coords;
  }, [particleCount]);

  // Per-mode colors and blending mode
  // NormalBlending prevents particles from washing out into white background in light mode!
  const particleColor = isDark ? '#d0bcff' : '#5b21b6';
  const particleBlending = isDark ? THREE.AdditiveBlending : THREE.NormalBlending;
  const particleSize = isDark ? 0.02 : 0.028;
  const particleOpacity = isDark ? 0.8 : 0.95;

  const sphereColorA = isDark ? '#d0bcff' : '#6d28d9'; // start color
  const sphereColorB = isDark ? '#38bdf8' : '#0284c7'; // scroll end color (cool cyan/blue instead of red)

  useFrame((state, delta) => {
    // Rotate particle swarm slowly
    if (groupRef.current) {
      groupRef.current.rotation.x -= delta / 10;
      groupRef.current.rotation.y -= delta / 15;
    }

    // Scroll parallax & sphere color lerp
    if (containerRef.current && groupRef.current && sphereRef.current) {
      const scrollY = containerRef.current.scrollTop || 0;
      const scrollHeight = containerRef.current.scrollHeight || 0;
      const clientHeight = containerRef.current.clientHeight || 0;
      const height = scrollHeight - clientHeight;
      const rawProgress = height > 0 ? scrollY / height : 0;
      const scrollProgress = Number.isFinite(rawProgress) ? Math.min(Math.max(rawProgress, 0), 1) : 0;

      groupRef.current.position.y = scrollProgress * 5;
      groupRef.current.rotation.y = scrollProgress * Math.PI * 2;

      // Make central sphere pulse
      const baseScale = isMobile ? 0.75 : 1.0;
      const elapsedTime = state.clock.getElapsedTime ? state.clock.getElapsedTime() : state.clock.elapsedTime;
      const scale = baseScale + Math.sin(elapsedTime) * 0.08 + scrollProgress * 0.15;
      if (Number.isFinite(scale)) {
        sphereRef.current.scale.set(scale, scale, scale);
      }

      // Morph colors based on scroll safely
      const meshMat = sphereRef.current.material as THREE.MeshStandardMaterial | undefined;
      if (meshMat && 'color' in meshMat && meshMat.color) {
        color1.current.set(sphereColorA);
        color2.current.set(sphereColorB);
        meshMat.color.lerpColors(color1.current, color2.current, scrollProgress);
      }
    }
  });

  const spherePosition: [number, number, number] = isMobile ? [0, 0, -1] : [1.5, 0, 0];

  return (
    <group>
      {/* Central Abstract Wireframe Object */}
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <Sphere ref={sphereRef} args={[1, 64, 64]} position={spherePosition}>
          <meshStandardMaterial
            color={sphereColorA}
            wireframe
            transparent
            opacity={isDark ? 0.35 : 0.65}
            roughness={0.15}
            metalness={0.85}
          />
        </Sphere>
      </Float>

      {/* Floating Particles Swarm */}
      <group ref={groupRef}>
        <Points positions={positions} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color={particleColor}
            size={particleSize}
            sizeAttenuation={true}
            depthWrite={false}
            blending={particleBlending}
            opacity={particleOpacity}
          />
        </Points>
      </group>
    </group>
  );
}
