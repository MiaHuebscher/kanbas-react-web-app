import { FaPlus } from "react-icons/fa6";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import "./Assignments.css";

export default function AssignmentsControls() {
    return (
        <div id="wd-modules-controls" className="text-nowrap padding">
            <button id="wd-add-module-btn" 
                className="btn wd-rounded-corners-all-around 
                btn-lg btn-danger me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </button>
            <button id="wd-collapse-all" className="btn wd-rounded-corners-all-around 
                btn-lg btn-secondary me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </button>
            <div>
                <span className="padded-left"><PiMagnifyingGlassThin /></span>
                <input className="wd-rounded-corners-all-around padding-search" 
                        id="wd-search" type="text" placeholder="Search..." />
            </div>   
        </div>
    )
};