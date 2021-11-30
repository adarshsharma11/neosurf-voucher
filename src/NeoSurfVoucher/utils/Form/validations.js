import * as Yup from 'yup';
import checkoutFormModel from './model';
const {
    formField: { voucherCode1, voucherCode2, voucherCode3 }
} = checkoutFormModel;

export default [
    Yup.object().shape({
        [voucherCode1.name]: Yup.string().length(5).required(`${voucherCode1.requiredErrorMsg}`),
        [voucherCode2.name]: Yup.string().length(5).required(`${voucherCode2.requiredErrorMsg}`),
        [voucherCode3.name]: Yup.string().length(5).required(`${voucherCode3.requiredErrorMsg}`)
    })
];
