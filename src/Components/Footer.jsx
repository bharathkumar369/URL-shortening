import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="box footer--div flex-row align">
                <div className="footer--div">
                    <img src="../../images/logo.svg" alt="logo" className="footer__logo"/>
                </div>
                <div>
                    <ul>
                        <li className="footer__items">Features</li>
                        <li className="footer__items"> Link Shortening</li>
                        <li className="footer__items">Branded Links</li>
                        <li className="footer__items">Analytics</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="footer__items">Resources</li>
                        <li className="footer__items">Blog</li>
                        <li className="footer__items">Developers</li>
                        <li className="footer__items">Support</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="footer__items">Company</li>
                        <li className="footer__items">About</li>
                        <li className="footer__items">Our Team</li>
                        <li className="footer__items">careers</li>
                        <li className="footer__items">Contact</li>
                    </ul>
                </div>
                <div>
                    <img src="../../images/icon-facebook.svg" alt="icon" className="icons"/>
                    <img src="../../images/icon-twitter.svg" alt="icon" className="icons"/>
                    <img src="../../images/icon-pinterest.svg" alt="icon" className="icons"/>
                    <img src="../../images/icon-instagram.svg" alt="icon" className="icons"/>
                </div>
            </div>
        </footer>
    )
}
export default Footer;