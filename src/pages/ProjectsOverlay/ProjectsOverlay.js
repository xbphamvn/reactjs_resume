import React from 'react';
import { useDispatch } from 'react-redux';
import SocialIcon from '../../components/SocialIcon/SocialIcon';
import { sgaDisplayProjDetail, sgaHideProjDetail } from '../../redux/actions/ResumeActions';
import projData from '../../assets/data/ProjectData/ProjectData.json';
import { OVERLAY_MILESTONE_ONE, OVERLAY_MILESTONE_ZERO, OVERLAY_STEPBACK_TWO } from '../../utils/constants';

export default function ProjectsOverlay(props) {

    const { projItem } = props;

    const dispatch = useDispatch();

    return (
        <div className="overlayProj">
            <div className="overlayContent">
                <div className="text-center">
                    <div className="overlayContent__btn">
                        <button className="overlayBtn" onClick={() => {
                            if (projItem.id > OVERLAY_MILESTONE_ONE) {
                                dispatch(sgaDisplayProjDetail(projData[projItem.id - OVERLAY_STEPBACK_TWO]))
                            } if (projItem.id === OVERLAY_MILESTONE_ONE) {
                                dispatch(sgaDisplayProjDetail(projData[projData.length - OVERLAY_MILESTONE_ONE]))
                            }
                        }}>
                            <i className="fal fa-chevron-left" /> Prev
                        </button>
                        <button className="overlayBtn" onClick={() => {
                            if (projItem.id < projData.length) {
                                dispatch(sgaDisplayProjDetail(projData[projItem.id]))
                            } if (projItem.id === projData.length) {
                                dispatch(sgaDisplayProjDetail(projData[OVERLAY_MILESTONE_ZERO]))
                            }
                        }}>
                            Next <i className="fal fa-chevron-right" />
                        </button>
                        <button className="overlayBtn mb-3" onClick={() => { dispatch(sgaHideProjDetail()) }}>
                            Close <i className="fal fa-times-square" />
                        </button>
                    </div>
                    <h3>{projItem.name}</h3>
                </div>
                {/* Project detail */}
                <div className="row container-fluid mt-4 mx-auto">
                    <div className="col-sm-12 col-lg-7 px-sm-0 px-md-4">
                        <div id="overlaySlide" className="carousel slide" data-bs-ride="carousel" data-bs-touch="true">
                            <ol className="carousel-indicators overlaySlide__indicators">
                                {projItem.gallery.map((item, index) => ((
                                    <li data-bs-target="#overlaySlide" data-bs-slide-to={index} className={item.status} key={index} />
                                )))}
                            </ol>
                            <div className="carousel-inner">
                                {projItem.gallery.map((item, index) => ((
                                    <div className={`carousel-item ${item.status}`} key={index}>
                                        <img src={item.imgSrc} className="d-block w-100" alt="..." />
                                    </div>
                                )))}
                            </div>
                            <a className="carousel-control-prev overlaySlide__prev" href="#overlaySlide" role="button" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" />
                            </a>
                            <a className="carousel-control-next overlaySlide__next" href="#overlaySlide" role="button" data-bs-slide="next">
                                <span className="carousel-control-next-icon" />
                            </a>
                        </div>
                        <div className="mt-4">
                            <iframe className="overlay__iframe" title={'Intro video'} width={'100%'} src="https://www.youtube.com/embed/F2bk_9T482g" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        </div>
                    </div>
                    {/* Projects detail */}
                    <div className="col-sm-12 col-lg-5 mt-4 mt-md-0">
                        <div className="row container-md-fluid">
                            <h5 className="mainShow__content--h5 mt-0 mb-3">Live Demo - Detail</h5>
                            <p className="mb-2">
                                <a href="#linkproject" className="text-decoration-none text-primary">
                                    <i className="fal fa-globe" /> {`www.${projItem.detail.linkDemo}`}
                                </a>
                            </p>
                            <p className="mb-2">
                                <a href="#linkproject" className="text-decoration-none text-danger">
                                    <i className="fab fa-github" /> {`www.${projItem.detail.linkGithub}`}
                                </a>
                            </p>
                            <p className="mb-2"><i className="fal fa-calendar-alt" /> {projItem.detail.date}</p>
                            <p className="mb-2"><i className="fal fa-user-circle" /> XB Pham</p>
                            {projItem.detail.desc.map((item, index) => <li key={index}>{item}</li>)}
                        </div>
                        <div className="row container-md-fluid">
                            <h5 className="mainShow__content--h5 my-2">Technology</h5>
                            <div className="mt-2 px-2">
                                {projItem.detail.technology.map((item, index) => ((
                                    <div className={`overlayDetail__tech ${item.class}`} key={index}>
                                        <span><i className={item.icon} /> {item.desc}</span>
                                    </div>
                                )))}
                            </div>
                        </div>
                        <div className="row container-md-fluid mt-3">
                            <h5 className="mainShow__content--h5 my-2">Share</h5>
                            <SocialIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
