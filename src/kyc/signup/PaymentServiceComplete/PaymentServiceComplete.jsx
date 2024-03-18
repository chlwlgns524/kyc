import BasicLayout from "../../../layout/BasicLayout/BasicLayout.jsx";
import BasicHeader from "../../common/BasicHeader/BasicHeader.jsx";
import StateTransitionDiagram from "../../common/Diagram/StateTransitionDiagram.jsx";
import PaymentServiceCompleteContent from "./PaymentServiceCompleteContent/PaymentServiceCompleteContent.jsx";

export default function PaymentServiceComplete() {
    return (
        <BasicLayout
            Header={() => <BasicHeader
                title={'온라인 결제서비스 신청완료'}
                diagram={() => <StateTransitionDiagram current={'2'}/>}
            />
        }
            Body={() => <PaymentServiceCompleteContent/>}
        />
    )
}