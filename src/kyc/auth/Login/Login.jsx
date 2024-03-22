import styles from './Login.module.css';
import logo from "/src/assets/images/logo-black.svg";
import MainButton from "../../../components/MainButton/MainButton.jsx";
import {useState} from "react";

export default function Login() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRemember] = useState(false);

    return (
            <div className={styles.containerWrapper}>
                <div className={styles.container}>
                    <div className={styles.tabButtons}>
                        <div className={styles.online}>온라인 결제서비스 회원</div>
                        <div className={styles.offline}>오프라인 결제서비스 회원</div>
                    </div>
                    <div className={styles.authWrapper}>
                        <div className={styles.authContainer}>
                            <div className={styles.logo}>
                                <img src={logo} alt="main logo"/>
                            </div>
                            <div className={styles.auth}>
                                <div className={styles.id}>
                                    <label htmlFor="id">아이디</label>
                                    <input type="text"
                                           id={"id"}
                                           name={"id"}
                                           value={id}
                                           className={id ? styles.inputExistent : undefined}
                                           onChange={e => setId(e.target.value)}
                                    />
                                </div>
                                <div className={styles.password}>
                                    <label htmlFor="password">비밀번호</label>
                                    <input type="password"
                                           id={"password"}
                                           name={"password"}
                                           value={password}
                                           className={password ? styles.inputExistent : undefined}
                                           onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className={styles.rememberMe}>
                                    <label htmlFor="rememberMe">
                                        <input type="radio"
                                               id={"rememberMe"}
                                               name={"rememberMe"}
                                               checked={rememberMe}
                                               onClick={() => setRemember(true)}
                                        /> 아이디 저장
                                    </label>
                                    <span className={styles.notice}>개인정보 보호를 위해 개인 PC에서만 사용하세요</span>
                                </div>
                                <div className={styles.buttons}>
                                    <MainButton label={"로그인"}
                                                width={'100%'}/>
                                    <MainButton label={"회원가입"}
                                                style={
                                                    {
                                                        backgroundColor: 'white',
                                                        color: 'var(--mainColor)',
                                                        width: '100%'
                                                    }
                                                }/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}