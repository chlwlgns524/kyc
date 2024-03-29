import './App.css'
import EntryInquiry from "./kyc/signup/EntryInquiry/EntryInquiry.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ServiceRegistration from "./kyc/signup/ServiceRegistration/ServiceRegistration.jsx";
import BusinessInfo from "./kyc/signup/BusinessInfo/BusinessInfo.jsx";
import PaymentRegistration from "./kyc/signup/PaymentService/PaymentRegistration.jsx";
import PaymentServiceComplete from "./kyc/signup/PaymentServiceComplete/PaymentServiceComplete.jsx";
import BusinessDetail from "./kyc/signup/BusinessDetail/BusinessDetail.jsx";
import PaymentSuccess from "./kyc/signup/PaymentServiceComplete/PaymentSuccess.jsx";
import PaymentFail from "./kyc/signup/PaymentServiceComplete/PaymentFail.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<EntryInquiry/>}/>
                    <Route path={'/signup'} element={<ServiceRegistration/>}/>
                    <Route path={'/business-info'} element={<BusinessInfo/>}/>
                    <Route path={'/business-detail/:type'} element={<BusinessDetail/>}/>
                    <Route path={'/payment-service'} element={<PaymentRegistration/>}/>
                    <Route path={'/payment-complete'} element={<PaymentServiceComplete/>}/>
                    <Route path={'/payment-success'} element={<PaymentSuccess/>}/>
                    <Route path={'/payment-fail'} element={<PaymentFail/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
