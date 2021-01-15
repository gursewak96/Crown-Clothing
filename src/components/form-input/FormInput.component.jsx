import React from "react";

import "./FormInput.styles.scss";

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className="group">
        <input  className="form-input" {...otherProps} onChange={handleChange} required/>
        {
            label?
            <label className={`${otherProps.value.length > 0 ? 'shrink' : null} form-input-label`}>{label}</label>:
            null
        }
        
    </div>
)

export default FormInput;