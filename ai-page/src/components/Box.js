import React from "react";


export default function Box() {
    return <mesh rotation={[90,0,30]}>
        <boxBufferGeometry attach="geometry" args={[3,3,3]} />

        <meshNormalMaterial attach="material" />
    </mesh>
} 