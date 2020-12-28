import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import navData from '../../assets/data/MenuBarData.json';

export default function NavBar(props) {

    const [status, setStatus] = useState({ status: '', icon: 'fal fa-list-ul' });

    return (
        <section className="menuMobile d-lg-none">
            <div className="headerMobile">
                <p className="fs-5 mb-0">XB Pham</p>
            </div>
            <nav className={`navMobile ${status.status}`} onClick={() => status.status === '' ? setStatus({ ...status, status: 'active', icon: 'fal fa-times-square' }) : setStatus({ ...status, status: '', icon: 'fal fa-list-ul' })}>
                <div className="navMobile__icon">
                    <i className={status.icon} />
                </div>
                <div className="navMobile__items">
                    <ul>
                        {navData.map((item, index) => <li key={index}><NavLink className="navMobile__item" activeClassName="text-white" to={item.path}><i className={`${item.icon} text-center`} /></NavLink></li>)}
                    </ul>
                </div>
            </nav>
        </section>
    )
}
