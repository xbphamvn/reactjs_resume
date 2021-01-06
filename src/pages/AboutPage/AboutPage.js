import React from 'react';
import SocialIcon from '../../components/SocialIcon/SocialIcon';
import personalData from '../../assets/data/AboutData/InfoData.json';
import Knowledge from '../../components/Knowledge/Knowledge';
import Clients from '../../components/Clients/Clients';
import Numbers from '../../components/Numbers/Numbers';
import { useSpring, animated as a } from 'react-spring';

export default function AboutPage(props) {

    const displayAnim = useSpring({
        from: { transform: 'scale(0) translateX(100%)', opacity: 0 },
        to: { transform: 'scale(1) translateX(0)', opacity: 1 },
        config: { duration: 500 }
    });

    const renderInfoData = () => (
        personalData.map((item, index) => ((
            <div className="row" key={index}>
                <div className="col-sm-3 col-md-5">
                    <p className="fw-bold mb-2 mb-xl-3">
                        <i className={item.icon} /> {item.title}
                    </p>
                </div>
                <div className="col-sm-9 col-md-7">
                    <span>{item.detail}</span>
                </div>
            </div>
        )))
    );

    return (
        <a.section style={displayAnim} className="mainShow__content" id="about">
            <div className="mainShow__content--title">
                <h2>About Me</h2>
                <span>Frontend developer</span>
            </div>
            <div className="row container-fluid mx-auto">
                <div className="col-sm-12 col-md-6 col-xl-4 text-center">
                    <img className="img-fluid" src="./img/profile/avatar.png" alt="main avatar" />
                </div>
                <div className="col-sm-12 mt-4 mt-md-0 col-md-6 col-xl-8">
                    <div className="row">
                        <div className="col-md-12 col-xl-6">
                            <h5 className="mb-1 mb-xl-3">I am a Frontend Developer</h5>
                            <p>
                                Because I felt unsuitable for the current industry. So, I decided to look for opportunities in many other professions. And I found a passion in web programming.
                            </p>
                            <p>
                                My goal is to become a senior full stack developer. So, I will try best myself to improve my work skills everyday. I hope that I will have a chance to join your team to help me reach my goal!
                            </p>
                        </div>
                        <div className="col-md-12 col-xl-6">
                            <h5 className="mb-2 mb-xl-3">Personal info</h5>
                            <div data-class="aboutMe__info">
                                {renderInfoData()}
                            </div>
                            <SocialIcon />
                        </div>
                    </div>
                </div>
            </div>
            <Knowledge />
            <Clients />
            <Numbers />
        </a.section>
    )
}
