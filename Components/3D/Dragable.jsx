import React, {useEffect, useRef, useState} from "react";
import {DragControls} from "three/examples/jsm/controls/DragControls";
import {extend, useThree} from "react-three-fiber";

extend({DragControls});

const Dragable = ({children}) => {
    const {camera, gl, scene} = useThree();
    const groupRef = useRef();
    const controlsRef = useRef();
    const [childrenElements, setChildrenElements] = useState([]);

    useEffect(() => {
        setChildrenElements(groupRef.current.children);
    }, []);

    useEffect(() => {
        controlsRef.current.addEventListener("hoveron", (e) => {
            scene.orbitControls.enabled = false;
        });
        controlsRef.current.addEventListener("hoveroff", (e) => {
            scene.orbitControls.enabled = true;
        });
    }, [childrenElements]);

    return (
        <group ref={groupRef}>
            <dragControls ref={controlsRef} args={[childrenElements, camera, gl.domElement]}/>
            {children}
        </group>
    );
};

export default Dragable;
