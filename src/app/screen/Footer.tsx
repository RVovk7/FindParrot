import * as React from "react";
import { ButtonToolbar, Button } from 'react-bootstrap';
const parrotLogoWhite = require('assets/media/ParrotLogoWhite.png');
const copyrightIcon = require('assets/media/copyright-regular.svg');
export default function Footer() {
    return (
        <footer >
            <div className="footLogo">
                <img src={parrotLogoWhite} alt="" />
                <div className="logoFootTxt">
                    <h6>FIND PARROT</h6>
                    <div className="subFoot">
                        <p>INNOVATE</p>
                        <p>LIST</p>
                        <p>CONNECT</p>
                    </div>

                </div>
            </div>
            <ButtonToolbar className="footToolbar">
                <Button >ABOUT AS</Button>
                <Button >TERMS OF SERVICE</Button>
                <Button >PRIVACY POLICY</Button>
                <Button >CONTACT US</Button>
            </ButtonToolbar>
            <div className="bottomFoot">
                <div className="subBFoot">
                    <img src={copyrightIcon} alt="" />
                    <p>2018 Find Parrot</p>
                </div>
            </div>

        </footer >
    );
};
