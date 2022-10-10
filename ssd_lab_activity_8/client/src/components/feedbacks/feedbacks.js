import React from "react"
import "./feedbacks.css"

const Feedbacks = ({ exam_name , course_name, question_num, ta_roll, std_comment, ta_comment}) => {

    return (
        <div className="feedbacks">
            <div className="about">Exam Name</div>
            <div className="sboxes" id="examname">{exam_name}</div>
            <div className="about">Course Name</div>
            <div className="sboxes" id="coursename">{course_name}</div>
            <div className="about">Question number</div>
            <div className="sboxes" id="questionnumber">{question_num}</div>
            <div className="about">TA's Roll</div>
            <div className="sboxes" id="TArollnumber">{ta_roll}</div>
            <div className="about">Your comment</div>
            <div className="lboxes" id="yourcomment">{std_comment}</div>
            <div className="about">TA's response</div>
            <div className="lboxes" id="TAresponse">{ta_comment}</div>
        </div>
    )
}

export default Feedbacks