import { LiaFileImportSolid, LiaFileExportSolid } from "react-icons/lia";
import { IoSettingsSharp } from "react-icons/io5";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { CiFilter } from "react-icons/ci";


export default function GradesToolbar() {
    return (
    <div id="wd-grades-controls" className="text-nowrap padding">
        <button id="wd-export-button" 
            className="btn wd-rounded-corners-all-around 
            btn-lg btn-light me-1 float-end">
            <IoSettingsSharp className="position-relative me-2 fs-3" style={{ bottom: "2px", left: "3px"}}/>
        </button>
        <div className="dropdown d-inline me-1 float-end">
            <button id="wd-export-btn" className="btn wd-rounded-corners-all-around btn-lg btn-light dropdown-toggle"
            type="button" data-bs-toggle="dropdown">
            <LiaFileExportSolid />
            Export
            </button>
            <ul className="dropdown-menu">
                <li>
                    <a id="wd-export-btn" className="dropdown-item" href="#">
                    Export
                    </a>
                </li>
            </ul>
        </div>
        <button id="wd-import-button" className="btn wd-rounded-corners-all-around 
            btn-lg btn-light me-1 float-end pr-3">
            <LiaFileImportSolid className="position-relative me-2" style={{ bottom: "1px" }}/>
            Import
        </button><br /><br />
        <div className="ms-5 row">
            <div className="col-md-4">
                <label className="fw-bold" id="wd-student-names">Student Names</label><br/>
                <span className="padded-left"><PiMagnifyingGlassThin /></span>
                <input className="wd-rounded-corners-all-around padding-search input-lg" 
                        id="wd-student-names" type="text" placeholder="Search..."
                        size={30} />
            </div>
            <div className="col-md-8">
                <label className="fw-bold" id="wd-asssignment-names">Assignment Names</label><br />
                <span className="padded-left"><PiMagnifyingGlassThin /></span>
                <input className="wd-rounded-corners-all-around padding-search input-lg" 
                        id="wd-asssignment-names" type="text" placeholder="Search..."
                        size={30} />
            </div>
        </div>
        <button id="wd-apply-filters" className="btn wd-rounded-corners-all-around 
            btn-lg btn-light me-1 ms-5 mt-3">
            <CiFilter className="position-relative me-2" style={{ bottom: "1px" }}/>
            Apply Filters
        </button>
    </div>
    );
}