import React from 'react';

import './Message.css';

const Message = (props) => {
    return (
        <div className="message">
            <h1>{props.comment}</h1>
        </div>
    )
}

export default Message
