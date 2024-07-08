import { useSelector } from 'react-redux';

import BasicTable from '../components/BasicTable/BasicTable';

const headers = ['File Name', 'Text', 'Number', 'Hex'];

const TableData = () => {
    const { filesSelected } = useSelector((state) => state.files);

    return (
        <div className="m-5 mt-3">
            <BasicTable dataBody={filesSelected} headers={headers} />
        </div>
    );
};

export default TableData;
