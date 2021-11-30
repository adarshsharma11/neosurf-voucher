import { useState } from 'react';
import { Formik, Form } from 'formik';
import PageTitle from './PageTitle';
import VoucherInput from './VoucherInput';
import VoucherSwap from './VoucherSwap';
import VoucherFinish from './VoucherFinish';
import initialValues from './utils/Form/initialValues';
import checkoutFormModel from './utils/Form/model';
import validations from './utils/Form/validations';
const NeoSurfVoucher = () => {
    const { formId, formField } = checkoutFormModel;
    const [activeStep, setActiveStep] = useState(0);
    const currentValidationSchema = validations[activeStep];

    function _renderStepContent(step) {
        switch (step) {
            case 0:
                return <VoucherInput formField={formField} />;
            case 1:
                return <VoucherSwap formField={formField} />;
            case 2:
                return <VoucherFinish />;
            default:
                return <VoucherInput />;
        }
    }

    function _handleSubmit(values, actions) {
        if (activeStep === 2) {
            console.log(values, 'submit form');
        } else {
            setActiveStep(activeStep + 1);
            actions.setTouched({});
            actions.setSubmitting(false);
        }
    }

    return (
        <>
            <PageTitle />
            <Formik
                onSubmit={_handleSubmit}
                initialValues={initialValues}
                validationSchema={currentValidationSchema}>
                <Form id={formId}>{_renderStepContent(activeStep)}</Form>
            </Formik>
        </>
    );
};

export default NeoSurfVoucher;
