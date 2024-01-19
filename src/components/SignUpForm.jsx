import {useState} from 'react';
import App from "../App";


function SignUpForm({setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    //handleSubmit function comes after initial function
    async function handleSubmit(event) {
        event.preventDefault();
    

        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
            {
            method:'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({username: username, password: password})
            });
        const result = await response.json();
        console.log("Fetching Results", result);

        //save token in localstorage
        //localStorage.setItem('token', result.token);

        //pass token to setToken prop
        setToken(result.token);

        } catch (error) {
            setError(error.message);

        }
    }
//Return JSX here
return (
    <main>
        <h2>Sign Up!</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Username:{""}<input value={username}
                onChange={(e) =>
                    setUsername(e.target.value)}
                    type="text"
                    placeholder="Enter username"
                    />
            </label>
            <label> Password: {""}
                <input value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter password"
                />
            </label>
                    <button>Submit</button>
        </form>
        {error && <p className="error">{error}</p>}
    </main>
);
}


export default SignUpForm;
