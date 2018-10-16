import * as React from 'react';
import Header from 'screen/Header';
import Footer from 'screen/Footer';
import IN from 'components/Sign/IN';
import UP from 'components/Sign/UP';

export default function mainPage() {
    return (
        <React.Fragment>
            <Header />
            <div className="sign">
                <IN />
                <UP />
            </div>
            <Footer />
        </React.Fragment>
    );
};