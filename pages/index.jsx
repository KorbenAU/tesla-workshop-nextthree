import {Canvas, extend, useFrame, useThree} from "react-three-fiber";
import {Box, Container} from "@chakra-ui/react";
import {useRef} from "react";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

extend({OrbitControls});

export default function Home() {

    const OrbitController = () => {
        const {camera, gl} = useThree();
        return <orbitControls args={[camera, gl.domElement]}/>;
    };

    const TheCube = (props) => {
        const boxRef = useRef();

        useFrame(state => {
            // boxRef.current.rotation.x += 0.01;
            boxRef.current.rotation.y += 0.01;
        });

        return (
            <mesh castShadow
                  // receiveShadow
                  ref={boxRef}
                  {...props}
            >
                <boxBufferGeometry/>
                <meshPhysicalMaterial color={"white"}
                    // opacity={0.7}
                    // metalness={1}
                                      transparent
                                      roughness={0}
                                      clearcoat={1}
                                      transmission={0.7}
                                      side={THREE.DoubleSide}
                />
            </mesh>
        );
    };

    const Floor = (props) => {
        return <mesh {...props} receiveShadow>
            <boxBufferGeometry args={[20, 0.01, 20]}/>
            <meshPhysicalMaterial/>
        </mesh>;
    };

    const Bulb = (props) => {
        return (
            <mesh {...props}>
                <pointLight castShadow/>
                <sphereBufferGeometry args={[0.4]}/>
                <meshPhongMaterial emissive={"yellow"}/>
            </mesh>
        );
    };

    return (
        <Container maxW={"container.xl"}>
            <Box h={"100vh"}>
                <Canvas style={{background: "gray"}}
                        shadowMap
                        camera={{
                            position: [3, 3, 3]
                        }}>
                    <fog attach={"fog"} args={["white", 10, 20]}/>
                    <OrbitController/>
                    <axesHelper args={[5]}/>
                    <ambientLight intensity={0.1}/>
                    <Bulb position={[0, 5, 0]}/>
                    <TheCube position={[0, 2, 0]}/>
                    <Floor position={[0, -0.5, 0]}/>
                </Canvas>
            </Box>
        </Container>
    );
}
