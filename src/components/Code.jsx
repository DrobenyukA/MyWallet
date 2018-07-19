import React from 'react';
import PropTypes from 'prop-types';

export function Code({code}) {
    return (
        <code>{code}</code>
    )
};

Code.propTypes = {
    code: PropTypes.string.isRequired,
};
