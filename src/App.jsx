import './App.css'
import EntryInquiry from "./kyc/signup/EntryInquiry/EntryInquiry.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ServiceRegistration from "./kyc/signup/ServiceRegistration/ServiceRegistration.jsx";
import BusinessInfo from "./kyc/signup/BusinessInfo/BusinessInfo.jsx";
import PaymentRegistration from "./kyc/signup/PaymentService/PaymentRegistration.jsx";
import PaymentServiceComplete from "./kyc/signup/PaymentServiceComplete/PaymentServiceComplete.jsx";
import BusinessDetail from "./kyc/signup/BusinessDetail/BusinessDetail.jsx";
import Login from "./kyc/auth/Login/Login.jsx";
import NoticeBeforeRegister from "./kyc/kyc/KycNotice/NoticeBeforeRegister.jsx";
import BusinessConfirm from "./kyc/kyc/BusinessConfirm/BusinessConfirm.jsx";
import RepresentativeDetail from "./kyc/kyc/RepsresentativeDetail/RepresentativeDetail.jsx";
import PrivateOwnerDetail from "./kyc/kyc/PrivateOwnerDetail/PrivateOwnerDetail.jsx";
import UploadKYCDocumentation from "./kyc/kyc/UploadKYCDocumentation/UploadKYCDocumentation.jsx";
import CorporateOwnerDetail from "./kyc/kyc/CorporateOwnerDetail/CorporateOwnerDetail.jsx";

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
                    <Route path={'/before-kyc'} element={<NoticeBeforeRegister/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/business-confirm'} element={<BusinessConfirm/>}/>
                    <Route path={'/representative-info'} element={<RepresentativeDetail/>}/>
                    <Route path={'/private-owner-info'} element={<PrivateOwnerDetail/>}/>
                    <Route path={'/coporate-owner-info'} element={<CorporateOwnerDetail/>}/>
                    <Route path={'/upload-documentation'} element={<UploadKYCDocumentation/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
