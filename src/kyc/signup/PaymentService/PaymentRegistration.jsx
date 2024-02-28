import BasicLayout from "../../../layout/BasicLayout/BasicLayout.jsx";
import BasicHeader from "../../common/BasicHeader/BasicHeader.jsx";
import StateTransitionDiagram from "../../common/Diagram/StateTransitionDiagram.jsx";
import PaymentRegistrationForm from "./PaymentRegistrationForm/PaymentRegistrationForm.jsx";

export default function PaymentRegistration() {
    return (
        <BasicLayout
            Header={() => <BasicHeader
                title={'온라인 결제서비스 신청'}
                diagram={() => <StateTransitionDiagram current={'2'}/>}
            />
                }
            Body={() => <PaymentRegistrationForm/>}
        />
    )
}