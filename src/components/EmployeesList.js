import React from 'react';
import moment from 'moment';

import Employee from './Employee';

import './EmployeesList.css';

const EmployeesList = () => {

    const DUMMY_USER = [
        {
            name:'Adam Horvat',
            kancelarija: 'Infostud 3',
            location: 'Subotica',
            section: 'Polovni automobili',
            position: 'Frontend Developer',
            date: '22.05.2021',
            workspace: 'Rad od kuce',
            warning: ''
        },
        {
            name:'Aleksa Jankovic',
            kancelarija: 'Infostud 2',
            location: 'Beograd',
            section: '4zida',
            position: 'Frontend Developer',
            date: '12.05.2021',
            workspace: 'Kancelarija',
            warning: ''
        },
        {
            name:'Mateja Sefcic',
            kancelarija: 'Infostud 4',
            location: 'Subotica',
            section: 'Hello World',
            position: 'UI Designer',
            date: '10.08.2021',
            workspace: 'Odsutan',
            warning: 'Godisnji odmor'
        },
        {
            name:'Zvonimir Rudinski',
            kancelarija: 'Infostud 1',
            location: 'Beograd',
            section: 'poslovi.infostud',
            position: 'Backend Developer',
            date: '17.10.2021',
            workspace: 'Rad od kuce',
            warning: ''
        }
    ]

    let arrDates = [];

    const displayDatesHandler = () => {
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
                arrDates.push(finalDate);
            }
        } 
    }

    return (
        <div className="employeesList">
            <h1>Pregled radne liste</h1>
            <h4>Evidencija zaposlenih o mestu rada za {moment().format('DD.MM.YYYY')}</h4>
            <div className="employeesList__filters">
                <div className="employeesList__filter">
                    <select>
                        <option></option>
                        <option>Infostud 1</option>
                        <option>Infostud 2</option>
                        <option>Infostud 3</option>
                        <option>Infostud 4</option>
                    </select>
                    <span>Kancelarija</span>
                </div>
                <div className="employeesList__filter">
                    <select>
                        <option></option>
                        <option>Polovni automobili</option>
                        <option>Hello World</option>
                        <option>4 zida</option>
                        <option>poslovi.infostud</option>
                    </select>
                    <span>Sektor</span>
                </div>
                <div className="employeesList__filter">
                    <select>
                        <option></option>
                        {/* <option>24.05.2021.</option>
                        <option>25.05.2021.</option>
                        <option>26.05.2021.</option>
                        <option>27.05.2021.</option>
                        <option>28.05.2021.</option>
                        <option>31.05.2021.</option>
                        <option>01.06.2021.</option> */}
                        {displayDatesHandler()}
                        {arrDates.map(item => {
                            return <option>{item}</option>
                        })}
                    </select>
                    <span>Datum</span>
                </div>
                <div className="employeesList__filter">
                    <select>
                        <option></option>
                        <option>Od kuce</option>
                        <option>Iz kancelarije</option>
                        <option>Odsutnan</option>
                    </select>
                    <span>Radno mesto</span>
                </div>
            </div>

            {DUMMY_USER.map(item => {
                return (
                    <Employee 
                        name={item.name}
                        kancelarija={item.kancelarija}
                        location={item.location}
                        section={item.section}
                        position={item.position}
                        date={item.date}
                        workspace={item.workspace}
                        warning={item.warning}
                    />
                );
            })}

            {/* <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee /> */}
        </div>
    )
}

export default EmployeesList
