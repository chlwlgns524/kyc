import BasicLayout from "../../../layout/BasicLayout/BasicLayout.jsx";
import BasicHeader from "../../common/BasicHeader/BasicHeader.jsx";
import StateTransitionDiagram from "../../common/Diagram/StateTransitionDiagram.jsx";
import BusinessDetailDomesticForm from "./BusinessDetailDomesticForm/BusinessDetailDomesticForm.jsx";

export default function BusinessDetailDomestic() {
    return (
        <BasicLayout
            Header={() => 
                <BasicHeader 
                title={'고객확인을 위한 사업자정보 입력'}
                diagram={() => <StateTransitionDiagram current={'2'}/>}
                />}
            Body={() => <BusinessDetailDomesticForm/>}
        />
    )
}