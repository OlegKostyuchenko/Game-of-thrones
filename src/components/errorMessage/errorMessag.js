import React from 'react';
import './errorMessage.css'

const ErrorMessage = () => {
    return (
        <>
            <span>Something goes wrong</span>
            <img src={process.env.PUBLIC_URL + '/img/got.jpg'} alt="error"></img>
        </>
    );
};

export default ErrorMessage;