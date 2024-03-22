import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  background-color: var(--primaryColor);
  cursor: pointer;
  border: none;
  color: #fff;
  width: ${props => props.width || '200px'};
  height: ${props => props.height || '50px'};
  border-radius: 50px;

  &:hover {
    background-color: var(--primaryColor-hover);
  }
`

export default function MainButton({label, ...props}) {
    return (
            <Button {...props}>{label}</Button>
    )
}

MainButton.propTypes = {
    label: PropTypes.string.isRequired,
}