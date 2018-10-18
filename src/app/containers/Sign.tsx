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
    submitIn = (values: any) => {
        const { postAuth } = this.props;
        postAuth(values, 'user_token');
    }

    submitUp = (values: any) => {
        const { postAuth } = this.props;
        postAuth(values, 'sign_up');
        toast.info("waiting for response");
    }

    public render() {
        return (
            <React.Fragment>
                <Header />
                <div className="sign">
                    <IN onSubmit={this.submitIn} />
                    <UP onSubmit={this.submitUp} />
                    <ToastContainer autoClose={3000} />
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default connect(null, { postAuth })(mainPage);