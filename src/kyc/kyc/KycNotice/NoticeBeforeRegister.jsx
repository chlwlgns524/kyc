import BasicLayout from "../../../layout/BasicLayout/BasicLayout.jsx";
import BasicHeader from "../../common/BasicHeader/BasicHeader.jsx";
import KycNotice from "./KycNotice/KycNotice.jsx";

export default function NoticeBeforeRegister() {
    return (
        <BasicLayout
                Header={() => <BasicHeader/>}
                Body={() => <KycNotice/>}
        />
    )
}