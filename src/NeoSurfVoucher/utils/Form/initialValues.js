import checkoutFormModel from './model';
const {
    formField: { voucherCode1, voucherCode2, voucherCode3 }
} = checkoutFormModel;

export default {
    [voucherCode1.name]: '',
    [voucherCode2.name]: '',
    [voucherCode3.name]: ''
};
