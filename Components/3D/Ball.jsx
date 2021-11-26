import React, {useRef} from "react";
import {useFrame, useLoader} from "react-three-fiber";
import * as THREE from "three";

const Ball = (props) => {
    const boxRef = useRef();
    const texture = useLoader(THREE.TextureLoader, "/image/wood.jpg");

    useFrame(state => {
        boxRef.current.rotation.x += 0.001;
        boxRef.current.rotation.y += 0.001;
    });

    const handlePointerDown = (e) => {
        console.log(e);
    };

    const handlePointerEnter = (e) => {
        e.object.scale.x = 1.5;
    };

    const handlePointerLeave = (e) => {
        e.object.scale.x = 1;
    };

    return (
        <mesh castShadow
            // receiveShadow
              ref={boxRef}
              {...props}
              onPointerDown={handlePointerDown}
              onPointerEnter={handlePointerEnter}
              onPointerLeave={handlePointerLeave}
        >
            <sphereBufferGeometry args={[1, 100, 100]}/>
            <meshPhysicalMaterial
                // color={"white"}
                // opacity={0.7}
                // metalness={1}
                // transparent
                // roughness={0}
                // clearcoat={1}
                // transmission={0.7}
                // side={THREE.DoubleSide}
                map={texture}
            />
        </mesh>
    );
};

export default Ball;
