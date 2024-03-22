import BasicLayout from "../../../layout/BasicLayout/BasicLayout.jsx";
import BasicHeader from "../../common/BasicHeader/BasicHeader.jsx";
import RepresentativeDetailForm from "./RepresentativeDetailForm/RepresentativeDetailForm.jsx";

export default function RepresentativeDetail() {
    return (
            <BasicLayout
                    Header={() => <BasicHeader
                            title={"고객확인을 위한 사업자정보 입력"}
                    />}
                    Body={() => <RepresentativeDetailForm/>}
            />
    )
}