import React from 'react';

export const Age = (props) => {
    return(
        <div id="age-container">

            <h2>Age Check:</h2>

            <p>
                User1:
                {
                    props.user1.godini > 18
                    ? props.user1.ime
                    : " Kid"
                }
            </p>

            <p>
                User2:
                {
                    props.user2.godini > 18
                    ? props.user2.ime
                    : " Kid"
                }
            </p>

            <p>
                User3:
                {
                    props.user3.godini > 18
                    ? props.user3.ime
                    : " Kid"
                }
            </p>

            <p>
                User4:
                {
                    props.user4.godini > 18
                    ? props.user4.ime
                    : " Kid"
                }
            </p>

        </div>
    )
}