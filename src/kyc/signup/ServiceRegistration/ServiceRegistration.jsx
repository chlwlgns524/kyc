import BasicLayout from "../../../layout/BasicLayout/BasicLayout.jsx";
import BasicHeader from "../../common/BasicHeader/BasicHeader.jsx";
import ServiceRegistrationForm from "./ServiceRegisterForm/ServiceRegisterationForm.jsx";
import StateTransitionDiagram from "../../common/Diagram/StateTransitionDiagram.jsx";

export default function ServiceRegistration() {
    return (
        <BasicLayout
            Header={() => <BasicHeader
                title={"온라인 결제서비스 회원가입"}
                diagram={() => <StateTransitionDiagram current={'2'}/>}
            />}
            Body={() => <ServiceRegistrationForm/>}
        />
    )
}