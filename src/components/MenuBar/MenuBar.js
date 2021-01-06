import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import navData from '../../assets/data/MenuBarData.json';
import { actHandleClickMenuItem } from '../../redux/actions/ResumeActions';
import { MENU_NAME_ABOUT, MENU_NAME_CONTACT, MENU_NAME_HOME, MENU_NAME_PROJECTS, MENU_NAME_RESUME } from '../../utils/constants/constants';

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
        <>
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
            <div className="menuBar__right">
                <div className={`menuBar__rightItem ${menuStatus[MENU_NAME_HOME]}`}>
                    <p>HOME</p>
                </div>
                <div className={`menuBar__rightItem ${menuStatus[MENU_NAME_ABOUT]}`}>
                    <p>ABOUT ME</p>
                </div>
                <div className={`menuBar__rightItem ${menuStatus[MENU_NAME_RESUME]}`}>
                    <p>RESUME</p>
                </div>
                <div className={`menuBar__rightItem ${menuStatus[MENU_NAME_PROJECTS]}`}>
                    <p>PROJECTS</p>
                </div>
                <div className={`menuBar__rightItem ${menuStatus[MENU_NAME_CONTACT]}`}>
                    <p>CONTACT</p>
                </div>
            </div>
        </>
    )
}
