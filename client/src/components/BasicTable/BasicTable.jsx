import Table from 'react-bootstrap/Table';

import './basicTable.css';
import Spinner from '../Spinner/Spinner';

const BasicTable = ({ dataBody, headers }) => {
    return (
        <div className="m-5 mt-3">
            <Table striped responsive hover bordered>
                <thead className="border border-bottom-0">
                    <tr>
                        {headers?.map((el, ind) => (
                            <th key={ind}>{el}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {!dataBody ? (
                        <Spinner />
                    ) : dataBody.length > 0 ? (
                        dataBody.map((item) =>
                            item.lines.map((el, ind) => (
                                <tr key={ind}>
                                    <td>{item.file}</td>
                                    <td>{el.text}</td>
                                    <td>{el.number}</td>
                                    <td>{el.hex}</td>
                                </tr>
                            ))
                        )
                    ) : (
                        <tr>
                            <td colSpan={headers?.length}>No data</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default BasicTable;
