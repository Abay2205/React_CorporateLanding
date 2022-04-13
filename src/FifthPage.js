import React from 'react';
import photo5 from './images/Rectangle 28.png'
import logo1 from './images/partner-logo-1.png'
import logo2 from './images/partner-logo-4.png'
import logo3 from './images/partner-logo-5.png'
import logo4 from './images/partner-logo-7.png'
import logo5 from './images/partner-logo-8.png'

const FifthPage = () => {
    return (<div className="Fifth">
        <div className="container5">
            <div className="top_content5">
                <div className="card5">
                    <div className="photo5">
                        <img src={photo5} alt=""/>
                        <h3 className="name5">Jonathon Doe</h3>
                        <h5 className="position5">Co Founder</h5>
                        <p className="about5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className="card5">
                    <div className="photo5">
                        <img src={photo5} alt=""/>
                        <h3 className="name5">Jonathon Doe</h3>
                        <h5 className="position5">Co Founder</h5>
                        <p className="about5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className="card5">
                    <div className="photo5">
                        <img src={photo5} alt=""/>
                        <h3 className="name5">Jonathon Doe</h3>
                        <h5 className="position5">Co Founder</h5>
                        <p className="about5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
            <div className="logos5">
                <div className="logo5"><img src={logo1} alt="11"/></div>
                <div className="logo5"><img src={logo2} alt="22"/></div>
                <div className="logo5"><img src={logo3} alt="33"/></div>
                <div className="logo5"><img src={logo4} alt="44"/></div>
                <div className="logo5"><img src={logo5} alt="55"/></div>
            </div>
        </div>
    </div>);
};

export default FifthPage;