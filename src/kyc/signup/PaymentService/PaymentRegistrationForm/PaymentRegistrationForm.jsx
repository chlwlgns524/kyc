import MainButton from "../../../../components/MainButton/MainButton.jsx";
import {useNavigate} from "react-router-dom";
import MainButtonContainer from "../../../../components/MainButton/MainButtonContainer.jsx";
import MainForm from "../../../../components/MainForm/MainForm.jsx";
import {ContentBox} from "../../../../components/ContentBox/ContentBox.jsx";
import styles from "./PaymentRegistrationForm.module.css";
import SquareCheckBox from "../../../../components/MainCheckBox/SquareCheckBox.jsx";
import BasicModal from "../../../../components/Modal/BasicModal.jsx";
import NoticeTable from "./NoticeTable/NoticeTable.jsx";
import CircleCheckBox from "../../../../components/MainCheckBox/CircleCheckBox.jsx";
import {useState} from "react";
import {updatePaymentDetail} from "../../../../api/sign-up.js";
import {convertObjToList, PAYMENT_SERVICE_TYPE} from "../mapper/payment-service-mapper.js";

export default function PaymentRegistrationForm() {
    const navigator = useNavigate();
    const paymentServiceList = [
        {
            id: 'webOrMobile',
            label: '웹/모바일결제',
            defaultValue: true,
        },
        {
            id: 'autoPayment',
            label: '자동결제',
            defaultValue: false,
        },
        {
            id: 'linkPayment',
            label: '링크결제(SMS 또는 이메일로 결제 URL 발송',
            defaultValue: false,
        }
    ];
    const [paymentService, setPaymentService] = useState({
        webOrMobile: getObjectFromList(paymentServiceList, 'webOrMobile').defaultValue,
        autoPayment: getObjectFromList(paymentServiceList, 'autoPayment').defaultValue,
        linkPayment: getObjectFromList(paymentServiceList, 'linkPayment').defaultValue,
    });

    const paymentMethodList = [
        {
            id: 'creditCard',
            label: '신용카드 결제',
            defaultValue: true,
            category: 'domestic'
        },
        {
            id: 'simplePayment',
            label: '간편결제(카카오페이/페이코/네이버페이/토스)',
            defaultValue: false,
            category: 'domestic'
        },
        {
            id: 'cashPayment',
            label: '현금결제(가상계좌)',
            defaultValue: false,
            category: 'domestic'
        },
        {
            id: 'globalCreditCard',
            label: '글로벌 신용카드 결제',
            defaultValue: false,
            category: 'abroad'
        },
        {
            id: 'globalSimplePayment',
            label: '글로벌 간편결제(Paypal, Alipay+)',
            defaultValue: false,
            category: 'abroad'
        },
        {
            id: 'chinesePayment',
            label: '중국결제(Wechat, Alipay)',
            defaultValue: false,
            category: 'abroad'
        },
        {
            id: 'japanesePayment',
            label: '일본결제(eContext-편의점, 은행 결제)',
            defaultValue: false,
            category: 'abroad'
        },
        {
            id: 'others',
            label: '기타해외결제',
            defaultValue: false,
            category: 'abroad'
        }
    ];
    const [paymentMethod, setPaymentMethod] = useState({
        domestic: {
            creditCard: getObjectFromList(paymentMethodList, 'creditCard').defaultValue,
            simplePayment: getObjectFromList(paymentMethodList, 'simplePayment').defaultValue,
            cashPayment: getObjectFromList(paymentMethodList, 'cashPayment').defaultValue
        },
        aborad: {
            globalCreditCard: getObjectFromList(paymentMethodList, 'globalCreditCard').defaultValue,
            globalSimplePayment: getObjectFromList(paymentMethodList, 'globalSimplePayment').defaultValue,
            chinesePayment: getObjectFromList(paymentMethodList, 'chinesePayment').defaultValue,
            japanesePayment: getObjectFromList(paymentMethodList, 'japanesePayment').defaultValue,
            others: getObjectFromList(paymentMethodList, 'others').defaultValue
        }
    });
    const [description, setDescription] = useState('');

    const countryList = [
        {
            id: 'USD',
            label: '미국',
            defaultValue: true,
        },
        {
            id: 'EUR',
            label: '유럽',
            defaultValue: false,
        },
        {
            id: 'JPY',
            label: '일본',
            defaultValue: false,
        },
        {
            id: 'SGD',
            label: '싱가폴',
            defaultValue: false,
        },
        {
            id: 'AUD',
            label: '호주',
            defaultValue: false,
        },
        {
            id: 'HKD',
            label: '홍콩',
            defaultValue: false,
        },
        {
            id: 'THB',
            label: '태국',
            defaultValue: false,
        },
        {
            id: 'GBP',
            label: '영국',
            defaultValue: false,
        },
        {
            id: 'CAD',
            label: '캐나다',
            defaultValue: false,
        },
        {
            id: 'RUB',
            label: '러시아',
            defaultValue: false,
        },
        {
            id: 'TWD',
            label: '타이완',
            defaultValue: false,
        },
        {
            id: 'MYR',
            label: '말레이시아',
            defaultValue: false,
        },
        {
            id: 'VND',
            label: '베트남',
            defaultValue: false,
        },
        {
            id: 'PHP',
            label: '필리핀',
            defaultValue: false,
        },
        {
            id: 'MNT',
            label: '몽골',
            defaultValue: false,
        },
        {
            id: 'NZD',
            label: '뉴질랜드',
            defaultValue: false,
        },
        {
            id: 'AED',
            label: '아랍에미레이트',
            defaultValue: false,
        },
        {
            id: 'MOP',
            label: '마카오',
            defaultValue: false,
        },
        {
            id: 'BRL',
            label: '브라질',
            defaultValue: false,
        },
        {
            id: 'KZT',
            label: '카자흐스탄',
            defaultValue: false,
        },
        {
            id: 'NOK',
            label: '노르웨이',
            defaultValue: false,
        },
        {
            id: 'SAR',
            label: '사우디아라비아',
            defaultValue: false,
        },
        {
            id: 'TRY',
            label: '터키',
            defaultValue: false,
        },
        {
            id: 'KRW',
            label: '한국',
            defaultValue: false,
        },
    ];
    const [targetCountry, setTargetCountry] = useState({
        USD: getObjectFromList(countryList, 'USD').defaultValue,
        EUR: getObjectFromList(countryList, 'EUR').defaultValue,
        JPY: getObjectFromList(countryList, 'JPY').defaultValue,
        SGD: getObjectFromList(countryList, 'SGD').defaultValue,
        AUD: getObjectFromList(countryList, 'AUD').defaultValue,
        HKD: getObjectFromList(countryList, 'HKD').defaultValue,
        THB: getObjectFromList(countryList, 'THB').defaultValue,
        GBP: getObjectFromList(countryList, 'GBP').defaultValue,
        CAD: getObjectFromList(countryList, 'CAD').defaultValue,
        RUB : getObjectFromList(countryList, 'RUB').defaultValue,
        TWD: getObjectFromList(countryList, 'TWD').defaultValue,
        MYR: getObjectFromList(countryList, 'MYR').defaultValue,
        VND: getObjectFromList(countryList, 'VND').defaultValue,
        PHP: getObjectFromList(countryList, 'PHP').defaultValue,
        MNT: getObjectFromList(countryList, 'MNT').defaultValue,
        NZD: getObjectFromList(countryList, 'NZD').defaultValue,
        AED: getObjectFromList(countryList, 'AED').defaultValue,
        MOP: getObjectFromList(countryList, 'MOP').defaultValue,
        BRL: getObjectFromList(countryList, 'BRL').defaultValue,
        KZT: getObjectFromList(countryList, 'KZT').defaultValue,
        NOK: getObjectFromList(countryList, 'NOK').defaultValue,
        SAR: getObjectFromList(countryList, 'SAR').defaultValue,
        TRY : getObjectFromList(countryList, 'TRY').defaultValue,
        KRW: getObjectFromList(countryList, 'KRW').defaultValue,
    });
    console.log(targetCountry);
    const [finalAgreement, setFinalAgreement] = useState(false);

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const hanldeCloseModal = () => setOpenModal(false);

/*
    const chunkSize = 4;
    const numberOfLists = Math.ceil(countryList.length / chunkSize);
    const lists = Array.from({ length: numberOfLists }, (_, index) => {
        const start = index * chunkSize;
        const end = start + chunkSize;
        const chunk = countryList.slice(start, end);

        return (
                <ul key={index} className={styles.checkboxContainer}>
                    {chunk.map(country => (
                            <li key={country.id}>
                                <SquareCheckBox
                                        id={country.id}
                                        checked={targetCountry[country.id]}
                                        onChange={() => setTargetCountry(prevState => ({
                                            ...prevState,
                                            [country.id]: !prevState[country.id]
                                        }))}
                                />
                                <label htmlFor={country.id}>{country.label}</label>
                            </li>
                    ))}
                </ul>
        );
    });
 */

    return (
        <>
            <MainForm
                title={'결제 서비스 신청'}
                description={'서비스 이용 안내를 위하여 참고하는 정보로, 확인 가능한 사항에 대해 모두 체크 부탁드립니다.'}>
                <ContentBox className={styles.container}>
                    <div className={styles.paymentService}>
                        <div className={styles.label}>
                            결제서비스
                        </div>
                        <ul className={styles.checkboxContainer}>
                            {
                                paymentServiceList.map(service =>
                                    <li key={service.id}>
                                        <SquareCheckBox
                                            id={service.id}
                                            checked={paymentService[service.id]}
                                            onChange={() => setPaymentService(prevState => ({
                                                ...prevState,
                                                [service.id]: !prevState[service.id]
                                            }))}
                                        />
                                        <label htmlFor={service.id}>{service.label}</label>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className={styles.paymentMethod}>
                        <div className={styles.label}>결제수단(중복 선택 가능)</div>
                        <div className={styles.paymentMethodInnerWrapper}>
                            <div>
                                <div>국내 결제</div>
                                <ul className={styles.checkboxContainer}>
                                    {
                                        paymentMethodList.map(method => method.category === 'domestic' ?
                                            <li key={method.id}>
                                                <SquareCheckBox
                                                    id={method.id}
                                                    checked={paymentMethod.domestic[method.id]}
                                                    onChange={() => setPaymentMethod(prevState => ({
                                                        ...prevState,
                                                        domestic: {
                                                            ...prevState.domestic,
                                                            [method.id]: !prevState.domestic[method.id]
                                                        }
                                                    }))}
                                                />
                                                <label htmlFor={method.id}>{method.label}</label>
                                            </li>
                                            : undefined
                                        )
                                    }
                                </ul>
                            </div>
                            <div>
                                <div>해외 결제</div>
                                <ul className={styles.checkboxContainer}>
                                    {
                                        paymentMethodList.map(method => method.category === 'abroad' ?
                                            <li key={method.id}>
                                                <SquareCheckBox
                                                    id={method.id}
                                                    checked={paymentMethod.aborad[method.id]}
                                                    onChange={() => setPaymentMethod(prevState => ({
                                                        ...prevState,
                                                        aborad: {
                                                            ...prevState.aborad,
                                                            [method.id]: !prevState.aborad[method.id]
                                                        }
                                                    }))}
                                                />
                                                <label htmlFor={method.id}>{method.label}</label>
                                            </li>
                                            : undefined
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.productDescription}>
                        <div className={styles.label}>사이트에서 판매하는 상품 또는 서비스에 대한 설명</div>
                        <div className={styles.description}
                             contentEditable={true}
                            onInput={e => setDescription(e.target.textContent)}>
                        </div>
                    </div>
                    <div className={styles.serviceTarget}>
                        <div className={styles.label}>서비스 타겟 국가</div>
                        <div className={styles.checkBonxContainerWrapper}>
                            <ul className={styles.countryListContainer}>
                                {
                                    countryList.map((country) =>
                                        <li key={country.id}>
                                            <SquareCheckBox
                                                id={country.id}
                                                checked={targetCountry[country.id]}
                                                onChange={() => setTargetCountry(prevState => ({
                                                    ...prevState,
                                                    [country.id]: !prevState[country.id]
                                                }))}
                                            />
                                            <label htmlFor={country.id}>{country.label}</label>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    <div className={styles.notice}>
                        <div className={styles.label}><span className={styles.exclamation}>!</span> 참고사항</div>
                        <ul className={styles.listContainer}>
                            <li>이용하실 서비스 정보 및 사업자 정보 입력이 완료되면 심사 및 심사 조건에 대한 안내 메일을 드립니다.</li>
                            <li>이어지는 페이지에서 사업자 정보를 모두 입력해주시기 바랍니다.</li>
                            <li>사용하시는 솔루션에 따라 당사 서비스 도입이 불가할 수 있습니다.</li>
                            <li>www.eximbay.com {'>'} 기술지원 자료실 {'>'} 웹결제 모듈을 미리 확인해 주시기 바랍니다.</li>
                        </ul>
                        <div className={styles.agreement}>
                            {
                                openModal &&
                                <BasicModal
                                    onClose={hanldeCloseModal}
                                >
                                    <div>
                                        <NoticeTable/>
                                        <MainButtonContainer>
                                            <MainButton
                                                onClick={() => {
                                                    setOpenModal(false);
                                                    setFinalAgreement(true);
                                                }}
                                                label={'금지/유의 업종을 확인하였습니다.'}
                                                style={{width: '50%', backgroundColor: 'black'}}
                                            />
                                        </MainButtonContainer>
                                    </div>
                                </BasicModal>
                            }
                            <CircleCheckBox
                                checked={finalAgreement}
                                onChange={() => {
                                    if (finalAgreement)
                                        setFinalAgreement(false);
                                    else
                                        handleOpenModal();
                                }}/>
                            금지업종 취급 시 결제 서비스 제공이 불가하며 유사 시 금지업종 취급에 따른 모든 책임은 가맹점에 있습니다. (필수 동의)
                        </div>
                    </div>
                </ContentBox>
            </MainForm>
            <MainButtonContainer>
                <MainButton label={'이전'} onClick={() => navigator(-1)}/>
                <MainButton label={'임시저장'} onClick={() => {
                    updatePaymentDetail(
                            convertObjToList(paymentService, PAYMENT_SERVICE_TYPE.paymentService),
                            [...convertObjToList(paymentMethod.domestic, PAYMENT_SERVICE_TYPE.paymentMethod),
                                ...convertObjToList(paymentMethod.aborad, PAYMENT_SERVICE_TYPE.paymentMethod)
                            ],
                            description,
                            convertObjToList(targetCountry, PAYMENT_SERVICE_TYPE.countryCode)
                    )
                            .then(response => {
                                console.log(response);
                                const {responseCode, data} = response;
                                if (responseCode === 'SUCCESS') {
                                    alert('임시저장에 성공하였습니다.');
                                }
                            })
                            .catch(error => {
                                console.error(error)
                                alert('결제 서비스 신청에 실패하였습니다. 다시 시도해 주세요.');
                            });
                }}/>
                <MainButton label={'다음'} onClick={() => {
                    if (finalAgreement) {
                        if (!checkIfOneIsCheckedAtLeast(paymentService))
                            alert('결제 서비스를 하나 이상 선택해 주세요.');
                        else if (!checkIfOneIsCheckedAtLeast(paymentMethod))
                            alert('결제 수단을 적어도 하나 이상 선택해 주세요.');
                        else if (!checkIfOneIsCheckedAtLeast(targetCountry))
                            alert('서비스 타겟 국가를 적어도 하나 이상 선택해 주세요.');
                        else {
                           updatePaymentDetail(
                                   convertObjToList(paymentService, PAYMENT_SERVICE_TYPE.paymentService),
                                   [...convertObjToList(paymentMethod.domestic, PAYMENT_SERVICE_TYPE.paymentMethod),
                                       ...convertObjToList(paymentMethod.aborad, PAYMENT_SERVICE_TYPE.paymentMethod)
                                   ],
                                   description,
                                   convertObjToList(targetCountry, PAYMENT_SERVICE_TYPE.countryCode)
                           )
                                   .then(response => {
                                       console.log(response);
                                       const {responseCode, data} = response;
                                       if (responseCode === 'SUCCESS') {
                                           alert('결제 서비스에 성공하였습니다.');
                                           navigator('/payment-complete');
                                       }
                                   })
                                   .catch(error => {
                                       console.log(error);
                                       alert('결제 서비스 신청에 실패하였습니다. 다시 시도해 주세요.');
                                   });
                        }
                    }
                    else {
                        alert('금지 업종 약관에 관한 동의가 필요합니다.');
                    }
                }}/>
            </MainButtonContainer>
        </>
    )
}

function getObjectFromList(list, id) {
    return list.find(obj => obj.id === id);
}

function checkIfOneIsCheckedAtLeast(obj) {
    for (const key in obj)
        if (obj[key])
            return true;
    return false;
}