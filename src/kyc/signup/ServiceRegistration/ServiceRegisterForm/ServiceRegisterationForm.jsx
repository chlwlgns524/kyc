import styles from './ServiceRegisterationForm.module.css';
import MainButton from "../../../../components/MainButton/MainButton.jsx";
import {Fragment, useState} from "react";
import validateId from "../../../common/UserInfoForm/UserInput/Validator/idValidator.js";
import Agreement from "./Agreement/Agreement.jsx";
import validatePassword from "../../../common/UserInfoForm/UserInput/Validator/passwordValidator.js";
import validatePasswordCheck from "../../../common/UserInfoForm/UserInput/Validator/passwordCheckValidator.js";
import validateCompany from "../../../common/UserInfoForm/UserInput/Validator/companyNameValidator.js";
import validateManager from "../../../common/UserInfoForm/UserInput/Validator/managerValidator.js";
import validateManagerEmail from "../../../common/UserInfoForm/UserInput/Validator/managerEmailValidator.js";
import validatePhoneNumber from "../../../common/UserInfoForm/UserInput/Validator/managerPhoneNumberValidator.js";
import {AGREEMENT, PRIVACY, MARKETING} from "../../../../assets/reference/term-details.js";
import {useNavigate} from "react-router-dom";
import MainButtonContainer from "../../../../components/MainButton/MainButtonContainer.jsx";
import {INPUT_TYPE} from "../../../common/UserInfoForm/input-type.js";
import UserInfoForm from "../../../common/UserInfoForm/UserInfoForm.jsx";

export default function ServiceRegisterationForm() {
    console.log('<ServiceRegisterationForm/> rendered!');

    const agreementDetails = [
        {
            id: "terms",
            title: "이용약관에 동의합니다.(필수)",
            description: AGREEMENT.split("\n").map((line, index) =>
                <Fragment key={index}>
                    {line}<br/>
                </Fragment>
            )
        },
        {
            id: "personalInfo",
            title: "개인정보 수집/이용/제공/위탁에 동의합니다.(필수)",
            description: PRIVACY.split("\n").map((line, index) =>
                <Fragment key={index}>
                    {line}<br/>
                </Fragment>
            )
        },
        {
            id: "marketing",
            title: "마케팅 수단 이용관리에 동의합니다.(선택)",
            description: MARKETING.split("\n").map((line, index) =>
                <Fragment key={index}>
                    {line}<br/>
                </Fragment>
            )
        }
    ];
    const [agreementCheckedList, setAgreementCheckedList] = useState({
        terms: false,
        personalInfo: false,
        marketing: false,
    });

    const [user, setUser] = useState([
        {
            id: 'id',
            validated: false,
            value: ''
        },
        {
            id: 'password',
            validated: false,
            value: ''
        },
        {
            id: 'passwordCheck',
            validated: false,
            value: ''
        },
        {
            id: 'company',
            validated: false,
            value: ''
        },
        {
            id: 'manager',
            validated: false,
            value: ''
        },
        {
            id: 'managerEmail',
            validated: false,
            value: ''
        },
        {
            id: 'managerMobile',
            validated: false,
            value: ''
        },
        {
            id: 'managerTelephone',
            validated: false,
            value: ''
        }
    ]);

    const userInputList = [
        {
            id: 'id',
            inputType: INPUT_TYPE.BASIC,
            label: '아이디',
            validator: validateId,
            essential: true,
        },
        {
            id: '',
            inputType: '',
        },
        {
            id: 'password',
            inputType: INPUT_TYPE.BASIC,
            label: '비밀번호',
            validator: validatePassword,
            essential: true,
        },
        {
            id: 'passwordCheck',
            inputType: INPUT_TYPE.BASIC,
            label: '비밀번호 확인',
            validator: validatePasswordCheck,
            essential: true,
        },
        {
            id: 'company',
            inputType: INPUT_TYPE.BASIC,
            label: '회사명',
            validator: validateCompany,
            essential: true,
        },
        {
            id: '',
            inputType: '',
        },
        {
            id: 'manager',
            inputType: INPUT_TYPE.BASIC,
            label: '운영담당자명',
            validator: validateManager,
            essential: true,
        },
        {
            id: 'managerEmail',
            inputType: INPUT_TYPE.EMAIL_AUTH,
            label: '운영담당자 이메일',
            validator: validateManagerEmail,
            essential: true,
        },
        {
            id: 'managerMobile',
            inputType: INPUT_TYPE.CONTACT,
            label: '운영담당자 휴대전화번호',
            validator: validatePhoneNumber,
            essential: true,
        },
        {
            id: 'managerTelephone',
            inputType: INPUT_TYPE.CONTACT,
            label: '운영담당자 유선전화번호',
            validator: validatePhoneNumber,
            essential: false
        }
    ];

    const pickUserInput = (id, validated, value) => {
        const updatedUser = user.map(info =>
            info.id === id ? {...info, validated: validated, value: value} : info);
        setUser(updatedUser);
    }

    const currentPassword = getCurrentPassword(user);
    const navigate = useNavigate();

    return (
        <section className={styles.container}>
            <Agreement
                agreementChecked={agreementCheckedList}
                setAgreementChecked={setAgreementCheckedList}
                agreementDetails={agreementDetails}
            />
            <UserInfoForm
                title={'회원가입'}
                description={'이후 회원가입 프로세스 진행 및 서비스 관리자 페이지 접속을 위해 필요한 로그인 정보를 생성합니다.'}
                referenceValue={currentPassword}
                userInputList={userInputList}
                pickUserInput={pickUserInput}
             />
            <MainButtonContainer>
                <MainButton label={'회원가입'} onClick={() => {
                    if (checkAgreementCheckList(agreementCheckedList) && checkUserInfo(user)) {
                        alert('회원가입 성공!');
                        console.log(agreementCheckedList, user);
                        navigate('/business-info');
                    }
                }}/>
            </MainButtonContainer>
        </section>
    )
}

function getCurrentPassword(user) {
    return user.find(info => info.id === 'password').value ?? '';
}

function checkAgreementCheckList(agreementCheckedList) {
    if (!(agreementCheckedList.terms && agreementCheckedList.personalInfo)) {
        alert('필수 약관에 동의해주세요.');
        return false;
    }
    return true;
}

function checkUserInfo(user) {
    const allValidated = user.every(info => info.validated);
    if (!allValidated) {
        alert('입력한 정보가 잘못되었습니다.');
        return false;
    }
    return true;
}