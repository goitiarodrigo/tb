import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const BasicModal = ({ open, onClose, children }) => {

    return (
        <Modal
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={open}
            onHide={onClose}
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                { children }
            </Modal.Body>
        </Modal>
    )
} 

export default BasicModal