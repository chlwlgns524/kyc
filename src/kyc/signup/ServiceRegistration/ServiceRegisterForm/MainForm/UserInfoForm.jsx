import styles from "./UserInfoForm.module.css"
import UserInput from "./UserInput/UserInput.jsx";
import PropTypes from "prop-types";
import TelephoneUserInput from "./UserInput/TelephoneUserInput.jsx";
import MainForm from "../../../../../components/MainForm/MainForm.jsx";

export default function UserInfoForm({user, userInputList, pickUserInput}) {
    console.log("<UserInfoForm/> rendered!");

    const currentPassword = getCurrentPassword(user);

    return (
        <MainForm
            title={"회원가입"}
            description={"이후 회원가입 프로세스 진행 및 서비스 관리자 페이지 접속을 위해 필요한 로그인 정보를 생성합니다."}
        >
            <div className={styles.maxtrix}>
                {
                    userInputList.map((userInput, index) => {
                        switch (userInput.id) {
                            case '':
                                return <div key={index}></div>
                            case 'managerMobile':
                            case 'managerTelephone':
                                return <TelephoneUserInput
                                    key={userInput.id}
                                    id={userInput.id}
                                    label={userInput.label}
                                    validator={userInput.validator}
                                    pickUserInput={pickUserInput}
                                />
                            default:
                                return <UserInput
                                    key={userInput.id}
                                    id={userInput.id}
                                    label={userInput.label}
                                    referenceValue={currentPassword}
                                    validator={userInput.validator}
                                    pickUserInput={pickUserInput}
                                />
                        }
                    })
                }
            </div>
        </MainForm>
    )
}

function getCurrentPassword(user) {
    return user.find(info => info.id === 'password').value ?? '';
}

UserInfoForm.propTypes = {
    user: PropTypes.array,
    userInputList: PropTypes.array.isRequired,
    pickUserInput: PropTypes.func.isRequired,
}