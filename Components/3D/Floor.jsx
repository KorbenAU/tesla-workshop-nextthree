import React from "react";
import {useBox} from "use-cannon";

const Floor = (props) => {
    const [ref, api] = useBox(() => {
        return {...props};
    });

    return <mesh ref={ref} {...props} receiveShadow>
        <boxBufferGeometry args={props.args}/>
        <meshPhysicalMaterial/>
    </mesh>;
};

export default Floor;
