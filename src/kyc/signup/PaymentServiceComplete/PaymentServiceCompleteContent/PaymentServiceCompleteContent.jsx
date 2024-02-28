import MainButtonContainer from "../../../../components/MainButton/MainButtonContainer.jsx";
import MainButton from "../../../../components/MainButton/MainButton.jsx";
import {Link} from "react-router-dom";

export default function PaymentServiceCompleteContent() {
    return (
        <>
            <MainButtonContainer>
                <Link to={"/"}>
                    <MainButton label={'심사비 결제'} onClick={() => {
                        alert('결제');
                    }}/>
                </Link>
            </MainButtonContainer>
        </>
    )
}