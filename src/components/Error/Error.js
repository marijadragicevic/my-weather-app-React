import React from 'react';
import errorGif from "../../img/404-error.gif";

const Error = () => {
    return (<img src={errorGif} style={{ width: "100%" }} alt="Page not found" />);
}

export default Error;