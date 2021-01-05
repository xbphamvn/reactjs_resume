import React, { useState } from 'react';
import skillData from '../../assets/data/ResumeData/SkillData.json';
import timelineData from '../../assets/data/ResumeData/TimelineData.json';
import { useSpring, animated as a } from 'react-spring';

export default function ResumePage(props) {

    const [skillStatus, setSkillStatus] = useState({
        reactjs: 'active',
        htmlCssJs: '',
        otherSkills: '',
        furtherSkills: ''
    });

    const handleClick = (e) => {
        const name = e.currentTarget.getAttribute('name');
        for (let key in skillStatus) {
            key === name ? skillStatus[key] = 'active' : skillStatus[key] = '';
        }
        setSkillStatus({ ...skillStatus });
    }

    const renderSkills = () => (
        skillData.map((item, index) => ((
            <div className="resumeSkills" name={item.name} onClick={handleClick} key={index}>
                <div className="resumeSkills__belt">
                    <i className={item.classIcon} /> {item.title}
                </div>
                <div className={`resumeSkills__content ${skillStatus[item.name]}`}>
                    <ul>
                        {item.skillList.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
            </div>
        )))
    )

    const renderTimelineDetail = (detailArr) => (
        detailArr.map((item, index) => ((
            <div className="resume__timeline" key={index}>
                <span className="resume__milestone">{item.milestone}</span>
                <div className="resume__content">
                    <h6 className="mb-0">{item.title}</h6>
                    <p className="resume__content--small">{item.label}</p>
                    {item.content.map((detail, index) => <p className="mb-1" key={index}>{detail}</p>)}
                </div>
            </div>
        )))
    )

    const renderTimelines = () => (
        timelineData.map((item, index) => ((
            <div className="col-sm-12 col-md-6 col-xl-4" key={index}>
                <h5 className="mainShow__content--h5">{item.title}</h5>
                {renderTimelineDetail(item.detail)}
            </div>
        )))
    );

    const displayAnim = useSpring({
        from: { transform: 'scale(0) rotate(90deg) translateX(-200%)', opacity: 0 },
        to: { transform: 'scale(1) rotate(0deg) translateX(0)', opacity: 1 },
        config: { duration: 500 }
    });

    return (
        <a.section style={displayAnim} className="mainShow__content" id="resume">
            <div className="mainShow__content--title">
                <h2>Resume</h2>
                <span>Over 30 frontend projects</span>
            </div>
            <div className="row container-fluid mx-auto">
                <div className="col-sm-12 col-xl-4">
                    <h5 className="mainShow__content--h5">Skills</h5>
                    {renderSkills()}
                </div>
                {renderTimelines()}
                <div className="mb-2 mt-5">
                    <a href="./resume/Resume_PhamVanBach.pdf">
                        <button className="resume__btn">
                            <i className="fas fa-download" /> My CV
                        </button>
                    </a>
                </div>
            </div>
        </a.section>
    )
}
