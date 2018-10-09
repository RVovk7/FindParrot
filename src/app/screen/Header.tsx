import * as React from "react";
import { ButtonToolbar, Button } from 'react-bootstrap';
const parrotLogo = require('assets/media/ParrotLogo.png');
const Header = () => (
    <header>
        <div className="headLogo">
            <img src={parrotLogo} alt="" />
            <div className="logoHeadTxt">
                <h4>FIND PARROT</h4>
                <div className="sub">
                    <p>INNOVATE</p>
                    <p>LIST</p>
                    <p>CONNECT</p>
                </div>

            </div>
        </div>
        <ButtonToolbar className="ButtonToolbar">
            <Button >ALL PRODUCTS</Button>
            <Button >ABOUT AS</Button>
            <Button >LOG IN</Button>
            <Button >SING UP</Button>
        </ButtonToolbar>

    </header>
);
export default Header;
