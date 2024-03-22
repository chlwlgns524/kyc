import BasicLayout from "../../../layout/BasicLayout/BasicLayout.jsx";
import BasicHeader from "../../common/BasicHeader/BasicHeader.jsx";
import CorporateOwnerDetailForm from "./CorporateOwnerDetailForm/CorporateOwnerDetailForm.jsx";

export default function CorporateOwnerDetail() {
    return (
            <BasicLayout
                    Header={() => <BasicHeader
                            title={"고객확인을 위한 사업자정보 입력"}
                    />}
                    Body={() => <CorporateOwnerDetailForm/>}
            />
    )
}