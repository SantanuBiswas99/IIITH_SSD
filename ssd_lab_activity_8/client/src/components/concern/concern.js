import React from "react"
import "./concern.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const Concern = ({ _id, exam_name, course_name, question_num, std_roll, ta_roll, std_comment }) => {

    const navigate = useNavigate()

    const [Query, setQuery] = useState({
        _id: _id,
        exam_name: exam_name,
        course_name: course_name,
        question_num: question_num,
        ta_roll: ta_roll,
        std_roll: std_roll,
        ta_comment: "",
        std_comment: std_comment,
        IsActive: true
    })

    const handleChange = e => {
        const { name, value } = e.target
        setQuery({
            ...Query,
            [name]: value
        })
    }

    const post = () => {
        const { ta_comment } = Query;
        if (ta_comment) {
            axios.post("http://localhost:5000/query/update", Query)
                .then(res => {
                    if (res.data.message === "user updated!") {
                        alert("Reply posted successfully!!");
                        window.location.reload()
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
        <div className="concern">
            <div className="about">Students Roll No</div>
            <div className="sboxes" id="srollno">{std_roll}</div>
            <div className="about">Course Name</div>
            <div className="sboxes" id="coursename">{course_name}</div>
            <div className="about">Question number</div>
            <div className="sboxes" id="questionnumber">{question_num}</div>
            <div className="about">TA's Roll</div>
            <div className="sboxes" id="TArollnumber">{ta_roll}</div>
            <div className="about">Students comment</div>
            <div className="lboxes" id="scomment">{std_comment}</div>
            <div className="about">Your response</div>
            <input type="text" name="ta_comment" value={Query.ta_comment} className="lboxes" id="yresponse" placeholder="Enter your Response" onChange={handleChange}></input>
            {Query.ta_comment === "" ? null : <div className="button" onClick={post}>Post</div>}
        </div>
    )
}

export default Concern