import * as React from 'react';

export default function renderField(data: any) {
    const { input, type, placeholder, meta: { touched, error } } = data;
    return (
        <div className="inputSign">
            <input className={touched && error ? "inputFail" : ""} {...input} type={type} placeholder={placeholder} />
            {touched && error && <span >{error}</span>}
        </div>
    )
}