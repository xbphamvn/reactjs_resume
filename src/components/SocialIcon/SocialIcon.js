import React from 'react';

export default function SocialIcon(props) {
    return (
        <div className="socialIcon">
            <a href="#https://facebook.com/#">
                <button className="socialIcon--btn socialIcon--facebook">
                    <i className="fab fa-facebook-f" />
                </button>
            </a>
            <a href="#https://twitter.com/#">
                <button className="socialIcon--btn socialIcon--twitter">
                    <i className="fab fa-twitter" />
                </button>
            </a>
            <a href="#https://youtube.com/#">
                <button className="socialIcon--btn socialIcon--youtube">
                    <i className="fab fa-youtube" />
                </button>
            </a>
            <a href="#https://instagram.com/#">
                <button className="socialIcon--btn socialIcon--instagram">
                    <i className="fab fa-instagram" />
                </button>
            </a>
            <a href="#https://skype.com/#">
                <button className="socialIcon--btn socialIcon--skype">
                    <i className="fab fa-skype" />
                </button>
            </a>
        </div>
    )
}
