import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GoogleLoginBtn = ({onLogin}) => (
    <Button color="link" onClick={onLogin}>
        Login with <FontAwesomeIcon icon="google"/>
    </Button>
);

GoogleLoginBtn.propTypes = {
    onLogin: PropTypes.func.isRequired(),
}

export default GoogleLoginBtn;
