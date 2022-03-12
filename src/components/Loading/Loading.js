import React from 'react';
import spinner from "../../img/spinner.svg";

const Loading = () => {
    return (
        <div>
            <img src={spinner} alt="Loading" />
        </div>
    );
}

export default Loading;