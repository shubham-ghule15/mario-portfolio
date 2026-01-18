import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import ParticleNetwork from './ParticleNetwork'

function Scene3D() {
    return (
        <div className="scene-container">
            <Canvas
                camera={{ position: [0, 0, 30], fov: 60 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
            >
                <Suspense fallback={null}>
                    <ParticleNetwork count={3000} />
                    <ambientLight intensity={0.1} />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Scene3D
