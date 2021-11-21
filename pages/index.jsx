import {Canvas, useFrame, extend, useThree} from "react-three-fiber";
import {Box, Container} from "@chakra-ui/react";
import {useRef} from "react";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

extend({OrbitControls});

export default function Home() {

    const OrbitController = () => {
        const {camera, gl} = useThree();
        return <orbitControls args={[camera, gl.domElement]}/>;
    };

    const TheCube = (props) => {
        const boxRef = useRef();

        useFrame(state => {
            boxRef.current.rotation.x += 0.01;
            boxRef.current.rotation.y += 0.01;
        });

        return (
            <mesh castShadow receiveShadow ref={boxRef} {...props}>
                <boxBufferGeometry/>
                <meshPhysicalMaterial color={"blue"}/>
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
            <Box h={"50rem"}>
                <Canvas style={{background: "gray"}}
                        shadowMap
                        camera={{
                            position: [3, 3, 3]
                        }}>
                    <fog attach={'fog'} args={["white", 1, 2]}/>
                    <OrbitController/>
                    <axesHelper args={[5]}/>
                    <ambientLight intensity={0.1}/>
                    <Bulb position={[0, 5, 0]}/>
                    <TheCube position={[1, 2, 1]}/>
                    <Floor position={[0, 0, 0]}/>
                </Canvas>
            </Box>
        </Container>
    );
}
