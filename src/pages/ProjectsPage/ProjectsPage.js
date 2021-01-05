import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import projData from '../../assets/data/ProjectData/ProjectData.json';
import { sgaDisplayProjDetail } from '../../redux/actions/ResumeActions';
import { ACTIVE_STATUS, ATTRIBUTE_NAME, PROJECT_ALL_BTN } from '../../utils/constants/constants';
import { PORTFOLIO_PATH } from '../../utils/global/sysConfig';
import ProjectsOverlay from '../ProjectsOverlay/ProjectsOverlay';
import { useSpring, animated as a } from 'react-spring';

export default function ProjectsPage(props) {

    const { projItem, displayProjDetail } = useSelector(state => state.ResumeReducer);

    const dispatch = useDispatch();

    const [state, setState] = useState({
        projStatus: {
            projAll: ACTIVE_STATUS,
            projReactJs: '',
            projJavascript: '',
            projJquery: '',
            projHtmlCss: ''
        },
    });

    const handleClick = (e) => {
        const name = e.currentTarget.getAttribute(ATTRIBUTE_NAME);
        for (let key in state.projStatus) {
            key === name ? state.projStatus[key] = ACTIVE_STATUS : state.projStatus[key] = '';
        }
        setState({ ...state });
    };

    const renderProjectsAll = () => {
        let activeBtn = '';
        for (let key in state.projStatus) {
            if (state.projStatus[key] === ACTIVE_STATUS) {
                activeBtn = key;
            }
        }

        if (activeBtn === PROJECT_ALL_BTN) {
            return (
                projData.map((item, index) => ((
                    <div className="col-sm-6 col-md-4 p-2" key={index} onClick={() => { dispatch(sgaDisplayProjDetail(item)) }}>
                        <div className="projectItem">
                            <img className="img-fluid" src={`${PORTFOLIO_PATH}${item.gallery[0].imgSrc}`} alt={item.id} />
                            <div className="projectItem__overlay">
                                <div className="projectItem__content">
                                    <h5 className="mb-0">{item.name}</h5>
                                    <p className="resume__content--small">{item.shortDesc}</p>
                                    <div className="projectItem__type">
                                        <p className="mb-0">{item.type}</p>
                                    </div>
                                    <div className="projectItem__icon">
                                        <i className={item.classIcon} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )))
            )
        } else {
            return (
                projData.filter(item => item.category === activeBtn).map((item, index) => ((
                    <div className="col-sm-6 col-md-4 p-2" key={index} onClick={() => { dispatch(sgaDisplayProjDetail(item)) }}>
                        <div className="projectItem">
                            <img className="img-fluid" src={`${PORTFOLIO_PATH}${item.gallery[0].imgSrc}`} alt={item.id} />
                            <div className="projectItem__overlay">
                                <div className="projectItem__content">
                                    <h5 className="mb-0">{item.name}</h5>
                                    <p className="resume__content--small">{item.shortDesc}</p>
                                    <div className="projectItem__type">
                                        <p className="mb-0">{item.type}</p>
                                    </div>
                                    <div className="projectItem__icon">
                                        <i className={item.classIcon} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )))
            )
        }
    };

    const renderProjectDetail = () => {
        if (displayProjDetail) {
            return <ProjectsOverlay projItem={projItem} />;
        } else {
            return '';
        }
    };

    const displayAnim = useSpring({
        from: { transform: 'scale(0) rotate(-90deg) translateX(200%)', opacity: 0 },
        to: { transform: 'scale(1) rotate(0deg) translateX(%0', opacity: 1 },
        config: { duration: 500 }
    });

    return (
        <>
            <a.section style={displayAnim} className="mainShow__content" id="projects">
                <div className="mainShow__content--title">
                    <h2>Portfolio</h2>
                    <span>Representative projects</span>
                </div>
                <div className="text-center">
                    <div className="d-inline-block">
                        <div className="projectsBtn">
                            <button className={`projectsBtn__item ${state.projStatus.projAll}`} name="projAll" onClick={handleClick}>All</button>
                            <button className={`projectsBtn__item ${state.projStatus.projReactJs}`} name="projReactJs" onClick={handleClick}>ReactJS</button>
                            <button className={`projectsBtn__item ${state.projStatus.projHtmlCss}`} name="projHtmlCss" onClick={handleClick}>HTML/CSS</button>
                            <button className={`projectsBtn__item ${state.projStatus.projJavascript}`} name="projJavascript" onClick={handleClick}>ES5/ES6</button>
                            <button className={`projectsBtn__item ${state.projStatus.projJquery}`} name="projJquery" onClick={handleClick}>Jquery</button>
                        </div>
                    </div>
                </div>
                <div className="row container-fluid mx-auto mt-4">
                    {renderProjectsAll()}
                </div>
            </a.section>
            { renderProjectDetail()}
        </>

    )
}
