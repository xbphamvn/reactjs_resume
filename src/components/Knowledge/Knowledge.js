import React, { useState } from 'react';
import knowledgeData from '../../assets/data/AboutData/KnowledgeData.json';

export default function Knowledge(props) {

    const [status, setStatus] = useState({
        reactjs: 'active',
        html: '',
        css: '',
        javascript: ''
    })

    const handleClick = (e) => {
        const name = e.currentTarget.getAttribute('name');
        for (let key in status) {
            key === name ? status[key] = 'active' : status[key] = '';
        }
        setStatus({...status});
    }

    const renderKnowledge = () => (
        knowledgeData.map((item, index) => ((
            <div className="mt-4 mt-xl-0 col-sm-12 col-md-6 col-xl-3" key={index}>
                <div className={`knowledge ${status.[item.name]}`} name={item.name} onClick={handleClick} >
                    <div className={`knowledge__header ${item.className}`}>
                        <img className="knowledge__icon" src={item.imgSrc} alt={item.title} />
                    </div>
                    <div className="knowledge__body">
                        <h2 className="knowledge__title">{item.title}</h2>
                        <span className="resume__content--small">{item.projectNum}</span>
                        <ul className="knowledge__list">
                            {item.knowledgeList.map((item, index) => ((
                                <li key={index}>{item}</li>
                            )))}
                        </ul>
                    </div>
                </div>
            </div>
        )))
    );

    return (
        <div className="row container-fluid mt-3 mx-auto">
            <h5 className="mainShow__content--h5">Knowledge</h5>
            {renderKnowledge()}
        </div>
    )
}
