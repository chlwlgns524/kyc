import styled from "styled-components";
import PropTypes from "prop-types";

const StyledMainButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 3rem;
`;

export default function MainButtonContainer({children}) {
    return <StyledMainButtonContainer>{children}</StyledMainButtonContainer>
}

MainButtonContainer.propTypes = {
    children: PropTypes.node.isRequired
}