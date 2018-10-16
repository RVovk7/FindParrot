import * as React from 'react';
import { Form, FormGroup, Col, FormControl, Button } from 'react-bootstrap';

interface UpProps {

}

export default class Up extends React.Component<UpProps, any> {
    public render() {
        return (
            <Form className="signUp" horizontal>
                <h3>Are you new user?</h3>
                <FormGroup>
                    <Col sm={10}>
                        <FormControl type="email" placeholder="Email Adress" />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col sm={10}>
                        <FormControl type="password" placeholder="Password" />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col sm={10}>
                        <FormControl type="password" placeholder="Confirm password" />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit"><strong>SIGN UP</strong></Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}
