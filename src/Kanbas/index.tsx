import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Route, Routes, Navigate } from "react-router";
import Courses from "./Courses";
import * as db from "./Database";
import { useState } from "react";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./store";

export default function Kanbas() {
    const [courses, setCourses] = useState<any[]>(db.courses);
    const [course, setCourse] = useState<any>({
        _id: "1234", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "beach.jpg", description: "New Description"}); 
    const addNewCourse = () => {
        setCourses([...courses, {...course, _id: new Date().getTime().toString() }]);
    };
    const deleteCourse = (courseId: any) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                }   else {
                        return c;
                    }
                })
        );
    };
    return (
        <Provider store={store}>
            <div id="wd-kanbas" className="h-100">
                <div className="d-flex h-100">
                    <div className="d-none d-md-block bg-black">
                        <KanbasNavigation />
                    </div>
                    <div className="flex-fill p-4">
                        <Routes>
                            <Route path="/" element={<Navigate to="Dashboard" />} />
                            <Route path="Account" element={<h1>Account</h1>} />
                            <Route path="Dashboard" element={
                                <Dashboard 
                                    courses={courses}
                                    course={course}
                                    setCourse={setCourse}
                                    addNewCourse={addNewCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}/>} />
                            <Route path="Courses/:cid/*" element={
                                <Courses courses={courses} />} />
                        </Routes>
                    </div>
                </div>             
            </div>
        </Provider>
    );
}