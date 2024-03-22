import MainForm from "../../../../components/MainForm/MainForm.jsx";
import {useState} from "react";
import {Gender, PRIVATE_OWNER} from "../../object-template.js";
import {OCCUPATION, PRIVATE_BUSINESS} from "./occupation--radio.js";
import {FOR_TRANSACTION_IN_BUSINESS, REGISTRATION_PURPOSE} from "./registration-purpose--radio.js";
import {BUSINESS_INCOME, OPERATION_FUND_ORIGIN} from "./operation-fund-origin--radio.js";

export default function PrivateOwnerDetailForm() {
    const [isOwnerSame, setIsOwnerSame] = useState(true);
    const [owner, setOwner] = useState(null);
    const [occupation, setOccupation] = useState(OCCUPATION.getOption(PRIVATE_BUSINESS));
    const [purpose, setPurpose] = useState(REGISTRATION_PURPOSE.getOption(FOR_TRANSACTION_IN_BUSINESS));
    const [origin, setOrigin] = useState(OPERATION_FUND_ORIGIN.getOption(BUSINESS_INCOME));

    console.log(occupation);
    return (
            <>
                <MainForm
                        title={'귀사의 실제소유자 정보를 입력해주세요 (3/4)'}
                        description={'고객확인제도 이행을 위하여 전체 항목을 필수로 입력 부탁드립니다.'}
                >
                    <div style={{border: '1px dashed red'}}>
                        대표자와 실제소유자가 동일한가요?
                        <label><input type="radio" name="onwer" checked={isOwnerSame} onChange={() => {
                            setIsOwnerSame(true);
                            setOwner(null);
                        }}/>예</label>
                        <label><input type="radio" name="onwer" checked={!isOwnerSame} onChange={() => {
                            setIsOwnerSame(false);
                            setOwner({
                                ...PRIVATE_OWNER
                            })
                        }}/>아니오</label>
                    </div>
                    {
                        owner ?
                                <div>
                                    실제 소유자 정보
                                    <div style={{border: '1px dashed black'}}>
                                        <div>
                                            <label>대표자명 <input
                                                    type="text"
                                                    value={owner.nameKr}
                                                    onChange={e => setOwner(prevState =>
                                                            (
                                                                    {
                                                                        ...prevState,
                                                                        nameKr: e.target.value
                                                                    }
                                                            )
                                                    )}
                                            /></label>
                                        </div>
                                        <div>
                                            <label>대표자명(영문)
                                                <input
                                                        type="text"
                                                        placeholder={'성'}
                                                        value={owner.lastName}
                                                        onChange={e => setOwner(prevState =>
                                                                (
                                                                        {
                                                                            ...prevState,
                                                                            lastName: e.target.value
                                                                        }
                                                                )
                                                        )}
                                                />
                                                <input
                                                        type="text"
                                                        placeholder={'이름'}
                                                        value={owner.firstName}
                                                        onChange={e => setOwner(prevState =>
                                                                (
                                                                        {
                                                                            ...prevState,
                                                                            firstName: e.target.value
                                                                        }
                                                                )
                                                        )}
                                                />
                                            </label>
                                        </div>
                                        <div>
                                            <label>국적 <input
                                                    type="text"
                                                    value={owner.country}
                                                    onChange={e => setOwner(prevState =>
                                                            (
                                                                    {
                                                                        ...prevState,
                                                                        country: e.target.value
                                                                    }
                                                            )
                                                    )}
                                            /></label>
                                        </div>
                                        <div>
                                            성별
                                            <label><input
                                                    type="radio"
                                                    name={`${owner.id}-gender`}
                                                    value={Gender.MALE}
                                                    checked={owner.gender === Gender.MALE}
                                                    onChange={() => setOwner(prevState =>
                                                            (
                                                                    {
                                                                        ...prevState,
                                                                        gender: Gender.MALE
                                                                    }
                                                            )
                                                    )}
                                            />남자</label>
                                            <label><input
                                                    type="radio"
                                                    name={`${owner.id}-gender`}
                                                    value={Gender.FEMALE}
                                                    checked={owner.gender === Gender.FEMALE}
                                                    onChange={() => setOwner(prevState =>
                                                            (
                                                                    {
                                                                        ...prevState,
                                                                        gender: Gender.FEMALE
                                                                    }
                                                            )
                                                    )}
                                            />여자</label>
                                        </div>
                                        <div>
                                            <label>생년월일 <input
                                                    type="date"
                                                    value={owner.birthdate}
                                                    onChange={e => setOwner(prevState =>
                                                            (
                                                                    {
                                                                        ...prevState,
                                                                        birthDate: e.target.value
                                                                    }
                                                            )
                                                    )}
                                            />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                : undefined
                    }
                    <div style={{border: '1px dashed red'}}>
                        다음 중 해당 하는 항목을 선택해 주세요.
                        {
                            OCCUPATION.options.map(option =>
                                    <label key={option.id}>
                                        <input
                                                type="radio"
                                                name={OCCUPATION.name}
                                                checked={option.id === occupation.id}
                                                onChange={() => setOccupation(option)}
                                        />{option.label}
                                    </label>
                            )
                        }
                    </div>
                    <div style={{border: '1px dashed red'}}>
                        엑심베이 결제서비스(PG)에 가입하는 목적이 무엇인가요?
                        {
                            REGISTRATION_PURPOSE.options.map(option =>
                                    <label key={option.id}>
                                        <input
                                                type="radio"
                                                name={REGISTRATION_PURPOSE.name}
                                                checked={option.id === purpose.id}
                                                onChange={() => setPurpose(option)}
                                        />{option.label}
                                    </label>
                            )
                        }
                    </div>
                    <div style={{border: '1px dashed red'}}>
                        운영자금의 출처를 선택해 주세요.
                        {
                            OPERATION_FUND_ORIGIN.options.map(option =>
                                    <label key={option.id}>
                                        <input
                                                type="radio"
                                                name={OPERATION_FUND_ORIGIN.name}
                                                checked={option.id === origin.id}
                                                onChange={() => setOrigin(option)}
                                        />{option.label}
                                    </label>
                            )
                        }
                    </div>
                </MainForm>
                <button onClick={() => console.log(isOwnerSame,
                    owner,
                    occupation,
                    purpose,
                    origin)}>
                    출력
                </button>
            </>
    )
}