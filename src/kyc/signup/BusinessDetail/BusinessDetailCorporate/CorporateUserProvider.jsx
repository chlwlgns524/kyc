import {useState} from "react";
import {BUSINESS_DETAIL_CORPORATE_FORM_ID} from "./BusinessDetailCorporateForm/business-detail-corporate-form.js";
import CorporateUserContext from "./corporate-user-store.js";
import PropTypes from "prop-types";

export default function CorporateUserProvider({children}) {
    const [user, setUser] = useState([
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.businessLicense,
            validated: true,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.businessNumber,
            validated: false,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.corporateRegistrationNumber,
            validated: false,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.corporateKrName,
            validated: false,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.corporateEnName,
            validated: false,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.companyKrName,
            validated: false,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.companyEnName,
            validated: false,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.homepageUrl,
            validated: false,
            value: '',
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.businessType,
            validated: false,
            value: '',
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.industry,
            validated: false,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.productType,
            validated: false,
            value: {
                large: '',
                middle: '',
                small: ''
            }
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.customerTransaction,
            validated: false,
            value: {
                currency: 'KRW',
                value: '0',
            }
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.estimatedVolumePerMonth,
            validated: false,
            value: {
                currency: 'KRW',
                value: '0',
            }
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.address,
            validated: false,
            value: {
                country: 'kr',
                zonecode: '',
                addressKr: '',
                additionalAddress: '',
                addressEn: '',
            }
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.headStoreAddress,
            validated: false,
            value: {
                country: 'kr',
                zonecode: '',
                addressKr: '',
                additionalAddress: '',
                addressEn: '',
            }
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.representativeTelephone,
            validated: false,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.representativeEmail,
            validated: false,
            value: ''
        }
    ]);

    const pickUserInput = (id, validated, value) => {
        setUser(prevUser => {
            return prevUser.map(info =>
                    info.id === id ? {...info, validated: validated, value: value} : info
            );
        });
    };

    return (
        <CorporateUserContext.Provider
            value={
                {user, setUser, pickUserInput}
            }>
            {children}
        </CorporateUserContext.Provider>
    )
}

CorporateUserProvider.propTypes = {
    children: PropTypes.node.isRequired
};