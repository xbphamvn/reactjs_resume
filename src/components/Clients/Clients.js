import React from 'react';
import clientData from '../../assets/data/AboutData/ClientData.json';

export default function Clients(props) {

    const renderClients = () => (
        clientData.map((item, index) => ((
            <div className="mt-5 mt-lg-0 col-sm-12 col-md-4 col-lg-2" key={index}>
                <img className="aboutMe__client--img d-block mx-auto" src={item.imgSrc} alt={item.id} />
            </div>
        )))
    )

    return (
        <div className="row container-fluid mt-3 mx-auto">
            <h5 className="mainShow__content--h5">Clients</h5>
            {renderClients()}
        </div>
    )
}
