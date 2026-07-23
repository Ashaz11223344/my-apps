import { useRef } from 'react';
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
  const { isDark } = useModeContext();

  // Use Three.js state to detect current canvas dimensions
  const { width } = useThree((state) => state.size);
  const isMobile = width < 768;

  // Create 5000 particles in a sphere
  const particles = useRef(
    new Float32Array(inSphere(new Float32Array(5000), { radius: 4 }))
  );

  // Per-mode colors and blending mode
  // NormalBlending prevents particles from washing out into white background in light mode!
  const particleColor = isDark ? '#d0bcff' : '#5b21b6';
  const particleBlending = isDark ? THREE.AdditiveBlending : THREE.NormalBlending;
  const particleSize = isDark ? 0.02 : 0.028;
  const particleOpacity = isDark ? 0.8 : 0.95;

  const sphereColorA = isDark ? '#d0bcff' : '#6d28d9'; // start color
  const sphereColorB = isDark ? '#ff78a0' : '#0284c7'; // scroll end color

  useFrame((state, delta) => {
    // Rotate particle swarm slowly
    if (groupRef.current) {
      groupRef.current.rotation.x -= delta / 10;
      groupRef.current.rotation.y -= delta / 15;
    }

    // Scroll parallax & sphere color lerp
    if (containerRef.current && groupRef.current && sphereRef.current) {
      const scrollY = containerRef.current.scrollTop;
      const height = containerRef.current.scrollHeight - containerRef.current.clientHeight;
      const scrollProgress = height > 0 ? scrollY / height : 0;

      groupRef.current.position.y = scrollProgress * 5;
      groupRef.current.rotation.y = scrollProgress * Math.PI * 2;

      // Make central sphere pulse
      const baseScale = isMobile ? 0.75 : 1.0;
      const scale = baseScale + Math.sin(state.clock.elapsedTime) * 0.08 + scrollProgress * 0.15;
      sphereRef.current.scale.set(scale, scale, scale);

      // Morph colors based on scroll
      const color1 = new THREE.Color(sphereColorA);
      const color2 = new THREE.Color(sphereColorB);
      const material = sphereRef.current.material as THREE.MeshStandardMaterial;
      material.color.lerpColors(color1, color2, scrollProgress);
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
        <Points positions={particles.current} stride={3} frustumCulled={false}>
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
