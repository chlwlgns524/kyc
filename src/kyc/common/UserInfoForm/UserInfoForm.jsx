import UserInput from "./UserInput/UserInput.jsx";
import PropTypes from "prop-types";
import TelephoneUserInput from "./UserInput/TelephoneUserInput.jsx";
import MainForm from "../../../components/MainForm/MainForm.jsx";
import Matrix from "../../../components/Matrix/Matrix.jsx";
import UploadUserInput from "./UserInput/UploadUserInput.jsx";
import CategoryUserInput from "./UserInput/CategoryUserInput.jsx";
import AmountUserInput from "./UserInput/AmountUserInput.jsx";
import {INPUT_TYPE} from "./input-type.js";
import AddressUserInput from "./UserInput/AddressUserInput.jsx";
import EmailAuthUserInput from "./UserInput/EmailAuthUserInput.jsx";

export default function UserInfoForm({title, description, referenceValue, userInputList, pickUserInput}) {
    console.log("<UserInfoForm/> rendered!");

    return (
        <MainForm
            title={title}
            description={description}
        >
            <Matrix>
                {
                    userInputList.map((userInput, index) => {
                        switch (userInput.inputType) {
                            case INPUT_TYPE.CONTACT:
                                return <TelephoneUserInput
                                    key={userInput.id}
                                    id={userInput.id}
                                    label={userInput.label}
                                    placeholder={userInput.placeholder}
                                    validator={userInput.validator}
                                    essential={userInput.essential}
                                    pickUserInput={pickUserInput}
                                />
                            case INPUT_TYPE.UPLOAD:
                                return <UploadUserInput
                                    key={userInput.id}
                                    id={userInput.id}
                                    label={userInput.label}
                                    essential={userInput.essential}
                                    pickUserInput={pickUserInput}
                                />
                            case INPUT_TYPE.CATEGORY:
                                return <CategoryUserInput
                                    key={userInput.id}
                                    id={userInput.id}
                                    label={userInput.label}
                                    validator={userInput.validator}
                                    essential={userInput.essential}
                                    pickUserInput={pickUserInput}
                                />
                            case INPUT_TYPE.AMOUNT:
                                return <AmountUserInput
                                key={userInput.id}
                                id={userInput.id}
                                label={userInput.label}
                                validator={userInput.validator}
                                essential={userInput.essential}
                                pickUserInput={pickUserInput}
                                />
                            case INPUT_TYPE.BASIC:
                                return <UserInput
                                    key={userInput.id}
                                    id={userInput.id}
                                    label={userInput.label}
                                    placeholder={userInput.placeholder}
                                    referenceValue={referenceValue}
                                    validator={userInput.validator}
                                    essential={userInput.essential}
                                    pickUserInput={pickUserInput}
                                />
                            case INPUT_TYPE.ADDRESS:
                                return <AddressUserInput
                                    key={userInput.id}
                                    id={userInput.id}
                                    label={userInput.label}
                                    validator={userInput.validator}
                                    essential={userInput.essential}
                                    pickUserInput={pickUserInput}
                                />
                            case INPUT_TYPE.EMAIL_AUTH:
                                return <EmailAuthUserInput
                                    key={userInput.id}
                                    id={userInput.id}
                                    label={userInput.label}
                                    validator={userInput.validator}
                                    essential={userInput.essential}
                                    pickUserInput={pickUserInput}
                                    />
                            default:
                                return <div key={index}></div>
                        }
                    })
                }
            </Matrix>
        </MainForm>
    )
}

UserInfoForm.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    referenceValue: PropTypes.string,
    userInputList: PropTypes.array.isRequired,
    pickUserInput: PropTypes.func.isRequired,
}