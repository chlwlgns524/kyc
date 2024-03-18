import BasicLayout from "../../../../layout/BasicLayout/BasicLayout.jsx";
import BasicHeader from "../../../common/BasicHeader/BasicHeader.jsx";
import StateTransitionDiagram from "../../../common/Diagram/StateTransitionDiagram.jsx";
import BusinessDetailPrivateForm from "./BusinessDetailPrivateForm/BusinessDetailPrivateForm.jsx";

export default function BusinessDetailPrivate() {
    return (
        <BasicLayout
            Header={() => 
                <BasicHeader 
                title={'고객확인을 위한 사업자정보 입력'}
                diagram={() => <StateTransitionDiagram current={'2'}/>}
                />}
            Body={() => <BusinessDetailPrivateForm/>}
        />
    )
}