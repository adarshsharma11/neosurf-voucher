import PropTypes from 'prop-types';
import React from 'react';
import { useField } from 'formik';
import './TextField.style.scss';

const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label>
                {label}
                <input {...field} {...props} />
            </label>
            {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
        </>
    );
};
TextField.propTypes = {
    label: PropTypes.string
};
export default TextField;
