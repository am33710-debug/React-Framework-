import React from 'react';

export const Input = ({type, placeholder, value, name, onChange, changeInputType}) => {
    return(
        <p>
            <input 
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            { name === "passwordField" && 
                <button type="button" onClick={changeInputType} className="eye-button">
                    <i className={type === "password" ? "fa fa-eye-slash" : "fa fa-eye"}></i>
                </button> }
        </p>
    )
}