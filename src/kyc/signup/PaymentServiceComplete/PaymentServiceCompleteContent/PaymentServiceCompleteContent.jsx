import MainButton from "../../../../components/MainButton/MainButton.jsx";
import {Link} from "react-router-dom";
import styles from "./PaymentServiceCompleteContent.module.css";
import {useEffect} from "react";

export default function PaymentServiceCompleteContent() {
    useEffect(() => {
        // jQuery 추가
        const jqueryScript = document.createElement("script");
        jqueryScript.src = "https://code.jquery.com/jquery-1.12.4.min.js";
        jqueryScript.async = true;
        document.body.appendChild(jqueryScript);

        // SDK 추가
        const sdkScript = document.createElement("script");
        sdkScript.src = "https://api-test.eximbay.com/v1/javascriptSDK.js";
        sdkScript.async = true;
        document.body.appendChild(sdkScript);

        // Cleanup 함수 정의
        return () => {
            document.body.removeChild(jqueryScript);
            document.body.removeChild(sdkScript);
        };
    }, []);

    function payment() {
        if (window.EXIMBAY) {
            window.EXIMBAY.request_pay({
                "fgkey": "0E9BE04BA239A519E68171F26B68604ADA0A85C8350DBF5C8C0FCCF98461DB09",
                "payment": {
                    "transaction_type": "PAYMENT",
                    "order_id": "20220819105102",
                    "currency": "USD",
                    "amount": "1",
                    "lang": "EN"
                },
                "merchant": {
                    "mid": "1849705C64"
                },
                "buyer": {
                    "name": "eximbay",
                    "email": "test@eximbay.com"
                },
                "url": {
                    "return_url": "eximbay.com",
                    "status_url": "eximbay.com"
                }
            });
        } else {
            console.error('EXIMBAY SDK not loaded.');
        }
    }

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
                <MainButton label={'심사비 결제'} onClick={payment}/>
                <p className={styles.notice}>* 현재 결제가 어려우신 경우, 나중에 로그인하여 언제든지 결제를 진행하실 수 있습니다.</p>
            </div>
        </>
    )
}