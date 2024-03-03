import {createContext} from "react";

const CorporateUserContext = createContext({
    user: {},
    setUser: () => {},
    pickUserInput: () => {}
});

export default CorporateUserContext;