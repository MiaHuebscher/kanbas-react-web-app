import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function QuizzesControls({qid, cid} : {qid: any, cid: any}) {
    return (
        <div className="wd-grades-controls text-nowrap padding ms-5 me-5">
            <button id="wd-quiz-context" className="btn btn-light btn-lg border border-dark float-end">
                <IoEllipsisVertical />
            </button>
            <Link id="wd-add-quiz-button" to={`/Kanbas/Courses/${cid}/Quizzes/${qid}`} 
            className="btn wd-rounded-corners-all-around btn-lg btn-danger me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }}/>
                Quiz
            </Link>
            <input className="form-control w-25 form-control-lg" placeholder="Search for Quiz" />
            <br /><hr />
        </div>
    );
}