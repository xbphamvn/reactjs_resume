import React from 'react';
import numData from '../../assets/data/AboutData/NumData.json';

export default function Numbers(props) {

    const renderNumber = () => (
        numData.map((item, index) => ((
            <div className="mt-sm-1 mt-lg-0 mb-2 mt-lg-0 col-sm-12 col-md-6 col-lg-3 text-center p-1" key={index}>
                <div className={`about__num ${item.classBackground}`}>
                <i className={item.classIcon} />
                <h6 className="text-success mt-3">{item.title}</h6>
                <h5 className="text-warning">{item.number}</h5>
                </div>
            </div>
        )))
    )

    return (
        <div className="row container-fluid mt-3 mx-auto">
            <h5 className="mainShow__content--h5">Numbers</h5>
            {renderNumber()}
        </div>
    )
}
