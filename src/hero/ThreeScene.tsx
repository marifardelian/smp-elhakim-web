'use client';

import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const AnimatedGlobe = () => {
  const meshRef = useRef<any>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Sphere args={[1, 64, 64]} ref={meshRef} scale={[2.2, 2.2, 2.2]}>
      <MeshDistortMaterial
        color="#1e3a8a"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const ThreeScene = () => {
  return (
    <div className="h-[400px] w-full cursor-pointer lg:h-[500px]">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} intensity={1} />
        <AnimatedGlobe />
      </Canvas>
    </div>
  );
};

export { ThreeScene };
