import React from "react"
import "./register.css"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = ({ setLoginUser }) => {
    sessionStorage.setItem("roll","");
    sessionStorage.setItem("role","");
    const navigate = useNavigate()
    const [user, setUser] = useState({
        roll: "",
        password: "",
        role: "Student"
    })

    const handleChange = e => {

        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })

    }

    const login = () => {
        const { roll, password, role } = user;
        if (roll && password && role) {
            axios.post("http://localhost:5000/login", user)
                .then(res => {

                    if (res.data.message === "Login Successfull") {
                        sessionStorage.setItem("roll", roll)
                        sessionStorage.setItem("role", role)
                        setLoginUser(res.data.user)
                        if (user.role === "Student") {
                            navigate("/student")
                        }
                        else {
                            navigate("/tas/queries")
                        }
                    }
                    else {
                        alert(res.data.message);
                    }

                })
        } else {
            alert("Invlid input")
        }
    }

    const register = () => {
        const { roll, password, role } = user;
        if (roll && password && role) {
            axios.post("http://localhost:5000/register", user)
                .then(res => {
                    setUser({
                        roll: "",
                        password: "",
                        role: "Student"
                    });
                    alert(res.data.message)
                })
        } else {
            alert("Invlid input")
        }

    }

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="roll" value={user.roll} placeholder="Enter your Roll No" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange}></input>
            <div>Role of User</div>
            <select name="role" value={user.role} onChange={handleChange}>
                <option value="Student">Student</option>
                <option value="TA">TA</option>
            </select>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={register}>Sign Up</div>
        </div>
    )
}

export default Register