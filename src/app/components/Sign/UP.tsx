import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

interface UpFormData { }

const UP = (props: any) => {
    const { handleSubmit } = props;
    return (
        <form className="signUp" onSubmit={handleSubmit}>
            <h3>Are you new user?</h3>
            <Field name="email" component="input" type="email" placeholder="Email Adress" />
            <Field name="password" component="input" type="password" placeholder="Pasword" />
            <Field
                name="confirmPassword"
                component="input"
                type="password"
                placeholder="Confirm password" />
            <Button type="submit">SIGN UP</Button>
        </form >
    )
}
const DecoratedUp = reduxForm<UpFormData>({ form: "UpForm" })(UP);
export default DecoratedUp;
