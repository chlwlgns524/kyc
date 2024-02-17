import './App.css'
import EntryInquiry from "./kyc/signup/EntryInquiry/EntryInquiry.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ServiceRegistration from "./kyc/signup/ServiceRegistration/ServiceRegistration.jsx";
import BusinessInfo from "./kyc/signup/BusinessInfo/BusinessInfo.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<EntryInquiry/>}/>
                    <Route path={"/signup"} element={<ServiceRegistration/>}/>
                    <Route path={"/business-info"} element={<BusinessInfo/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
