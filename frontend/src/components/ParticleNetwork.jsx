import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleNetwork({ count = 3000, mouse }) {
    const mesh = useRef()
    const light = useRef()

    // Create particles
    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 50
            const y = (Math.random() - 0.5) * 50
            const z = (Math.random() - 0.5) * 50
            temp.push({ x, y, z, originalX: x, originalY: y, originalZ: z })
        }
        return temp
    }, [count])

    // Create geometry
    const [positions, colors] = useMemo(() => {
        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)

        const colorPalette = [
            new THREE.Color('#00d4ff'), // Cyan
            new THREE.Color('#9d4edd'), // Purple
            new THREE.Color('#00f5d4'), // Teal
            new THREE.Color('#667eea'), // Blue
        ]

        for (let i = 0; i < count; i++) {
            positions[i * 3] = particles[i].x
            positions[i * 3 + 1] = particles[i].y
            positions[i * 3 + 2] = particles[i].z

            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
            colors[i * 3] = color.r
            colors[i * 3 + 1] = color.g
            colors[i * 3 + 2] = color.b
        }

        return [positions, colors]
    }, [count, particles])

    // Animation
    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        if (mesh.current) {
            const positions = mesh.current.geometry.attributes.position.array

            for (let i = 0; i < count; i++) {
                const i3 = i * 3

                // Gentle floating motion
                positions[i3] = particles[i].originalX + Math.sin(time * 0.3 + i * 0.01) * 0.5
                positions[i3 + 1] = particles[i].originalY + Math.cos(time * 0.2 + i * 0.01) * 0.5
                positions[i3 + 2] = particles[i].originalZ + Math.sin(time * 0.1 + i * 0.01) * 0.3
            }

            mesh.current.geometry.attributes.position.needsUpdate = true
            mesh.current.rotation.y = time * 0.02
        }

        if (light.current) {
            light.current.position.x = Math.sin(time * 0.5) * 10
            light.current.position.y = Math.cos(time * 0.5) * 10
        }
    })

    return (
        <>
            <pointLight ref={light} distance={50} intensity={20} color="#00d4ff" />
            <pointLight position={[10, 10, 10]} distance={50} intensity={15} color="#9d4edd" />
            <pointLight position={[-10, -10, -10]} distance={50} intensity={15} color="#00f5d4" />

            <points ref={mesh}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={count}
                        array={positions}
                        itemSize={3}
                    />
                    <bufferAttribute
                        attach="attributes-color"
                        count={count}
                        array={colors}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.15}
                    vertexColors
                    transparent
                    opacity={0.8}
                    sizeAttenuation
                    blending={THREE.AdditiveBlending}
                />
            </points>
        </>
    )
}

export default ParticleNetwork
