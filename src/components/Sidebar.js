import React, { useState } from 'react';

import CloseIcon from '@material-ui/icons/Close';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

import Logo from '../assets/infostud_logo.png';
import User from '../assets/users.jpg';

import './Sidebar.css';

const Sidebar = (props) => {

    return (
        <div>
            <div className={props.navState ? "sidebar active" : "sidebar"}>
                <div className="sidebar__user">
                    <img src={User} alt="Infostud Logo" />
                    <h3>Adam Horvat</h3>
                    <h5>Frontend Developer</h5>
                </div>
                <div className="sidebar__navigation">
                    <h3>Navigacija</h3>
                    <div className="sidebar__item"><FindInPageOutlinedIcon /><span>Svi radnici</span></div>
                    <div className="sidebar__item"><DescriptionOutlinedIcon/><span>Unesite svoje radno mesto</span></div>
                    <div className="sidebar__item"><FindInPageOutlinedIcon /><span>Svi radnici</span></div>
                    <div className="sidebar__item"><ExitToAppOutlinedIcon /><span>Logout</span></div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
