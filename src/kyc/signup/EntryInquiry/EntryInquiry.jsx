import BasicLayout from "../../../layout/BasicLayout/BasicLayout.jsx";
import BasicHeader from "../../common/BasicHeader/BasicHeader.jsx";
import EntryInquiryForm from "./EntryInquiryForm/EntryInquiryForm.jsx";
import StateTransitionDiagram from "../../common/Diagram/StateTransitionDiagram.jsx";

const HOSTING_SITES = [
    {
        name: "nhn-commerse",
        label: "NHN커머스(구 고도몰)"
    },
    {
        name: "sir-soft",
        label: "SIR소프트"
    },
    {
        name: "gabia",
        label: "가비아 퍼스트몰"
    },
    {
        name: "make-shop",
        label: "메이크샵"
    },
    {
        name: "six-shop",
        label: "식스샵"
    },
    {
        name: "imweb",
        label: "아임웹"
    },
    {
        name: "wisa",
        label: "위사"
    },
    {
        name: "cafe24",
        label: "카페24"
    },
    {
        name: "portone",
        label: "포트원"
    },
];

export default function EntryInquiry() {
    const buttonStyle = {
        width: "200px",
        height: "50px",
        borderRadius: "50px",
    };

    return (
        <BasicLayout
            Header={() => <BasicHeader
                title={"온라인 결제 서비스 신청"}
                diagram={() => <StateTransitionDiagram current={"1"}/>}
            />}
            Body={() => <EntryInquiryForm hostingList={HOSTING_SITES} buttonStyle={buttonStyle}/>}
        />
    )
}