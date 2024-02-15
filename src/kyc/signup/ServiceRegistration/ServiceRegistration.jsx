import BasicLayout from "../../../layout/BasicLayout/BasicLayout.jsx";
import BasicHeader from "../../common/BasicHeader/BasicHeader.jsx";
import ServiceRegisterationForm from "./ServiceRegisterForm/ServiceRegisterationForm.jsx";

export default function ServiceRegistration() {
    return (
        <BasicLayout
            Header={() => <BasicHeader title={"온라인 결제서비스 회원가입"}/>}
            Body={() => <ServiceRegisterationForm/>}
        />
    )
}