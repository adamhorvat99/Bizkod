import React, { useState } from 'react';

import './Employee.css';

import Logo from '../assets/users.jpg';

import { Avatar } from '@material-ui/core';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import Message from './Message';

const Employee = (props) => {
    const [comment, setComment] = useState(false);
    const commentStatus = props.workspace;

    return (
        <div className="employee">
            <span><Avatar src={Logo} /></span>
            <span>{props.name}</span>
            <span>{props.kancelarija}</span>
            <span>{props.location}</span>
            <span>{props.section}</span>
            <span>{props.position}</span>
            <span>{props.date}</span>
            <span>{props.workspace}</span>
            {commentStatus == 'Odsutan' ? 
                (<CommentOutlinedIcon onMouseEnter={() => setComment(true)} onMouseLeave={() => setComment(false)} />) : 
                (<CommentOutlinedIcon />)    
            }
            {comment && <Message comment={props.warning} />}
           
        </div>
    )
}

export default Employee
