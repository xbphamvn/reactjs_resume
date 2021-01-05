import React from 'react';
import SocialIcon from '../../components/SocialIcon/SocialIcon';
import { useSpring, animated as a } from 'react-spring';

export default function ContactPage(props) {

    const displayAnim = useSpring({
        from: { transform: 'scale(0) translateY(100%)', opacity: 0 },
        to: { transform: 'scale(1) translateY(0)', opacity: 1 },
        config: { duration: 500 }
    });

    return (
        <a.section style={displayAnim} className="mainShow__content" id="contact">
            <div className="mainShow__content--title">
                <h2>Contact</h2>
                <span>Get in Touch</span>
            </div>
            <div className="row container-fluid mx-auto">
                <div className="col-12 col-md-6">
                    <h5 className="mainShow__content--h5">Get in Touch</h5>
                    <p>I look forward to hearing from you soon. Please feel free to contact me if you need any further information.</p>
                    <div className="getInTouch">
                        {/* <p className="ps-5"><i className="fal fa-user-circle" /> Phạm Văn Bách</p> */}
                        <p className="ps-5 fw-bold"><i className="fal fa-map-marker-alt ms-1" /> Bắc Từ Liêm - Hà Nội</p>
                        <p className="ps-5 fw-bold"><i className="fal fa-envelope" /> xbphamvn@gmail.com</p>
                        <p className="ps-5 fw-bold"><i className="fal fa-phone-alt" /> 0382 68 36 77</p>
                        <SocialIcon />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <h5 className="mainShow__content--h5">Contact Form</h5>
                    <form className="contactForm ms-2">
                        <div className="contactForm__field" tabIndex={1}>
                            <label htmlFor="username">
                                <i className="far fa-user" />Your Name
                            </label>
                            <input name="username" type="text" placeholder="e.g. John Wick" required />
                        </div>
                        <div className="contactForm__field" tabIndex={2}>
                            <label htmlFor="email">
                                <i className="far fa-envelope" />Your Email
                            </label>
                            <input name="email" type="text" placeholder="contact@gmail.com" required />
                        </div>
                        <div className="contactForm__field" tabIndex={3}>
                            <label htmlFor="message">
                                <i className="far fa-edit" />Your Message
                            </label>
                            <textarea name="message" placeholder="Type your message here..." required defaultValue={""} />
                        </div>
                        <button type="reset">Send Me Message</button>
                    </form>
                </div>
            </div>
        </a.section>
    )
}
