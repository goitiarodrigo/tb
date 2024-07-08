import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BasicSelect from './components/BasicSelect/BasicSelect.jsx';
import TableData from './pages/TableData.jsx';
import { fetchFilesNames, fetchValidsFiles, fetchFileData } from './redux/state/filesSlice.js';
import Spinner from './components/Spinner/Spinner.jsx';

const App = () => {
    const dispatch = useDispatch();
    const { filesNames, filesSelected, loading } = useSelector((state) => state.files);

    useEffect(() => {
        if (!filesNames) dispatch(fetchFilesNames());
        if (!filesSelected) dispatch(fetchValidsFiles());
    }, [filesSelected]);

    const handleOnChange = (value) => {
        if (value === 'All Files') dispatch(fetchValidsFiles());
        else dispatch(fetchFileData(value));
    };

    return loading ? (
        <Spinner />
    ) : (
        <div className="f-flex flex-column mb-3">
            <div className="w-100 p-2 mt-3 bg-danger">
                <span className="fs-5 fw-bold text-light">React Test App</span>
            </div>
            <div className="f-flex p-3 w-25">
                <BasicSelect
                    optionTitle="Select file"
                    options={filesNames ? [...filesNames, 'All Files'] : []}
                    onChange={handleOnChange}
                />
            </div>
            <TableData />
        </div>
    );
};

export default App;
