"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Suspense } from "react";

export default function HeroScene() {
    return (
        <div className="h-[400px] w-full cursor-grab active:cursor-grabbing">
            <Suspense fallback={<div className="w-full h-full bg-black/20 animate-pulse rounded-full" />}>
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} color="#FF0000" intensity={2} />

                    <Sphere args={[1, 100, 200]} scale={2}>
                        <MeshDistortMaterial
                            color="#E10600"
                            distort={0.4}
                            speed={2}
                            roughness={0.2}
                            metalness={0.8}
                        />
                    </Sphere>

                    <OrbitControls enableZoom={false} />
                </Canvas>
            </Suspense>
        </div>
    );
}
