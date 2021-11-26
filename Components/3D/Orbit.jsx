import {extend, useThree} from "react-three-fiber";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

extend({OrbitControls});

const Orbit = ({attach}) => {
    const {camera, gl} = useThree();
    return <orbitControls attach={attach} args={[camera, gl.domElement]}/>;
};

export default Orbit;
