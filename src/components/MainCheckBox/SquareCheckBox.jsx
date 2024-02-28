import {MainCheckBox} from "./MainCheckBox.jsx";

export default function SquareCheckBox({...props}) {
    const styles = {
        width: '20px',
        height: '20px',
        borderRadius: '20%'
    };
    return <MainCheckBox {...props}
        style={styles}
    />
}