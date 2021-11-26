import React from "react";

const Bulb = (props) => {
    return (
        <mesh {...props}>
            <pointLight castShadow/>
            <sphereBufferGeometry args={[0.4]}/>
            <meshPhongMaterial emissive={"yellow"}/>
        </mesh>
    );
};

export default Bulb;
