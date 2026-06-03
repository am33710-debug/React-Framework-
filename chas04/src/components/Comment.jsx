import React,{ useState } from 'react';

export const Comment = ({ placeholder, value, onChange }) => {

    const [isExpanded, setExpanded] = useState(false);

    function expandComment() {
        setExpanded(!isExpanded);
    }

    return(
        <div className="comment-container">

            <textarea
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                rows={isExpanded ? 5 : 2}
            />

            <button
                type="button"
                onClick={expandComment}
            >
                {isExpanded ? "Collapse" : "Expand"}
            </button>

        </div>
    )
}