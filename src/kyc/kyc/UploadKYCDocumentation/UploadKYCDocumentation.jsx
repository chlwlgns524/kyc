import BasicLayout from "../../../layout/BasicLayout/BasicLayout.jsx";
import BasicHeader from "../../common/BasicHeader/BasicHeader.jsx";
import UploadKYCDocumentationForm from "./UploadKYCDocumentationForm/UploadKYCDocumentationForm.jsx";

export default function UploadKYCDocumentation() {
    return (
            <BasicLayout
                    Header={() => <BasicHeader
                            title={"고객확인을 위한 사업자정보 입력"}
                    />}
                    Body={() => <UploadKYCDocumentationForm/>}
            />
    )
}