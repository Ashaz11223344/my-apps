import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Points, PointMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { inSphere } from 'maath/random';

interface SceneProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function Scene({ containerRef }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const color1 = useRef(new THREE.Color());
  const color2 = useRef(new THREE.Color());

  const { width } = useThree((state) => state.size);
  const isMobile = width < 768;

  // Particle positions
  const particleCount = isMobile ? 800 : 2000;
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

  // Raw Form Color Palette for 3D elements
  const particleColor = '#DB4A2B';
  const sphereColorA = '#1E1E1E';
  const sphereColorB = '#DB4A2B';

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x -= delta / 12;
      groupRef.current.rotation.y -= delta / 18;
    }

    if (containerRef.current && groupRef.current && sphereRef.current) {
      const scrollY = containerRef.current.scrollTop || 0;
      const scrollHeight = containerRef.current.scrollHeight || 0;
      const clientHeight = containerRef.current.clientHeight || 0;
      const height = scrollHeight - clientHeight;
      const rawProgress = height > 0 ? scrollY / height : 0;
      const scrollProgress = Number.isFinite(rawProgress) ? Math.min(Math.max(rawProgress, 0), 1) : 0;

      groupRef.current.position.y = scrollProgress * 4;
      groupRef.current.rotation.y = scrollProgress * Math.PI;

      const baseScale = isMobile ? 0.7 : 0.95;
      const elapsedTime = state.clock.getElapsedTime ? state.clock.getElapsedTime() : state.clock.elapsedTime;
      const scale = baseScale + Math.sin(elapsedTime * 0.8) * 0.05 + scrollProgress * 0.1;
      if (Number.isFinite(scale)) {
        sphereRef.current.scale.set(scale, scale, scale);
      }

      const meshMat = sphereRef.current.material as THREE.MeshStandardMaterial | undefined;
      if (meshMat && 'color' in meshMat && meshMat.color) {
        color1.current.set(sphereColorA);
        color2.current.set(sphereColorB);
        meshMat.color.lerpColors(color1.current, color2.current, scrollProgress);
      }
    }
  });

  const spherePosition: [number, number, number] = isMobile ? [0, 0, -3] : [2.2, 0, -3];

  return (
    <group>
      {/* Central Brutalist Geometric Sphere */}
      <Float speed={1.2} rotationIntensity={1.2} floatIntensity={1.2}>
        <Sphere ref={sphereRef} args={[1, 32, 32]} position={spherePosition}>
          <meshStandardMaterial
            color={sphereColorA}
            wireframe
            transparent
            opacity={0.08}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      {/* Floating Particles Swarm in #DB4A2B */}
      <group ref={groupRef}>
        <Points positions={positions} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color={particleColor}
            size={0.022}
            sizeAttenuation={true}
            depthWrite={false}
            opacity={0.35}
          />
        </Points>
      </group>
    </group>
  );
}
