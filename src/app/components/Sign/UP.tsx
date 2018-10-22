import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import RenderField from './RenderField';
import { validate } from 'util/valid';

const UP = (props: any) => {
    const { handleSubmit } = props;
    return (
        <form className="signUp" onSubmit={handleSubmit}>
            <h3>Are you new user?</h3>
            <Field name="email" component={RenderField} type="email" placeholder="Email Adress" />
            <Field name="password" component={RenderField} type="password" placeholder="Pasword" />
            <Field name="confirmPassword" component={RenderField} type="password" placeholder="Confirm password" />
            <Button type="submit">SIGN UP</Button>
        </form >
    )
}
const DecoratedUp = reduxForm({ form: "UpForm", validate, asyncBlurFields: ['email', 'password', 'confirmPassword'] })(UP);
export default DecoratedUp;