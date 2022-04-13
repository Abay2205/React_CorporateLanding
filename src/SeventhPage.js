import React from 'react';
import arrow from './images/ARROW.png'

const SeventhPage = () => {
    return (
        <div className="Seventh">
            <div className="container7">
                <h3 className="red_text">New features</h3>
                <h1 className="header7">Over 1000 designers are using ...</h1>
                <div className="content7">
                    <div className="inputs7">
                        <input type="text" className="input7" placeholder="FULL NAME"/>
                        <input type="text" className="input7" placeholder="YOUR EMAIL"/>
                        <input type="text" className="input7" placeholder="PASSWORD"/>
                    </div>
                    <div className="button7">
                        <div className="arrow_text7">
                            <img src={arrow} alt=""/>
                            <p className="top_btn_text7">30 days trial for all.</p>
                        </div>
                        <button className="btn7">Try now</button>
                    </div>
                </div>
                <p className="footer_text7">By Singing up you agree to our <span>terms & Services</span>.</p>
            </div>
        </div>
    );
};

export default SeventhPage;