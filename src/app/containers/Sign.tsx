import * as React from 'react';
import { connect } from 'react-redux';
import { postAuth } from 'modules/auth';
import Header from 'screen/Header';
import Footer from 'screen/Footer';
import IN from 'components/Sign/IN';
import UP from 'components/Sign/UP';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IAppProps {
    postAuth: any
}

class mainPage extends React.Component<IAppProps, any> {

    submitUp = (values: any) => {
        const { postAuth } = this.props; 
        toast.info("invalid");
        postAuth(values, 'sign_up');
    }

    submitIn = (values: any) => {
        const { postAuth } = this.props;
        toast.info("invalid");
        postAuth(values, 'user_token');
    }

    public render() {
        return (
            <React.Fragment>
                <Header />
                <div className="sign">
                    <IN onSubmit={this.submitIn} />
                    <UP onSubmit={this.submitUp} />
                </div>
                <ToastContainer autoClose={3000} />
                <Footer />
            </React.Fragment>
        );
    }
}

export default connect(null, { postAuth })(mainPage);