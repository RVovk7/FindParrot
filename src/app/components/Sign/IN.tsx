import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { validate } from 'util/valid';
import RenderField from './RenderField';
const gridIcon = require('assets/media/long-arrow-alt-right-solid.svg');

const IN = (props: any) => {
  const { handleSubmit } = props;
  return (
    <form className="signIn" onSubmit={handleSubmit}>
      <h3>Have an Account?</h3>
      <Field name="email" component={RenderField} type="email" placeholder="Email Adress" />
      <Field name="password" component={RenderField} type="password" placeholder="Password" />
      <Button type="submit"><img src={gridIcon} alt="" /></Button>
    </form>
  )
}

const DecoratedIn = reduxForm({ form: "InForm", validate, asyncBlurFields: ['email', 'password'] })(IN);
export default DecoratedIn;
