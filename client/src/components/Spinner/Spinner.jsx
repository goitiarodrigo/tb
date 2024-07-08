import { Spinner as SpinnerRB } from 'react-bootstrap';

const Spinner = () => {
    return (
        <div
            className="d-flex justify-content-center align-items-center position-absolute w-100 h-100"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
        >
            <SpinnerRB animation="grow" />
        </div>
    );
};

export default Spinner;
