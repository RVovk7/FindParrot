import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
const gridIcon = require('assets/media/long-arrow-alt-right-solid.svg');

interface InFormData { }

const validate = (values: any) => {
  const errors = {};
  return errors
}

const IN = (props: any) => {
  const { handleSubmit } = props;
  return (
    <form className="signIn" onSubmit={handleSubmit}>
      <h3>Have an Account?</h3>
      <Field name="email" component="input" type="email" placeholder="Email Adress" />
      <Field name="password" component="input" type="password" placeholder="Password" />
      <Button type="submit"><img src={gridIcon} alt="" /></Button>
    </form>
  )
}

const DecoratedIn = reduxForm<InFormData>({ form: "InForm", validate })(IN);
export default DecoratedIn;
