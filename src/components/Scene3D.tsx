import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function FloatingGeometry({ position, color, speed = 1, distort = 0.3 }: { 
  position: [number, number, number]; 
  color: string; 
  speed?: number;
  distort?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function FloatingSphere({ position, color, size = 0.5 }: { 
  position: [number, number, number]; 
  color: string;
  size?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[size, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={3}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  );
}

function FloatingTorus({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1} rotationIntensity={2} floatIntensity={1}>
      <Torus ref={meshRef} args={[0.8, 0.3, 16, 32]} position={position}>
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Torus>
    </Float>
  );
}

function ParticleField() {
  const count = 200;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 30;
      const z = (Math.random() - 0.5) * 30;
      const scale = Math.random() * 0.05 + 0.02;
      temp.push({ position: [x, y, z], scale });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      particles.forEach((particle, i) => {
        const matrix = new THREE.Matrix4();
        const position = new THREE.Vector3(
          particle.position[0],
          particle.position[1] + Math.sin(state.clock.elapsedTime + i) * 0.1,
          particle.position[2]
        );
        matrix.setPosition(position);
        matrix.scale(new THREE.Vector3(particle.scale, particle.scale, particle.scale));
        meshRef.current!.setMatrixAt(i, matrix);
      });
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#22d3ee" transparent opacity={0.6} />
    </instancedMesh>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#22d3ee" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
        <spotLight position={[0, 10, 0]} intensity={0.8} color="#22d3ee" angle={0.3} />
        
        <FloatingGeometry position={[-4, 2, -2]} color="#22d3ee" speed={0.8} distort={0.4} />
        <FloatingGeometry position={[4, -1, -3]} color="#a855f7" speed={0.6} distort={0.3} />
        <FloatingGeometry position={[0, 3, -4]} color="#c084fc" speed={1} distort={0.5} />
        
        <FloatingSphere position={[-3, -2, -1]} color="#22d3ee" size={0.6} />
        <FloatingSphere position={[3, 2, -2]} color="#a855f7" size={0.4} />
        <FloatingSphere position={[5, -3, -3]} color="#06b6d4" size={0.3} />
        
        <FloatingTorus position={[-5, 0, -2]} color="#a855f7" />
        <FloatingTorus position={[5, 1, -4]} color="#22d3ee" />
        
        <ParticleField />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
