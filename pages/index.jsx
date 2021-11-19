import {Canvas, useFrame} from "react-three-fiber";
import {Box, Container} from "@chakra-ui/react";
import {useRef} from "react";

export default function Home() {

    const Box3D = () => {
        const boxRef = useRef();

        useFrame(state => {
            boxRef.current.rotation.x += 0.01;
            boxRef.current.rotation.y += 0.01;
        });

        return (
            <mesh ref={boxRef}>
                <boxBufferGeometry/>
                <meshBasicMaterial color={"blue"}/>
            </mesh>
        );
    };

    return (
        <Container maxW={"container.xl"}>
            <Box h={"50rem"}>
                <Canvas style={{background: "black"}}
                        camera={{
                            position: [3, 3, 3]
                        }}>
                    {/*<Box3D/>*/}
                    <axesHelper args={[5]}/>
                </Canvas>
            </Box>
        </Container>
    );
}
