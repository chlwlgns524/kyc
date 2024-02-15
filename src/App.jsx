import './App.css'
import EntryInquiry from "./kyc/signup/EntryInquiry/EntryInquiry.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ServiceRegistration from "./kyc/signup/ServiceRegistration/ServiceRegistration.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<EntryInquiry/>}/>
                    <Route path={"/signup"} element={<ServiceRegistration/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
