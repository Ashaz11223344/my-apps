import { useRef } from 'react';
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
  
  // Use Three.js state to detect current canvas dimensions
  const { width } = useThree((state) => state.size);
  const isMobile = width < 768;

  // Create particle positions once
  const particles = useRef(new Float32Array(inSphere(new Float32Array(5000), { radius: 4 })));

  useFrame((state, delta) => {
    // Rotate the whole particle group slowly
    if (groupRef.current) {
      groupRef.current.rotation.x -= delta / 10;
      groupRef.current.rotation.y -= delta / 15;
    }

    // Scroll parallax effect
    if (containerRef.current && groupRef.current && sphereRef.current) {
      const scrollY = containerRef.current.scrollTop;
      const height = containerRef.current.scrollHeight - containerRef.current.clientHeight;
      const scrollProgress = height > 0 ? scrollY / height : 0;
      
      // Move camera or object based on scroll
      groupRef.current.position.y = scrollProgress * 5;
      groupRef.current.rotation.y = scrollProgress * Math.PI * 2;
      
      // Make the central sphere pulse (scale is smaller on mobile)
      const baseScale = isMobile ? 0.75 : 1.0;
      const scale = baseScale + Math.sin(state.clock.elapsedTime) * 0.08 + scrollProgress * 0.15;
      sphereRef.current.scale.set(scale, scale, scale);
      
      // Morph colors based on scroll
      const color1 = new THREE.Color('#a078ff');
      const color2 = new THREE.Color('#ff78a0');
      const material = sphereRef.current.material as THREE.MeshStandardMaterial;
      material.color.lerpColors(color1, color2, scrollProgress);
    }
  });

  // Position sphere on the right side for desktop, but center it behind content on mobile
  const spherePosition: [number, number, number] = isMobile ? [0, 0, -1] : [1.5, 0, 0];

  return (
    <group>
      {/* Central Abstract Object */}
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <Sphere ref={sphereRef} args={[1, 64, 64]} position={spherePosition}>
          <meshStandardMaterial 
            color="#a078ff" 
            wireframe 
            transparent 
            opacity={0.3} 
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      {/* Floating Particles */}
      <group ref={groupRef}>
        <Points positions={particles.current} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color="#a078ff"
            size={0.02}
            sizeAttenuation={true}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </Points>
      </group>
    </group>
  );
}
