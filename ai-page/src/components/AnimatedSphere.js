import React from "react";

import { Sphere, MeshDistortMaterial } from "@react-three/drei"

export default function AnimatedSphere() {
    return <Sphere visible args={[1,100,200]}>
        <MeshDistortMaterial color="#6446b3" attach="material" speed={1.5} radius={1.6}  roughness={0} distort={1.2} />
    </Sphere>
}