import React from "react"
import "./noconcern.css"

const NoConcern = ({ course_name, question_num, std_roll, ta_roll, std_comment, ta_comment }) => {

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
            <div className="lboxes" id="scomment">{ta_comment}</div>
        </div>
    )
}

export default NoConcern