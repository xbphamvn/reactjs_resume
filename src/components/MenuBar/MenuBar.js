import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import navData from '../../assets/data/MenuBarData.json';

export default function MenuBar(props) {

    let [linkStatus, setLinkStatus] = useState({
        home: 'active',
        about: '',
        resume: '',
        projects: '',
        contact: ''
    });

    const handleClick = (e) => {
        const name = e.currentTarget.getAttribute('name');
        for (let key in linkStatus) {
            key === name ? linkStatus[key] = 'active' : linkStatus[key] = '';
        }
        setLinkStatus({ ...linkStatus });
    }

    const renderNavBar = () => (
        navData.map((item, index) => ((
            <li className={`menuBar__item ${linkStatus[item.name]}`} name={item.name} onClick={handleClick} key={index}>
                <NavLink className="menuBar__item--link" to={item.path}>
                    <div className="menuBar__item--content">
                        <i className={item.icon} />
                        <p className="m-0">{item.desc}</p>
                    </div>
                </NavLink>
            </li>
        )))
    )

    return (
        <div className="menuBar">
            <figure className="menuBar__profile">
                <img className="menuBar__profile--avatar" src="./img/profile/avatar.png" alt="avatar" />
                <h5 className="menuBar__profile--title">XB Pham</h5>
            </figure>
            <nav className="menuBar__nav">
                <ul>
                    {renderNavBar()}
                </ul>
            </nav>
        </div>
    )
}
