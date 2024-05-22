import { BsGripVertical } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";
import { LiaEdit } from "react-icons/lia";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import "./Assignments.css";


export default function Assignments() {
    return (
      <div id="wd-assignments">
        <AssignmentsControls /><br /><br />
        <ul id="wd-assignments" className="list-group rounded-0">
          <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              <TiArrowSortedDown />
              Assignments
              <AssignmentsControlButtons />
            </div>
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1 border-left-success">
                <div className="wd-flex-row-container">
                  <BsGripVertical className="m-3 fs-2" />
                  <LiaEdit className="mt-3 me-3 fs-2 text-success" />
                  <div className="wd-flex-grow-1">
                    <a className="wd-assignment-link"
                      href="#/Kanbas/Courses/1234/Assignments/123">
                      A1
                    </a>
                    <br/>
                    <span className="text-danger">Mutliple Modules
                    </span> | <strong>Not available until</strong> May 6 at 12:00 am |
                    <strong> Due</strong> May 13 at 11:59pm | 100 pts
                  </div>
                  <AssignmentControlButtons/>
                </div>
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1 border-left-success">
                <div className="wd-flex-row-container">
                  <BsGripVertical className="m-3 fs-2" />
                  <LiaEdit className="mt-3 me-3 fs-2 text-success" />
                  <div className="wd-flex-grow-1">
                    <a className="wd-assignment-link" 
                      href="#/Kanbas/Courses/1234/Assignments/1234">
                      A2
                    </a>
                    <br/>
                    <span className="text-danger">Mutliple Modules
                    </span> | <strong>Not available until</strong> May 13 at 12:00 am |
                    <strong> Due</strong> May 20 at 11:59pm | 100 pts
                  </div>
                  <AssignmentControlButtons />
                </div>
              </li>
            </ul>
          </li>
        </ul>

      </div>
  );
}

  