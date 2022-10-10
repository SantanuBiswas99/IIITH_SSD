import React, { useEffect } from "react"
import Concern from "../concern/concern"
import "./StudentsConcerns.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import NoConcern from "../noconcern/noconcern"

const StudentsConcerns = ({ user }) => {
    const [userData, setuserData] = useState([]);
    const [update, setupdate] = useState(0);

    useEffect(() => {

        const fetchData = async () => {
            axios.get("http://localhost:5000/query/get")
                .then(res => {
                    setuserData(res.data);
                })

        };
        fetchData();
    }, []);

    const Playerlist = () => {
        return userData.map((p) => {
            return (
                (user.roll === p.ta_roll) ? (p.IsActive === true) ? <Concern setupdate={setupdate} key={p._id} _id={p._id} exam_name={p.exam_name} course_name={p.course_name} question_num={p.question_num} std_roll={p.std_roll} ta_roll={p.ta_roll} std_comment={p.std_comment} ta_comment={p.ta_comment} />
                    : null : null
            )
        })
    }

    const NonPlayerlist = () => {
        return userData.map((p) => {
            return (
                (user.roll === p.ta_roll) ? (p.IsActive === false) ? < NoConcern key={p._id} exam_name={p.exam_name} course_name={p.course_name} question_num={p.question_num} std_roll={p.std_roll} ta_roll={p.ta_roll} std_comment={p.std_comment} ta_comment={p.ta_comment} />
                    : null : null
            )
        })

    }
    const navigate = useNavigate()
    async function logout() {
        sessionStorage.removeItem("roll");
        sessionStorage.removeItem("role");
        navigate("/login");
    }

    return (<div>
        <div className="button-lo" onClick={logout}>Logout</div>
        <div className="studentsconcern">
            <h1>Students’ Concerns Page</h1>
            <h3>Unanswered queries</h3>
            <Playerlist />
            <h3>Answered queries</h3>
            <NonPlayerlist />
        </div>
    </div>

    )
}

export default StudentsConcerns