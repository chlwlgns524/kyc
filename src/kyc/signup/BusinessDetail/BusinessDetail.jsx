import BusinessDetailPrivate from "./BusinessDetailPrivate/BusinessDetailPrivate.jsx";
import BusinessDetailCorporate from "./BusinessDetailCorporate/BusinessDetailCorporate.jsx";
import {useParams} from "react-router-dom";

export default function BusinessDetail() {
    const {type} = useParams();
    switch (type) {
        case 'private':
            return <BusinessDetailPrivate/>
        default:
            return <BusinessDetailCorporate/>
    }
}