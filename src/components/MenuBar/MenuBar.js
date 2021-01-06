import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import navData from '../../assets/data/MenuBarData.json';
import { actHandleClickMenuItem } from '../../redux/actions/ResumeActions';

export default function MenuBar(props) {

    const { menuStatus } = useSelector(state => state.ResumeReducer);

    const dispatch = useDispatch();

    const handleClick = (e) => {
        const name = e.currentTarget.getAttribute('name');
        dispatch(actHandleClickMenuItem(name));
    }

    const renderNavBar = () => (
        navData.map((item, index) => ((
            <li className={`menuBar__item ${menuStatus[item.name]}`} name={item.name} onClick={handleClick} key={index}>
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
