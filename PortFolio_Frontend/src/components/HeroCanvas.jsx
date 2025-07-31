// src/components/HeroCanvas.jsx

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function AnimatedGrid() {
  const gridRef = useRef()

  useFrame((state) => {
    gridRef.current.rotation.x = -Math.PI / 2
    gridRef.current.material.opacity = 0.15 + Math.sin(state.clock.elapsedTime) * 0.05
  })

  return (
    <gridHelper
      ref={gridRef}
      args={[100, 50, '#000000', '#000000']} // Soft blue tone
      position={[0, -1, 0]}
    />
  )
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 h-full w-full z-0">
      <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
        <ambientLight intensity={1} />
        <AnimatedGrid />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
