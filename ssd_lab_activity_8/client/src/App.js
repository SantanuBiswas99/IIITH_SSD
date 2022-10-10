import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Register from './components/register/register';
import AddQuery from './components/addQuery/addQuery';
import FeedbackPage from './components/feedbackpage/feedbackpage';
import StudentsConcerns from './components/StudentsConcerns/StudentsConcerns';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  const [user, setLoginUser] = useState({
    roll:sessionStorage.getItem("roll"),
    password:"",
    mode:sessionStorage.getItem("role")
  })

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Register setLoginUser={setLoginUser} />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Register setLoginUser={setLoginUser} />} />
        </Routes>
        <Routes>
          <Route path="/student" element={sessionStorage.getItem("roll") != "" ? <FeedbackPage /> : <Register setLoginUser={setLoginUser} />} />
        </Routes>
        <Routes>
          <Route path="/student/addQuery" element={sessionStorage.getItem("roll") != "" ? <AddQuery user={user} /> : <Register setLoginUser={setLoginUser} />} />
        </Routes>
        <Routes>
          <Route path="/tas/queries" element={sessionStorage.getItem("roll") != "" ? <StudentsConcerns user={user} /> : <Register setLoginUser={setLoginUser} />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
