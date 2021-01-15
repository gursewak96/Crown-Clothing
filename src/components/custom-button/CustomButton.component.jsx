import React from "react";

import "./CustomButton.styles.scss"

const CustomButton = ({children,googleSignIn, ...otherProps})=>(
    <button className={` ${googleSignIn?'google-sign-in':''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;