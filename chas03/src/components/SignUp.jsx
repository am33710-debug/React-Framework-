import React, {useState} from 'react';

export const SignUp = () => {

    // Table State
    const [showTable, setShowTable] = useState(false);

    // States for Form Data
    const [firstName, setFirstName] = useState(""); // empty by default
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Function to change the state of the Form: turn F -> T and vice versa
    function toggleForm(e) { // e = event object (for preventDefault())
        e.preventDefault(); // cancel's the browsers default behavior for a specific event: clicking a link - prevents navigation otherwise React breaks
        setShowTable(prev => !prev); // take previous value (currently given to it) and flip it
    }

    // Logic Here:
    // Conditional rendering: if showTable === false, show form, 
    // if true, show table
    // we can also do it in this way:
    // showTable ? <table/> : <form/>
    return(
        <div id="signup-container">

            {!showTable && // false and something -> returns false, meaning: showTable = false, show form
                <form method="POST">
                    <label>First Name:</label>
                    <input 
                        type="text" // HTML attributes for input 
                        required
                        value={firstName} // what var
                        onChange={(e) => setFirstName(e.target.value)} // assign value to var
                    /><br/><br/>

                    <label>Last Name:</label>
                    <input 
                        type="text"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    /><br/><br/>

                    <label>Age:</label>
                    <input
                        type="number"
                        required
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    /><br/><br/>

                    <label>Email:</label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /><br/><br/>
                
                    <label>Password:</label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /><br/><br/>

                    <button onClick={toggleForm}>Submit</button>
                </form>
            }

            {showTable && // true and something -> returns something, meaning: showTable = true, show table
                <table border="1">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            <td>{age}</td>
                            <td>{email}</td>
                            <td>{password}</td>
                        </tr>
                    </tbody>
                </table>
            }
        </div>
    )
}