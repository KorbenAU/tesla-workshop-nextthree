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
        controlsRef.current.addEventListener("drag", (e) => {
            e.object.api.position.copy(e.object.position);
            e.object.api.velocity.set(0, 0, 0);
        });
        controlsRef.current.addEventListener("dragstart", (e) => {
            e.object.api.mass.set(0);
        });
        controlsRef.current.addEventListener("dragend", (e) => {
            e.object.api.mass.set(1);
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
