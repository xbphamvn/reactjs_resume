import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import MenuBar from '../../components/MenuBar/MenuBar';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../../pages/HomePage/HomePage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import ResumePage from '../../pages/ResumePage/ResumePage';
import ProjectsPage from '../../pages/ProjectsPage/ProjectsPage';
import ContactPage from '../../pages/ContactPage/ContactPage';

export const GlobalTemplate = (props) => {

    const { Component, ...restParam } = props;

    let [{ width }, setWidth] = useState({ width: window.innerWidth });

    useEffect(() => {
        window.onresize = () => {
            setWidth({ width: window.innerWidth })
        }
    }, []);

    return (
        <Route path={restParam.path} render={(propsRoute) => {
            if (width > 991) {
                return (
                    <>
                        <MenuBar />
                        <div className="main">
                            <div className="mainShow">
                                <Component {...propsRoute} />
                            </div>
                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <NavBar />
                        <div className="main">
                            <div className="mainShow">
                                <HomePage />
                                <AboutPage />
                                <ResumePage />
                                <ProjectsPage />
                                <ContactPage />
                            </div>
                        </div>
                    </>
                )
            }
        }} />
    )
}