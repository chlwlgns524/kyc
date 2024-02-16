import styles from "./EntryInquiryForm.module.css";
import MainCheckBox from "../../../../components/MainCheckBox/MainCheckBox.jsx";
import {useState} from "react";
import PropTypes from "prop-types";
import MainButton from "../../../../components/MainButton/MainButton.jsx";
import {useNavigate} from "react-router-dom";
import MainForm from "../../../../components/MainForm/MainForm.jsx";
import MainButtonContainer from "../../../../components/MainButton/MainButtonContainer.jsx";

export default function EntryInquiryForm({hostingList, buttonStyle}) {
    const [hostingSite, setHostingSite] = useState('self');
    const navigate = useNavigate();
    const handleNextButtonClick = () => {
        if (hostingSite === 'self') {
            navigate('/signup');
        } else {
            alert('이용중인 호스팅사에서 가입해 주세요.');
        }
    };

    return (
        <MainForm title={"홈페이지 구축 방법을 선택해주세요"}>
            <ul className={styles.content}>
                <li>
                    <MainCheckBox
                        id={'self'}
                        checked={hostingSite === 'self'}
                        onChange={() => setHostingSite('self')}/>
                    <label htmlFor="self">직접 구축</label> | <span className={styles.sub}>가맹점이 직접 홈페이지를 구축한 경우</span>
                </li>
                <li>
                    <MainCheckBox
                        checked={hostingSite !== 'self'}
                        onChange={() => setHostingSite(hostingList[0].name)}/>
                    호스팅사 이용 | <span className={styles.sub}>쇼핑몰 구축 서비스를 통해 가입하는 경우</span>
                    {(hostingSite !== 'self') &&
                        <ul className={styles.hostingList}>
                            {
                                hostingList.map(site =>
                                    <li key={site.name}>
                                        <input
                                            defaultChecked={site.name === hostingList[0].name}
                                            type="radio"
                                            name="hosting"
                                            value={site.name}
                                            id={site.name}
                                            onChange={() => setHostingSite(site.name)}/>
                                        <label htmlFor={site.name}>{site.label}</label>
                                    </li>
                                )
                            }
                        </ul>
                    }
                </li>
            </ul>
            <MainButtonContainer>
                <MainButton label={"다음"}
                            style={buttonStyle}
                            onClick={handleNextButtonClick}
                />
            </MainButtonContainer>
        </MainForm>
    )
}

EntryInquiryForm.propTypes = {
    hostingList: PropTypes.array.isRequired,
    buttonStyle: PropTypes.object.isRequired,
}