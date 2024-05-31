import { Link, useParams } from "react-router-dom";
import QuizzesControls from "./QuizzesControls";
import { RxRocket } from "react-icons/rx";


export default function Quizzes() {
    const { cid } = useParams();
    return (
        <div id="wd-quizzes" className="ms-5 me-5">
            <QuizzesControls />
            <Link className="btn btn-success" to={`/Kanbas/Courses/${cid}/Quizzes/1234`}>Quiz Editor - test</Link>
        </div>
    );
}