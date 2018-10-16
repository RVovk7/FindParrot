import { toast } from 'react-toastify';

export default function validate(values: any, from: any) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = () => (emailRegex.test(values.email));
    const validPass = () => values.password && values.password.length >= 8;
    const valid = validEmail() && validPass;

   // let text = '';
    toast.info('valid');

    return valid;
}