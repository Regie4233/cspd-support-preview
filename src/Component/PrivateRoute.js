import React from 'react';
import AuthenticationPage from './AuthenticationPage';

const PrivateRoute = (props) => {

    
    return props.status !== '' ? props.children : <AuthenticationPage auth={props.auth}/>;

};

export default PrivateRoute;