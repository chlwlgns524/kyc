import MainForm from "../../../../components/MainForm/MainForm.jsx";
import {useState} from "react";

export default function UploadKYCDocumentationForm() {
    const [copyOfBankAccount, setCopyOfBankAccount] = useState(null);
    const [attorney, setAttorney] = useState(null);
    const [otherDocumentation, setOtherDocumentation] = useState(null);

    return (
            <>
                <MainForm title={'제출할 서류를 업로드해 주세요(4/4)'}
                          description={'고객확인제도 이행을 위하여 전체 항목 필수 업로드 사항입니다. 최근 3개월 이내 발급된 서류로 업로드 해주세요.'}>
                    <div>
                        <label>계좌 사본
                            <input
                                    type="file"
                                    onChange={e => setCopyOfBankAccount(e.target.files[0])}
                            />
                        </label>
                        <button onClick={() => console.log(copyOfBankAccount)}>업로드</button>
                    </div>
                    <div>
                        <label>위임장
                            <input
                                    type="file"
                                    onChange={e => setAttorney(e.target.files[0])}
                            /></label>
                        <button onClick={() => console.log(attorney)}>업로드</button>
                    </div>
                    <div>
                        <label>기타 서류
                            <input
                                    type="file"
                                    onChange={e => setOtherDocumentation(e.target.files[0])}
                            /></label>
                        <button onClick={() => console.log(otherDocumentation)}>업로드</button>
                    </div>
                </MainForm>
            </>
    )
}