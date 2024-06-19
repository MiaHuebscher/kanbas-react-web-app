import { FaPlus } from "react-icons/fa6";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import "./Assignments.css";
import { useSelector } from "react-redux";

export default function AssignmentsControls({ aid, cid } : { aid: any, cid: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    return (
        <div className="wd-assignments-controls text-nowrap padding">
            {currentUser.role === "FACULTY" || currentUser.role === "TA" ?
              <div>
                <Link id="wd-add-assignment-btn" to={`/Kanbas/Courses/${cid}/Assignments/${aid}`}
                    className="btn wd-rounded-corners-all-around 
                    btn-lg btn-danger me-1 float-end" >
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment
                </Link>
                <button id="wd-add-group-btn" className="btn wd-rounded-corners-all-around 
                    btn-lg btn-secondary me-1 float-end">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Group
                </button> 
              </div> : ""}
            <div>
                <span className="padded-left"><PiMagnifyingGlassThin /></span>
                <input className="wd-rounded-corners-all-around padding-search" 
                        id="wd-search" type="text" placeholder="Search..." />
            </div>
        </div>
    )
};