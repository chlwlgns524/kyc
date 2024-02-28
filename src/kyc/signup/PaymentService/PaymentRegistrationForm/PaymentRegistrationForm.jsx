import MainButton from "../../../../components/MainButton/MainButton.jsx";
import {Link} from "react-router-dom";
import MainButtonContainer from "../../../../components/MainButton/MainButtonContainer.jsx";
import MainForm from "../../../../components/MainForm/MainForm.jsx";
import {ContentBox} from "../../../../components/ContentBox/ContentBox.jsx";
import styles from "./PaymentRegistrationForm.module.css";
import SquareCheckBox from "../../../../components/MainCheckBox/SquareCheckBox.jsx";
import BasicModal from "../../../../components/Modal/BasicModal.jsx";
import NoticeTable from "./PaymentService/NoticeTable/NoticeTable.jsx";
import CircleCheckBox from "../../../../components/MainCheckBox/CircleCheckBox.jsx";
import {useState} from "react";

export default function PaymentRegistrationForm() {
    const paymentServiceList = [
        {
            id: 'webOrMobile',
            label: '웹/모바일결제'
        },
        {
            id: 'autoPayment',
            label: '자동결제'
        },
        {
            id: 'linkPayment',
            label: '링크결제(SMS 또는 이메일로 결제 URL 발송'
        }
    ];
    const [paymentService, setPaymentService] = useState({
        webOrMobile: false,
        autoPayment: false,
        linkPayment: false
    });

    const paymentMethodList = [
        {
            id: 'creditCard',
            label: '신용카드 결제',
            category: 'domestic'
        },
        {
            id: 'simplePayment',
            label: '간편결제(카카오페이/페이코/네이버페이/토스)',
            category: 'domestic'
        },
        {
            id: 'cashPayment',
            label: '현금결제(가상계좌)',
            category: 'domestic'
        },
        {
            id: 'globalCreditCard',
            label: '글로벌 신용카드 결제',
            category: 'abroad'
        },
        {
            id: 'globalSimplePayment',
            label: '글로벌 간편결제(Paypal, Alipay+)',
            category: 'abroad'
        },
        {
            id: 'chinesePayment',
            label: '중국결제(Wechat, Alipay)',
            category: 'abroad'
        },
        {
            id: 'japanesePayment',
            label: '일본결제(eContext-편의점, 은행 결제)',
            category: 'abroad'
        },
        {
            id: 'others',
            label: '기타해외결제',
            category: 'abroad'
        }
    ];
    const [paymentMethod, setPaymentMethod] = useState({
        domestic: {
            creditCard: false,
            simplePayment: false,
            cashPayment: false
        },
        aborad: {
            globalCreditCard: false,
            globalSimplePayment: false,
            chinesePayment: false,
            japanesePayment: false,
            others: false
        }
    });
    const [description, setDescription] = useState('');

    const countryList = [
        {
            id: 'korea',
            label: '대한민국'
        },
        {
            id: 'china',
            label: '중국'
        },
        {
            id: 'japan',
            label: '일본'
        },
        {
            id: 'malaysia',
            label: '말레이시아'
        }
    ];
    const [targetCountry, setTargetCountry] = useState({
        korea: false,
        japan: false,
        china: false,
        malaysia: false,
    })
    const [finalAgreement, setFinalAgreement] = useState(false);

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const hanldeCloseModal = () => setOpenModal(false);

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
                            <ul className={styles.checkboxContainer}>
                                {
                                    countryList.map(country =>
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
                            <li>www.eximbay.com > 기술지원 자료실 > 웹결제 모듈을 미리 확인해 주시기 바랍니다.</li>
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
                <MainButton label={'임시저장'} onClick={() => {
                    alert('임시저장');
                }
                }/>
                <Link to={"/payment-complete"}>
                    <MainButton label={'다음'} onClick={() => {

                        alert('다음');
                    }}/>
                </Link>
            </MainButtonContainer>
        </>
    )
}