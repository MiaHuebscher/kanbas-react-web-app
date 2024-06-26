import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import CoursesNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
import Grades from "./Grades";
import Home from "./Home";
import Modules from "./Modules";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import Quizzes from "./Quizzes";
import PeopleTable from "./People/Table";
import { useSelector } from "react-redux";
import Submission from "./Assignments/Submission";
import QuizDetails from "./Quizzes/QuizDetails";
import QuizEditor from "./Quizzes/QuizEditor";
import TakeQuiz from "./Quizzes/TakeQuiz";
import Attempt from "./Quizzes/Attempt";

export default function Courses({ courses }: {courses: any[]; }) {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { pathname } = useLocation();
    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split("/")[4]}
            </h2>
            <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CoursesNavigation />
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Piazza" element={<h2>Piazza</h2>} />
                        <Route path="Zoom" element={<h2>Zoom</h2>} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" 
                            element={currentUser.role === "FACULTY" || currentUser.role === "TA" ? <AssignmentEditor /> : <Submission />} />
                        <Route path="Quizzes" element={<Quizzes />} />
                        <Route path="Quizzes/:qid" element={<QuizDetails />} />
                        <Route path="Quizzes/:qid/editor" element={<QuizEditor />} />
                        <Route path="Quizzes/:qid/start" element={<TakeQuiz />} />
                        <Route path="Quizzes/:qid/attempt/:attemptNumber" element={<Attempt />} />
                        <Route path="Grades" element={<Grades />} />
                        <Route path="People" element={<PeopleTable />} />
                        <Route path="People/:uid" element={<PeopleTable />} />
                    </Routes>
                </div>
            </div>           
        </div>
    );
}