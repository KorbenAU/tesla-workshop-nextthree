import React from "react";

const Floor = (props) => {
    return <mesh {...props} receiveShadow>
        <boxBufferGeometry args={[20, 0.01, 20]}/>
        <meshPhysicalMaterial/>
    </mesh>;
};

export default Floor;
