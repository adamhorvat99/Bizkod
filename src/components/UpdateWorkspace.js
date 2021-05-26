import React, { useState } from 'react';
import moment from 'moment';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import './UpdateWorkspace.css';

import WorkspaceCard from './WorkspaceCard';
import Button from '@material-ui/core/Button';

const UpdateWorkspace = () => {

    const [dates, setDates] = useState([]);

    const createNotification = (type) => {
        return () => {
          switch (type) {
            case 'success':
              NotificationManager.success('Success message', 'Title here');
              break;
            case 'error':
              NotificationManager.error('Error message', 'Click me!', 5000, () => {
                alert('callback');
                });
              break;
            }
        }
    };

    let arr = [];

    const displayCardHandler = () => {
        const today = moment().format("DD.MM.YYYY");

        for(let i = 0; i < 7; i++) {
            const tempDate = moment(today, "DD-MM-YYYY").add(i, 'days');
            const day = tempDate.format('DD');
            const month = tempDate.format('MM');
            const year = tempDate.format('YYYY');
            const dayName = tempDate.format('dddd');
            const finalDate = day + '.' + month + '.' + year;

            if(dayName === "Saturday" || dayName === "Sunday") {
                continue;
            } else {
                arr.push(finalDate);
            }
        } 
    }

    // const [workplace, setWorkplace] = useState('');

    // const updateWorkplaceHandler = (event) => {
    //     event.preventDefault();
    //     setWorkplace(event.target.value);
    // }

    return (
        <div className="updateWorkspace">
            <h1 onClick={createNotification('success')}>Test notification</h1>
            <div className="updateWorkspace__wrapper">
                {displayCardHandler()}
                {arr.map(item => {
                    console.log(item);
                    return <WorkspaceCard validDate={item} />
                })}
            </div>
            <NotificationContainer/>
        </div>
    )
}

export default UpdateWorkspace
