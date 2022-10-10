import React, { useEffect } from "react"
import Feedbacks from "../feedbacks/feedbacks"
import "./feedbackpage.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const FeedbackPage = () => {

    const [userData, setuserData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            axios.get("http://localhost:5000/query/get")
                .then(res => {
                    res.data.reverse();
                    setuserData(res.data);
                })

        };
        fetchData();
    }, []);

    const Playerlist = () => {
        return userData.map((p) => {
            return (
                <Feedbacks key={p._id} exam_name={p.exam_name} course_name={p.course_name} question_num={p.question_num} ta_roll={p.ta_roll} std_comment={p.std_comment} ta_comment={p.ta_comment} />
            )
        })
    }

    const navigate = useNavigate()
    async function addQuery() {
        navigate("/student/addQuery");
    }

    async function logout() {
        sessionStorage.removeItem("roll");
        sessionStorage.removeItem("role");
        navigate("/login");
    }

    return (
        <div>
            <div className="button-lo" onClick={logout}>Logout</div>
            <div className="feedbackpage">
                <h1>Feedbacks</h1>

                <div className="button" onClick={addQuery}>Add new query</div>

                <Playerlist />
            </div>
        </div>

    )
}

export default FeedbackPage