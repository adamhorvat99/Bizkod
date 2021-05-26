import React, { useState } from 'react';

import moment from 'moment';

import Button from '@material-ui/core/Button';

import './WorkspaceCard.css';

const WorkspaceCard = (props) => {

    const [workplace, setWorkplace] = useState('');

    const updateWorkplaceHandler = (event) => {
        event.preventDefault();
        setWorkplace(event.target.value);
    }

    return (
        <div>
             <div className="updateWorkspace__card">
                <span>{props.validDate}</span>
                <select value={workplace} onChange={updateWorkplaceHandler}>
                    <option value="Od kuce">Od kuce</option>
                    <option value="Iz kancelarije">Iz kancelarije</option>
                    <option value="Odsutan">Odsutan</option>
                </select>
                {workplace === 'Odsutan' ? <textarea placeholder="Obrazlozite razlog odsustva" /> : null}
                <Button>Sacuvaj</Button>
            </div> 

        </div>
    )
}

export default WorkspaceCard
