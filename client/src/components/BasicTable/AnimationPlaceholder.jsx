import { Placeholder } from 'react-bootstrap';

const AnimationPlaceholder = ({ quantity }) => {
    return (
        <>
            {
                Array(quantity).fill().map((_, i) => (
                    <Placeholder key={i} animation="glow">
                        <Placeholder xs={12} />
                    </Placeholder>
                ))
            }

        </>
    );
}

export default AnimationPlaceholder;