import MainForm from "../../../../components/MainForm/MainForm.jsx";
import {ContentBox} from "../../../../components/ContentBox/ContentBox.jsx";
import styles from "./KycNotice.module.css";
import {KYC_NOTICE} from "../../../../assets/reference/kyc-detail.js";
import MainButtonContainer from "../../../../components/MainButton/MainButtonContainer.jsx";
import MainButton from "../../../../components/MainButton/MainButton.jsx";

export default function KycNotice() {
    return (
            <MainForm
                    title={'자금세탁방지법 및 고객확인제도 이행을 위하여 아래 사항을 꼼꼼히 확인 부탁드립니다.'}
                    description={'자금세탁방지법 및 고객확인제도 이행을 위하여 아래 사항을 꼼꼼히 확인 부탁드립니다.'}
            >
                <ContentBox>
                    <main>
                        {
                            KYC_NOTICE.split("\n").map(
                                    (paragraph, index) =>
                                            <p key={index}>{paragraph}<br/></p>
                            )
                        }
                    </main>
                    <section>
                        <h2 className={styles.title}>엑심베이의 서비스를 이용하고자 하실 경우, 반드시 사업장 정보와 함께 다음의 고객확인정보를 입력해주셔야 합니다.</h2>
                        <table className={styles.infoTable}>
                            <colgroup>
                                <col style={{width: '20%'}}/>
                                <col style={{width: '40%'}}/>
                                <col style={{width: '40%'}}/>
                            </colgroup>
                            <thead className={styles.heading}>
                            <tr className={styles.mainHeading}>
                                <td>구분</td>
                                <td>고객확인정보</td>
                                <td>제출서류</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className={`${styles.heading} ${styles.mainColumn}`}>개인사업자</td>
                                <td className={styles.mainColumn}>
                                    <table className={styles.innerTable}>
                                        <colgroup>
                                            <col style={{width: '50%'}}/>
                                            <col style={{width: '50%'}}/>
                                        </colgroup>
                                        <tbody>
                                        <tr>
                                            <td className={styles.list}>성명</td>
                                            <td className={styles.list}>본인인증 정보</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.list}>성별</td>
                                            <td className={styles.list}>정산계좌 정보</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.list}>국적</td>
                                            <td className={styles.list}>실제소유자 정보</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.list}>생년월일</td>
                                            <td className={styles.list}>거래목적 및 자금의 원천 등</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td className={`${styles.privateDocument} ${styles.mainColumn}`}>
                                    <p>실명확인인증표(주민등록증, 운전면허증, 외국인등록증, 여권 등)</p>
                                    <div className={styles.notes}>* 대리인이 작성할 경우, 별도 위임 서류 필요</div>
                                </td>
                            </tr>
                            <tr>
                                <td className={`${styles.heading} ${styles.mainColumn}`}>법인사업자</td>
                                <td className={styles.mainColumn}>
                                    <table className={styles.innerTable}>
                                        <tbody>
                                        <tr>
                                            <td  className={styles.list}>대표자 정보(성명, 성별, 국적, 생년월일)</td>
                                        </tr>
                                        <tr>
                                            <td  className={styles.list}>실제소유자 정보</td>
                                        </tr>
                                        <tr>
                                            <td  className={styles.list}>거래목적 및 자금의 원천</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.list}>상장 정보</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.list}>설립 목적(비영리법인/단체) 등</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td className={styles.mainColumn}>
                                    <table className={styles.innerTable}>
                                        <tbody>
                                        <tr>
                                            <td className={styles.list}>실명확인인증표(사업자등록증, 고유번호증 등)</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.list}>법인등기사항전부증명서</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.list}>실제소유자 확인 서류(주주명부, 출자자명부, 정관, 규약, 규칙, 회칙 등)</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.list}>정관, 규약, 회칙 등 설립목적 확인이 가능한 서류 (비영리법인/단체)</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div className={styles.notes}>* 최대주주 등이 또 다른 법인인 경우, 최종 자연인(개인)이 확인될 때까지 또다른 법인의 실제소유자 확인 서류 필요</div>
                                    <div className={styles.notes}>* 대리인이 작성할 경우, 별도 위임 서류 필요</div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </section>
                    <MainButtonContainer>
                        <div className={styles.buttonContainer}>
                            <MainButton label={'고객확인정보 등록'}/>
                            <p className={styles.notice}>* 현재 결제가 어려우신 경우, 나중에 로그인하여 언제든지 결제를 진행하실 수 있습니다.</p>
                        </div>
                    </MainButtonContainer>
                </ContentBox>
            </MainForm>
    )
}