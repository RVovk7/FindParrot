import * as React from 'react';
import { Form, FormGroup, Col, FormControl, Button } from 'react-bootstrap';
const gridIcon = require('assets/media/long-arrow-alt-right-solid.svg');
// import { reduxForm } from 'redux-form';

export interface SignInProps {

}

export default class SignIn extends React.Component<SignInProps, any> {
  public render() {
    return (
      <Form className="signIn" horizontal>
        <h3>Have an Account</h3>
        <FormGroup controlId="formHorizontalEmail">
          <Col sm={10}>
            <FormControl type="email" placeholder="Email Adress" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit"><img src={gridIcon} alt="" /></Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
