import React from "react"
import "./login.css"
import { useState } from "react"
import axios from "axios"
// import { useHistory } from "react-router-dom"

const Login = () => {

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

    const register = () => {
        const { roll, password, role } = user
        if (roll && password) {
            // axios.post("http://localhost:9002/register", user)
            //     .then(res => {
            //         alert(res.data.message)
            //         history.push("/login")
            //     })
        } else {
            alert("invlid input")
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
            <div className="button" >Login</div>
            <div>or</div>
            <div className="button">Sign Up</div>
        </div>
    )
}

export default Login