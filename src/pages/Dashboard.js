import React, { useState } from 'react';
import moment from 'moment';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

import './Dashboard.css';
import Logo from '../assets/infostud_logo.png';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import Sidebar from '../components/Sidebar';
import EmployeesList from '../components/EmployeesList';
import UpdateWorkspace from '../components/UpdateWorkspace';

const Dashboard = () => {

    const [showNav, setShowNav] = useState(false);

    const setNavHandler = () => {
        setShowNav(!showNav);
    }

    return (
        <div className="dashboard">
            <Router>
                <header>
                    {showNav ? 
                        (<MenuIcon onClick={setNavHandler} />) : 
                        (<CloseIcon className="sidebar__closeBtn" onClick={setNavHandler} />)
                    }
                    <img src={Logo} alt="Infostud Logo" />
                    <span className="dashboard__date">{moment().format('DD.MM.YYYY')}</span>
                </header>
                <div className="dashboard__content">
                    {showNav && <Sidebar navState={showNav} />}
                    <EmployeesList />
                    <UpdateWorkspace />
                </div>
            </Router>
        </div>
    )
}

export default Dashboard
