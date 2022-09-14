import React from 'react'
import {
    BrowserRouter as Router,
    Routes
} from "react-router-dom";
import { Route } from 'react-router';
import Courses from '../components/Courses';
import Subject from '../components/Subject';
import Topics from '../components/Topics';

const Test = () => {
    return (
        <h1>Test component</h1>
    )
}


export default function RoutesComponent() {
    return (
        <Router>
            <Routes>
                <Route path="/subjects/:courseName/:id" element={<Subject />} />
                <Route path="/topics/:courseName/:subjectName/:id" element={<Topics />} />
                <Route path="/" element={<Courses />} />
            </Routes>
        </Router>
    )
}
