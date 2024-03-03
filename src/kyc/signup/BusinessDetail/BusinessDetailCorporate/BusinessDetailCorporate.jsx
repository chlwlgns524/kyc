import BasicLayout from "../../../../layout/BasicLayout/BasicLayout.jsx";
import BasicHeader from "../../../common/BasicHeader/BasicHeader.jsx";
import StateTransitionDiagram from "../../../common/Diagram/StateTransitionDiagram.jsx";
import BusinessDetailCorporateForm from "./BusinessDetailCorporateForm/BusinessDetailCorporateForm.jsx";
import CorporateUserProvider from "./CorporateUserProvider.jsx";

export default function BusinessDetailCorporate() {
    return (
        <BasicLayout
            Header={() => 
                <BasicHeader 
                title={'고객확인을 위한 사업자정보 입력'}
                diagram={() => <StateTransitionDiagram current={'2'}/>}
                />}
            Body={() =>
            <CorporateUserProvider>
                <BusinessDetailCorporateForm/>
            </CorporateUserProvider>
            }
        />
    )
}