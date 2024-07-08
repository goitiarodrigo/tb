import Form from 'react-bootstrap/Form';

const BasicSelect = ({ optionTitle, options, onChange }) => {
    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <Form.Select aria-label="Default select" onChange={handleChange}>
            <option>{optionTitle}</option>
            {options?.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </Form.Select>
    );
};

export default BasicSelect;
