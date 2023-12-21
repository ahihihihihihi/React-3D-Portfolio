import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from 'react'
import styled from "styled-components";
import { DevelopmentLogo } from "./3D/Development";



const Development = () => {
    const ref = useRef()
    return (
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
            <Suspense fallback={null}>
                <Stage controls={ref} preset="rembrandt" intensity={1} environment="city">
                    false
                    <DevelopmentLogo />
                    false
                </Stage>
            </Suspense>
            <OrbitControls ref={ref} enableZoom={false} autoRotate />
        </Canvas>
    )
}

export default Development;