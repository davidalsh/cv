import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function MorphingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const originalPositions = useRef<Float32Array | null>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.8, 64);
    originalPositions.current = new Float32Array(
      geo.attributes.position.array
    );
    return geo;
  }, []);

  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    if (!mesh || !originalPositions.current) return;

    const time = clock.getElapsedTime() * 0.3;
    const positions = mesh.geometry.attributes.position;
    const original = originalPositions.current;

    for (let i = 0; i < positions.count; i++) {
      const ox = original[i * 3];
      const oy = original[i * 3 + 1];
      const oz = original[i * 3 + 2];

      const len = Math.sqrt(ox * ox + oy * oy + oz * oz);
      const nx = ox / len;
      const ny = oy / len;
      const nz = oz / len;

      // Layered noise-like distortion using sin waves
      const noise =
        Math.sin(nx * 3.0 + time * 1.2) *
          Math.sin(ny * 4.0 + time * 0.8) *
          0.15 +
        Math.sin(nz * 5.0 + time * 1.5) *
          Math.cos(nx * 2.0 - time) *
          0.1 +
        Math.sin((nx + ny + nz) * 6.0 + time * 0.6) * 0.05;

      const scale = 1 + noise;
      positions.setXYZ(i, ox * scale, oy * scale, oz * scale);
    }

    positions.needsUpdate = true;
    mesh.geometry.computeVertexNormals();

    mesh.rotation.y = time * 0.4;
    mesh.rotation.x = Math.sin(time * 0.2) * 0.15;
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshBasicMaterial
        color="#06b6d4"
        wireframe
        transparent
        opacity={0.12}
      />
    </mesh>
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-x-0 top-16 bottom-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <MorphingSphere />
      </Canvas>
    </div>
  );
}
