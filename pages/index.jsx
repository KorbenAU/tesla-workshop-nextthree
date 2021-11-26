import {Canvas, extend} from "react-three-fiber";
import {Box, Container} from "@chakra-ui/react";
import {Suspense} from "react";
import {Physics} from "use-cannon";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import Orbit from "../Components/3D/Orbit";
import Cube from "../Components/3D/Cube";
import Background from "../Components/3D/Background";
import Ball from "../Components/3D/Ball";
import Floor from "../Components/3D/Floor";
import Bulb from "../Components/3D/Bulb";
import Dragable from "../Components/3D/Dragable";

extend({OrbitControls});

export default function Home() {

    return (
        <Container maxW={"container.xl"}>
            <Box h={"100vh"}>
                <Canvas style={{background: "gray"}}
                        shadowMap
                        camera={{
                            position: [5, 5, 5]
                        }}>
                    {/*<fog attach={"fog"} args={["white", 10, 20]}/>*/}
                    <Orbit attach={"orbitControls"}/>
                    <axesHelper args={[5]}/>
                    <ambientLight intensity={0.1}/>
                    <Bulb position={[0, 5, 0]}/>
                    <Physics>
                        <Dragable>
                            <Suspense fallback={null}>
                                <Cube position={[0, 2, 0]}/>
                                <Ball position={[2, 2, 0]}/>
                            </Suspense>
                            <Suspense fallback={null}>
                                <Background/>
                            </Suspense>
                        </Dragable>
                        <Floor position={[0, 0, 0]} args={[20, 0.1, 20]}/>
                    </Physics>
                </Canvas>
            </Box>
        </Container>
    );
}
