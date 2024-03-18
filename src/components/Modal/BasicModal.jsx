import styled from "styled-components";
import {createPortal} from "react-dom";

const ModalOverlay = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    z-index: 10000;
`;

const Modal = styled.div`
    width: 60%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function BasicModal({onClose, children}) {
    return (
        createPortal(
            <ModalOverlay onClick={onClose}>
                <Modal onClick={e => e.stopPropagation()}>
                    {children}
                </Modal>
            </ModalOverlay>
            , document.getElementById('portal-root')
        )
    )
}