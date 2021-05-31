import React, {useState} from "react";
import ReactDOM from "react-dom";

function Login(props){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function validate(e){
        e.preventDefault();
        if (username === "admin" && password === "admin"){
            alert("Logged in");
        } else {
            alert("Access Denied");
        }
    }

    return(
        <form className="box" action="index.html" onSubmit={validate}>
            <input value={username} type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
            <input value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <input type="submit" value="submit" />
        </form>
    )
}

ReactDOM.render(
    <Login />,
    document.querySelector("#root")
);