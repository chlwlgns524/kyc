import BasicLayout from "../../../layout/BasicLayout/BasicLayout.jsx";
import BasicHeader from "../../common/BasicHeader/BasicHeader.jsx";
import BusinessInfoForm from "./BusinessInfoForm/BusinessInfoForm.jsx";
import StateTransitionDiagram from "../../common/Diagram/StateTransitionDiagram.jsx";

export default function BusinessInfo() {
    return (
        <BasicLayout
            Header={() => <BasicHeader
                title={"사업자 정보 입력"}
                diagram={() => <StateTransitionDiagram  current={'3'}/>}
            />}
            Body={() => <BusinessInfoForm/>}
        />
    )
}