import Table from 'react-bootstrap/Table';
import './basicTable.css'
import AnimationPlaceholder from './AnimationPlaceholder';

const BasicTable = ({ data, clickEvent }) => {

    const handleClick = (filename) => {
        if (clickEvent) {
            clickEvent(filename)
        }
    }

    return (
        <div className='m-5 mt-3'>
            <Table striped  responsive hover bordered >
                <thead className='border border-bottom-0'>
                    <tr>
                        <th>File Name</th>
                        <th>Text</th>
                        <th>Number</th>
                        <th>Hex</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data ?
                            data.map(item => (
                                item.lines.map((el, ind) => (
                                    <tr key={ind}>
                                        <td
                                            onClick={() => handleClick(item.file)}
                                            className={clickEvent ? 'filenameTitle' : ''}
                                            style={clickEvent ? {cursor: 'pointer'} : {}}
                                        >
                                                {item.file}
                                        </td>
                                        <td>{el.text}</td>
                                        <td>{el.number}</td>
                                        <td>{el.hex}</td>
                                    </tr>
                                ))
                            ))
                        :
                            <AnimationPlaceholder quantity={5} />
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default BasicTable;