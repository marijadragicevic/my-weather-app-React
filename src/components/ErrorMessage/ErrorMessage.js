import React from 'react';

const ErrorMessage = ({ children }) => {
    return (
        <div className="errorMessage">{children}</div>
    );
}

export default ErrorMessage;