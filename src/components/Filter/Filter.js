import PropTypes from 'prop-types';

import { Container } from './Filter.styled';

export const Filter = ({ value, onChange}) => {
    return (
        <Container>
            <label>
                Find contacts by name
                <input type="text" name="filter" value={value} onChange={onChange} />
            </label>
        </Container>
    );
};

// eslint-disable-next-line react/no-typos
Filter.PropTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};