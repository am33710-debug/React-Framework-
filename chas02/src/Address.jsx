import React from 'react';

export const Address = (props) => {
    return(
        <div id="address-container">

            <h2>Skopjanin Check:</h2>

            <p>
                User1:
                {
                    props.user1.adresa === "Skopje"
                    ? props.user1.ime
                    : " Not Skopjanin"
                }
            </p>

            <p>
                User2:
                {
                    props.user2.adresa === "Skopje"
                    ? props.user2.ime
                    : " Not Skopjanin"
                }
            </p>

            <p>
                User3:
                {
                    props.user3.adresa === "Skopje"
                    ? props.user3.ime
                    : " Not Skopjanin"
                }
            </p>

            <p>
                User4:
                {
                    props.user4.adresa === "Skopje"
                    ? props.user4.ime
                    : " Not Skopjanin"
                }
            </p>

        </div>
    )
}