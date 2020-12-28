import React from 'react';
import { Route } from 'react-router-dom';
import MenuBar from '../../components/MenuBar/MenuBar';
import NavBar from '../../components/NavBar/NavBar';

export const GlobalTemplate = (props) => {

    const { Component, ...restParam } = props;

    return (
        <Route path={restParam.path} render={(propsRoute) => (
            <>
                <MenuBar />
                <NavBar />
                <div className="main">
                    <div className="mainShow">
                        <Component {...propsRoute} />
                    </div>
                </div>
            </>
        )} />
    )
}