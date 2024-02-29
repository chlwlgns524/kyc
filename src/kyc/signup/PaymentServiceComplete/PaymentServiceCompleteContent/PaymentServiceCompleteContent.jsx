import MainButtonContainer from "../../../../components/MainButton/MainButtonContainer.jsx";
import MainButton from "../../../../components/MainButton/MainButton.jsx";
import {Link} from "react-router-dom";
import styles from "./PaymentServiceCompleteContent.module.css";

export default function PaymentServiceCompleteContent() {
    return (
        <>
            <div className={styles.messageContainer}>
                <p>서비스 신청이 정상적으로 접수되었습니다.</p>
                <p>저희 엑심베이에서는 서비스의 안정적인 운영을 위해 가맹점 심사를 진행하고 있습니다.</p>
                <p>이에 따라 신청하신 서비스에 대한 <strong>심사비용으로 33만원(VAT포함)</strong>을 청구하고 있습니다.</p>
                <p>심사 결과와 무관하게 청구는 비용이며, 환불이 불가함을 양해 부탁드립니다.</p>
                <br/>
                <p>추가 문의사항이나 도움이 필요하신 경우 onlinesupport@eximbay.com으로 문의해주시기 바랍니다.</p>
            </div>
            <div className={styles.buttonContainer}>
                <Link to={"/"}>
                    <MainButton label={'심사비 결제'} onClick={() => {
                        alert('결제');
                    }}/>
                </Link>
                <p className={styles.notice}>* 현재 결제가 어려우신 경우, 나중에 로그인하여 언제든지 결제를 진행하실 수 있습니다.</p>
            </div>
        </>
    )
}