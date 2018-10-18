export const validate = (values: any) => {
    const errors = {
        email: "",
        password: "",
        confirmPassword: "",
    };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = () => (emailRegex.test(values.email));
    const passLength = values.password && values.password.length >= 8;
    const validConfirm = values.password !== values.confirmPassword;

    if (!validEmail()) errors.email = 'invalid email';
    if (!values.email) errors.email = 'required email';
    if (!passLength) errors.password = 'password lenth min 8';
    if (!values.password) errors.password = 'required';
    if (validConfirm) errors.confirmPassword = 'not equal password';
    if (!values.confirmPassword) errors.confirmPassword = 'required';

    return errors;
}