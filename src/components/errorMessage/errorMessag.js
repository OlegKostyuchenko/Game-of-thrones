import React from 'react';
import './errorMessage.css'

const ErrorMessage = () => {
    return (
        <div className='error-text'>
            <img src='https://www.freeiconspng.com/uploads/alarm-error-icon-30.png' width={500} alt="error" />
            <span >Something goes wrong</span>

        </div>
    );
};

export default ErrorMessage;