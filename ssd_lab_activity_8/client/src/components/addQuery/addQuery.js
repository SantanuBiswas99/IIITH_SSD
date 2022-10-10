import React from "react"
import "./addQuery.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const AddQuery = ({ user }) => {
    const navigate = useNavigate()

    const [Query, setQuery] = useState({
        exam_name: "",
        course_name: "",
        question_num: "",
        ta_roll: "divit",
        std_roll: user.roll,
        ta_comment: "",
        std_comment: "",
        IsActive: true
    })

    const handleChange = e => {
        const { name, value } = e.target
        setQuery({
            ...Query,
            [name]: value
        })
    }

    const submit = () => {
        const { exam_name, course_name, question_num, std_comment } = Query;
        if (exam_name && course_name && question_num && std_comment) {
            axios.post("http://localhost:5000/student/addQuery", Query)
                .then(res => {
                    if (res.data.message === "Query saved successfully.") {
                        navigate("/student");
                    }
                    else {
                        alert(res.data.message)
                    }
                })
        } else {
            alert("Invlid input")
        }

    }

    return (
        <div className="addQuery">
            <h1>Query Form</h1>
            <input type="text" name="exam_name" value={Query.exam_name} placeholder="Enter your Exam Name" onChange={handleChange}></input>
            <input type="text" name="course_name" value={Query.course_name} placeholder="Enter your Course Name" onChange={handleChange}></input>
            <input type="text" name="question_num" value={Query.question_num} placeholder="Enter Question number" onChange={handleChange}></input>
            <div>TA’s Name</div>
            <select name="ta_roll" value={Query.ta_roll} onChange={handleChange}>
                <option value="divit">divit</option>
                <option value="yash">yash</option>
                <option value="kishan">kishan</option>
                <option value="ashish">ashish</option>
                <option value="peeyush">peeyush</option>
            </select>
            <input className="comments" type="text" name="std_comment" value={Query.std_comment} placeholder="Comments/Concern" onChange={handleChange}></input>
            <div className="button" onClick={submit}>Post</div>
        </div>
    )
}

export default AddQuery