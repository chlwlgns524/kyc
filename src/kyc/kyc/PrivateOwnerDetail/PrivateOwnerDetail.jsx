import BasicLayout from "../../../layout/BasicLayout/BasicLayout.jsx";
import BasicHeader from "../../common/BasicHeader/BasicHeader.jsx";
import PrivateOwnerDetailForm from "./PrivateOwnerDetailForm/PrivateOwnerDetailForm.jsx";

export default function PrivateOwnerDetail() {
    return (
            <BasicLayout
                    Header={() => <BasicHeader
                            title={"고객확인을 위한 사업자정보 입력"}
                    />}
                    Body={() => <PrivateOwnerDetailForm/>}
            />
    )
}