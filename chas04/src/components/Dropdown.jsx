import React from 'react';

export const Dropdown = ({options, onChange}) => {
    return(
        <p>
            <label htmlFor="app-select">Choose an App</label>
            <select id="app-select" onChange={onChange}>
                {options.map((option, i) => {
                    return(
                        <option key={i} value={option.value}>
                            {option.name}
                        </option>
                    )
                })}
            </select>
        </p>
    )
}