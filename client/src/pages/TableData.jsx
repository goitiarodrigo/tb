import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchFileData, fetchValidsFiles, setResetFileData } from '../redux/state/filesSlice';
import BasicTable from '../components/BasicTable/BasicTable';
import BasicModal from '../components/Modal/Modal';
import { setOpen } from '../redux/state/appSlice';
import AnimationPlaceholder from '../components/BasicTable/AnimationPlaceholder';

const TableData = () => {
    const dispatch = useDispatch();
    const { loadingValidsFiles, files, fileData } = useSelector((state) => state.files);
    const { open } = useSelector((state) => state.app);

    useEffect(() => {
        dispatch(fetchValidsFiles());
    }, []);

    const handleOpenModal = (filename) => {
        dispatch(setOpen(true));
        dispatch(fetchFileData(filename));
    };

    const handleCloseModal = () => {
        dispatch(setOpen(false));
        dispatch(setResetFileData());
    };

    return (
        <div className="m-5 mt-3">
            {loadingValidsFiles ? (
                <AnimationPlaceholder quantity={10} />
            ) : (
                <>
                    <BasicTable data={files} clickEvent={handleOpenModal} />
                    <BasicModal open={open} onClose={handleCloseModal}>
                        <BasicTable data={fileData} />
                    </BasicModal>
                </>
            )}
        </div>
    );
};

export default TableData;
