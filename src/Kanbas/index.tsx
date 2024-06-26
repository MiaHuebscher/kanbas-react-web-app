import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Route, Routes, Navigate } from "react-router";
import Courses from "./Courses";
import { useEffect, useState } from "react";
import "./styles.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";
import * as client from "./Courses/client";
import * as usersClient from "./Courses/People/client";
import Account from "./Account";
import ProtectedRoute from "./ProtectedRoute";
import Enrollments from "./Account/Enrollments";
import { setCurrentUser } from "./Account/accountReducer";

export default function Kanbas() {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [courses, setCourses] = useState<any[]>([]);
    const [course, setCourse] = useState<any>({
        _id: "1234", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "beach.jpg", description: "New Description"}); 
    const addNewCourse = async () => {
        const newCourse = await client.createCourse(course);
        setCourses([...courses, newCourse]);
        usersClient.updateUser({...currentUser, enrollments: [...currentUser.enrollments, newCourse._id]});
        dispatch(setCurrentUser({...currentUser, enrollments: [...currentUser.enrollments, newCourse._id]}));
        setCourse({
            _id: "1234", name: "New Course", number: "New Number",
            startDate: "2023-09-10", endDate: "2023-12-15",
            image: "beach.jpg", description: "New Description"});
    };
    const deleteCourse = async (courseId: any) => {
        await client.deleteCourse(courseId);
        setCourses(courses.filter((course) => course._id !== courseId));
        usersClient.updateUser({...currentUser, enrollments: currentUser.enrollments.filter((e: any) => e !== courseId)});
        dispatch(setCurrentUser({...currentUser, enrollments: currentUser.enrollments.filter((e: any) => e !== courseId)}));
    };
    const updateCourse = async () => {
        await client.updateCourse(course);
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                }   else {
                        return c;
                    }
            })
        );
        setCourse({
            _id: "1234", name: "New Course", number: "New Number",
            startDate: "2023-09-10", endDate: "2023-12-15",
            image: "beach.jpg", description: "New Description"});
    };
    const fetchCourses = async () => {
        const courses = await client.fetchAllCourses();
        setCourses(courses);
    };
    useEffect(() => {
        fetchCourses();
    }, []);
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
                            <Route path="Account/*" element={<h1><Account /></h1>} />
                            <Route path="Dashboard" element={<ProtectedRoute>
                                <Dashboard 
                                    courses={courses}
                                    course={course}
                                    setCourse={setCourse}
                                    addNewCourse={addNewCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}/></ProtectedRoute>} />
                            <Route path="Enrollments/:uid/*" element={<ProtectedRoute>
                                <Enrollments />
                            </ProtectedRoute>} />
                            <Route path="Courses/:cid/*" element={<ProtectedRoute>
                                <Courses courses={courses} /></ProtectedRoute>} />
                        </Routes>
                    </div>
                </div>             
            </div>
        </Provider>
    );
}