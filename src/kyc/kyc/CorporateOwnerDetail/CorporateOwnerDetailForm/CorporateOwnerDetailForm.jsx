import MainForm from "../../../../components/MainForm/MainForm.jsx";
import {NATION, ORGANIZATION} from "./organization--select.js";
import {useState} from "react";

export default function CorporateOwnerDetailForm() {
    const [organization, setOrganization] = useState(ORGANIZATION.getOption(NATION));

    return (
            <MainForm
                    title={'귀사의 실제소유자 정보를 입력해주세요 (3/4)'}
                    description={'고객확인제도 이행을 위하여 전체 항목을 필수로 입력 부탁드립니다.'}>
                <div>
                    <label>
                        해당하는 법인/단체
                        <select name={ORGANIZATION.name}>
                            {
                                ORGANIZATION.options.map(option =>
                                        <option
                                                key={option.id}
                                                value={option.value}>{option.label}</option>)
                            }
                        </select>
                    </label>
                </div>
                <div>

                </div>
            </MainForm>
    )
}