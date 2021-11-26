import React, {useRef} from "react";
import {useFrame, useLoader} from "react-three-fiber";
import * as THREE from "three";
import {useBox} from "use-cannon";

const Cube = (props) => {
    const texture = useLoader(THREE.TextureLoader, "/image/wood.jpg");
    const [boxRef, api] = useBox(() => {
        return {
            mass: 1,
            ...props
        };
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
              api={api}
              {...props}
              onPointerDown={handlePointerDown}
              onPointerEnter={handlePointerEnter}
              onPointerLeave={handlePointerLeave}
        >
            <boxBufferGeometry/>
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

export default Cube;
