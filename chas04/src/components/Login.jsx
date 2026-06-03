import React,{useState, useEffect} from 'react';

import { Input } from './Input';
import { Dropdown } from './Dropdown';
import { Comment } from './Comment';

export const Login = () => {

    // States
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [inputType, setInputType] = useState("password"); // show/hide password

    function changeInputType() { // exported function to Input.jsx 
        setInputType(inputType === "password" ? "text" : "password");  
    }

    useEffect(() => {
        console.log("Username:", username);
        console.log("Password:", password);
    }, [username, password]) // ComponentDidUpdate / DidMount replacement
    // This is used to get something and it is displayed only once - usually first
    // Or for toast notification (bottom right for the status of an action)

    const options = [
        {
            value: 1,
            name: "Facebook",
        },
        {
            value: 2,
            name: "Instagram",
        },
        {
            value: 3,
            name: "TikTok",
        },
    ];

    const [selectedOption, setSelectedOption] = useState(1); // default
    function showValues(e) {
        e.preventDefault(); // prevent page reset when submitting
        alert(`Username: ${username}\n Password: ${password}\n App: ${selectedOption}`);
    }

    const [comment, setComment] = useState("");

    return(
        <div id="login">
            <form>
                <Input 
                    type={"text"}
                    placeholder={"Your Username"}
                    value={username}
                    onChange={(e) => {setUsername(e.target.value)}}
                    changeInputType={changeInputType}
                />

                <Input 
                    type={inputType}
                    placeholder={"Your Password"}
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                    changeInputType={changeInputType}
                    name="passwordField"
                />

                <Dropdown options={options} onChange={(e) => {setSelectedOption(e.target.value)}} />

                <Comment
                    placeholder={"Your Comment"}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />

                <button type="button" className='action-button'>Sign In</button>
            </form>
        </div>
    )
}