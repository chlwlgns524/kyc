import styled from "styled-components";
import {createPortal} from "react-dom";

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    z-index: 10000;
`;

const Modal = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    width: 50%;
    transform: translate(-50%, -50%);
`;

export default function InputModal({onClose, children}) {

    return (
        createPortal(
            <ModalOverlay onClick={onClose}>
                <Modal onClick={e => e.stopPropagation()}>
                    {children}
                </Modal>
            </ModalOverlay>
        , document.getElementById('portal-root'))
    )
}