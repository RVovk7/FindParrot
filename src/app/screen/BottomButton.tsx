import * as React from 'react';
import { Button } from 'react-bootstrap';
const gridIcon = require('assets/media/th-solid.svg');
const FingerIcon = require('assets/media/hand-point-up-solid.svg');

export default function BottomButton() {
    return (
        <div className="bottomButton">
            <Button >
                <img src={gridIcon} alt="" />
                All categories</Button>
            <Button >
                <img src={FingerIcon} alt="" />
                How it works?</Button>
        </div>
    );
}
