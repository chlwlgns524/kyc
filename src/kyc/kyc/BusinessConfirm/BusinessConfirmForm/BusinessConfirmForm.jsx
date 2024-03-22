import MainForm from "../../../../components/MainForm/MainForm.jsx";
import CircleCheckBox from "../../../../components/MainCheckBox/CircleCheckBox.jsx";
import styles from "./BusinessConfirmForm.module.css";
import {useState} from "react";
import MainButtonContainer from "../../../../components/MainButton/MainButtonContainer.jsx";
import MainButton from "../../../../components/MainButton/MainButton.jsx";
import {Link} from "react-router-dom";

export default function BusinessConfirmForm() {
    const [isForProfit, setIsForProfit] = useState(true);
    const [coRepresentativeExistent, setCoRepresentativeExistent] = useState(false);
    const [delegating, setDelegating] = useState(false);

    const [account, setAccount] = useState({
        bankName: '',
        accountHolder: '',
        accountNumber: ''
    });
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');


    console.log(account);
    return (
            <>
                <MainForm
                        title={'사업자 정보 확인'}
                        description={'사업장 정보 및 고객확인 정보 입력 전 아래 사항을 확인해 주세요. (필수)'}
                >
                    <main className={styles.container}>
                        <section className={styles.row}>
                            <ul className={styles.questionnaire}>
                                <li className={styles.question}>법인 구분을 선택해 주세요.</li>
                                <li className={styles.choice}>
                                    <label>
                                        <CircleCheckBox
                                                checked={isForProfit}
                                                onChange={() => setIsForProfit(true)}
                                        /> 영리법인
                                    </label>
                                </li>
                                <li className={styles.choice}>
                                    <label>
                                        <CircleCheckBox
                                                checked={!isForProfit}
                                                onChange={() => setIsForProfit(false)}
                                        /> 비영리법인
                                    </label>
                                </li>
                            </ul>
                        </section>
                        <section className={styles.row}>
                            <ul className={styles.questionnaire}>
                                <li className={styles.question}>공동 대표가 존재하나요?</li>
                                <li className={styles.choice}>
                                    <label>
                                        <CircleCheckBox
                                                checked={coRepresentativeExistent}
                                                onChange={() => setCoRepresentativeExistent(true)}
                                        /> 예</label>
                                </li>
                                <li className={styles.choice}>
                                    <label>
                                        <CircleCheckBox
                                                checked={!coRepresentativeExistent}
                                                onChange={() => setCoRepresentativeExistent(false)}
                                        /> 아니오</label>
                                </li>
                            </ul>
                        </section>
                        <section className={styles.row}>
                            <ul className={styles.questionnaire}>
                                <li className={styles.question}>대리인이 작성을 진행 중인가요?</li>
                                <li className={styles.choice}>
                                    <label>
                                        <CircleCheckBox
                                                checked={delegating}
                                                onChange={() => setDelegating(true)}
                                        /> 예</label>
                                </li>
                                <li className={styles.choice}>
                                    <label>
                                        <CircleCheckBox
                                                checked={!delegating}
                                                onChange={() => setDelegating(false)}
                                        /> 아니오</label>
                                </li>
                            </ul>
                        </section>
                    </main>
                </MainForm>
                <MainForm
                        title={'귀사의 정산 계좌를 입력해주세요 (1/4)'}
                        description={'자금세탁방지법 및 고객확인제도 이행을 위하여 아래 사항을 꼼꼼히 확인 부탁드립니다.'}>
                    <main className={styles.container}>
                        <section className={styles.row}>
                            <ul className={styles.questionnaire}>
                                <li className={styles.title}>정산계좌 <div className={styles.essential}>*</div></li>
                                <li className={styles.input}>
                                    <div className={styles.inputWrapper}>
                                        <input
                                                type="text"
                                                value={account.bankName}
                                                onChange={e => setAccount(prevState => ({...prevState, bankName: e.target.value}))}
                                        />
                                        <input
                                                type="text"
                                                value={account.accountHolder}
                                                onChange={e => setAccount(prevState => ({...prevState, accountHolder: e.target.value}))}
                                        />
                                        <input
                                                type="text"
                                                value={account.accountNumber}
                                                onChange={e => setAccount(prevState => ({...prevState, accountNumber: e.target.value}))}
                                        />
                                        <span>사용 가능한 아이디입니다.</span>
                                    </div>
                                </li>
                            </ul>
                            <ul className={styles.questionnaire}>
                                <li className={styles.title}>정산담당자 이메일 <div className={styles.essential}>*</div></li>
                                <li className={styles.input}>
                                    <div className={styles.inputWrapper}>
                                        <input
                                                type="text"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                        />
                                        <span>사용 가능한 아이디입니다.</span>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </main>
                    <main className={styles.container}>
                        <section className={styles.row}>
                            <ul className={styles.questionnaire}>
                                <li className={styles.title}>정산담당자 휴대전화번호 <div className={styles.essential}>*</div></li>
                                <li className={styles.input}>
                                    <div className={styles.inputWrapper}>
                                        <input
                                                type="text"
                                                value={mobile}
                                                onChange={e => setMobile(e.target.value)}
                                        />
                                        <span>사용 가능한 아이디입니다.</span>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </main>
                </MainForm>
                <MainButtonContainer>
                    <MainButton label={'임시저장'}/>
                    <Link to={`/representative-info?delegating=${delegating}`}>
                        <MainButton label={'다음'}/>
                    </Link>
                </MainButtonContainer>
            </>
    )
}