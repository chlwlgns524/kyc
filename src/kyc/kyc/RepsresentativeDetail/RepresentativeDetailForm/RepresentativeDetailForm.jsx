import MainForm from "../../../../components/MainForm/MainForm.jsx";
import {useState} from "react";
import {useSearchParams} from "react-router-dom";
import {AGENT, Gender, generateId, REPRESENTATIVE} from "../../object-template.js";

export default function RepresentativeDetailForm() {
    const [searchParams] = useSearchParams();
    const delegating = searchParams.get('delegating');

    const [representatives, setRepresentatives] = useState([
                {
                    ...REPRESENTATIVE,
                    id: generateId('representative')
                },
            ]
    );
    const [agent, setAgent] = useState(JSON.parse(delegating) ?
            {
                ...AGENT,
                id: generateId('agent')
            }
            : null
    );

    return (
            <>
                <MainForm
                        title={'귀사의 대표자 정보를 입력해주세요(2/4)'}
                        description={'자금세탁방지법 및 고객확인제도 이행을 위하여 아래 사항을 꼼곰히 확인 부탁드립니다.'}
                >
                    {
                        representatives.map((representative, index) =>
                                <div key={representative.id} style={{border: '1px dashed black'}}>
                                    {
                                        index > 0 ?
                                            <h1>
                                                대표자{index}
                                                <button onClick={() => setRepresentatives(prevState => prevState.filter(element => element.id !== representative.id))}
                                                >삭제</button>
                                            </h1> : undefined
                                    }
                                    <div>
                                        <label>대표자 신분증(앞면)
                                            <input
                                                    type="file"
                                                    onChange={e => setRepresentatives(prevState => {
                                                        const updatedRepresentatives = [...prevState];
                                                        updatedRepresentatives.find(updated => updated.id === representative.id).idCardFront = e.target.files[0];
                                                        return updatedRepresentatives;
                                                    })}
                                            /></label>
                                        <button onClick={() => console.log(representative.idCardFront)}>업로드</button>
                                    </div>
                                    <div>
                                        <label>대표자 신분증(뒷면)
                                            <input
                                                    type="file"
                                                    onChange={e => setRepresentatives(prevState => {
                                                        const updatedRepresentatives = [...prevState];
                                                        updatedRepresentatives.find(updated => updated.id === representative.id).idCardBack = e.target.files[0];
                                                        return updatedRepresentatives;
                                                    })}
                                            /></label>
                                        <button onClick={() => console.log(representative.idCardBack)}>업로드</button>
                                    </div>
                                    <div>
                                        <label>대표자명 <input
                                                type="text"
                                                value={representative.nameKr}
                                                onChange={e => setRepresentatives(prevState => {
                                                    const updatedRepresentatives = [...prevState];
                                                    updatedRepresentatives.find(updated => updated.id === representative.id).nameKr = e.target.value;
                                                    return updatedRepresentatives;
                                                })}
                                        /></label>
                                    </div>
                                    <div>
                                        <label>대표자명(영문)
                                            <input
                                                    type="text"
                                                    placeholder={'성'}
                                                    value={representative.lastName}
                                                    onChange={e => setRepresentatives(prevState => {
                                                        const updatedRepresentatives = [...prevState];
                                                        updatedRepresentatives.find(updated => updated.id === representative.id).lastName = e.target.value;
                                                        return updatedRepresentatives;
                                                    })}
                                            />
                                            <input
                                                    type="text"
                                                    placeholder={'이름'}
                                                    value={representative.firstName}
                                                    onChange={e => setRepresentatives(prevState => {
                                                        const updatedRepresentatives = [...prevState];
                                                        updatedRepresentatives.find(updated => updated.id === representative.id).firstName = e.target.value;
                                                        return updatedRepresentatives;
                                                    })}
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <label>국적 <input
                                                type="text"
                                                value={representative.country}
                                                onChange={e => setRepresentatives(prevState => {
                                                    const updatedRepresentatives = [...prevState];
                                                    updatedRepresentatives.find(updated => updated.id === representative.id).country = e.target.value;
                                                    return updatedRepresentatives;
                                                })}
                                        /></label>
                                    </div>
                                    <div>
                                        성별
                                        <label><input
                                                type="radio"
                                                name={`${representative.id}-gender`}
                                                value={Gender.MALE}
                                                checked={representative.gender === Gender.MALE}
                                                onChange={() => setRepresentatives(
                                                        prevState => {
                                                            const updatedRepresentatives = [...prevState];
                                                            updatedRepresentatives
                                                                    .find(updated => updated.id === representative.id)
                                                                    .gender = Gender.MALE;
                                                            return updatedRepresentatives;
                                                        })}
                                        />남자</label>
                                        <label><input
                                                type="radio"
                                                name={`${representative.id}-gender`}
                                                value={Gender.FEMALE}
                                                checked={representative.gender === Gender.FEMALE}
                                                onChange={() => setRepresentatives(
                                                        prevState => {
                                                            const updatedRepresentatives = [...prevState];
                                                            updatedRepresentatives
                                                                    .find(updated => updated.id === representative.id)
                                                                    .gender = Gender.FEMALE;
                                                            return updatedRepresentatives;
                                                        })}
                                        />여자</label>
                                    </div>
                                    <div>
                                        <label>생년월일 <input
                                                type="date"
                                                value={representative.birthdate}
                                                onChange={e => setRepresentatives(prevState => {
                                                    const updatedRepresentatives = [...prevState];
                                                    updatedRepresentatives.find(updated => updated.id === representative.id).birthdate = e.target.value;
                                                    return updatedRepresentatives;
                                                })}
                                        />
                                        </label>
                                    </div>
                                </div>
                        )
                    }
                    <button
                            onClick={() => {
                                setRepresentatives(prevState => {
                                    const updatedRepresentatives = [...prevState];
                                    updatedRepresentatives.push({
                                        ...REPRESENTATIVE,
                                        id: generateId('representative')
                                    });
                                    return updatedRepresentatives;
                                })
                            }}>대표자 추가
                    </button>
                    {
                            agent &&
                            <div style={{border: '1px dashed red'}}>
                                <div>
                                    <label>대표자명 <input
                                            type="text"
                                            value={agent.nameKr}
                                            onChange={e => setAgent(prevState =>
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
                                                value={agent.lastName}
                                                onChange={e => setAgent(prevState =>
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
                                                value={agent.firstName}
                                                onChange={e => setAgent(agent =>
                                                        (
                                                                {
                                                                    ...agent,
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
                                            value={agent.country}
                                            onChange={e => setAgent(prevState =>
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
                                            name={`${agent.id}-gender`}
                                            value={Gender.MALE}
                                            checked={agent.gender === Gender.MALE}
                                            onChange={() => setAgent(prevState =>
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
                                            name={`${agent.id}-gender`}
                                            value={Gender.FEMALE}
                                            checked={agent.gender === Gender.FEMALE}
                                            onChange={() => setAgent(prevState =>
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
                                            value={agent.birthdate}
                                            onChange={e => setAgent(prevState =>
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
                    }
                    <button onClick={() => {
                        console.log('------------------------------------------------------------------------------------');
                        representatives.forEach(representative => console.log(representative));
                        console.log(agent);
                    }}>전송
                    </button>
                </MainForm>
            </>
    )
}