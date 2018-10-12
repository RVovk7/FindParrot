import * as React from 'react';
import Header from 'screen/Header';
import Footer from 'screen/Footer';
import SingIn from 'screen/SignInUp/SignIn';
 import SingUp from 'screen/SignInUp/SignUp';

export default function mainPage() {
    return (
        <React.Fragment>
            <Header />
            <div className="signInUp">
                <SingIn />
                <SingUp />
            </div>
            <Footer />
        </React.Fragment>
    );
};