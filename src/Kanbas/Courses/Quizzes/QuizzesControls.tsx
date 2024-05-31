import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";

export default function QuizzesControls() {
    return (
        <div className="wd-grades-controls text-nowrap padding ms-5 me-5">
            <button id="wd-quiz-context" className="btn btn-light btn-lg border border-dark float-end">
                <IoEllipsisVertical />
            </button>
            <button id="wd-add-quiz-button" className="btn btn-danger btn-lg border border-dark float-end me-2">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Quiz
            </button>
            <input className="form-control w-25 form-control-lg" placeholder="Search for Quiz" />
            <br /><hr />
        </div>
    );
}