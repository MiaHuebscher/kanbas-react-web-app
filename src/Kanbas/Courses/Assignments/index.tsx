import { BsGripVertical } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";
import { LiaEdit } from "react-icons/lia";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import "./Assignments.css";
import { useSelector } from "react-redux";
import { addAssignment, editAssignment, updateAssignment, deleteAssignment } from "./assignmentsReducer";
import { useState } from "react";
import { useDispatch } from "react-redux";


export default function Assignments() {
    const { cid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const assignment = assignments.filter((assignment: any) => (assignment._id === "1234"));
    const dispatch = useDispatch();
    return (
        <div>
            <AssignmentsControls aid={assignment[0]._id} cid={cid} updateAssignment={() => {
                dispatch(updateAssignment({...assignment[0], course: cid })); }}/><br /><br />
            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />
                    <TiArrowSortedDown />
                    Assignments
                    <AssignmentsControlButtons />
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        {assignments
                          .filter((assignment: any) => assignment.course === cid)
                          .map((assignment: any) => (
                            <li className="wd-lesson list-group-item p-3 ps-1 border-left-success">
                                <div className="wd-flex-row-container">
                                    <BsGripVertical className="m-3 fs-2" />
                                    <LiaEdit className="mt-3 me-3 fs-2 text-success" />
                                    <div className="wd-flex-grow-1">
                                        <Link to={`/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`} className="cwd-assignment-link">
                                            {assignment.title}
                                        </Link>
                                        <br/>
                                        <span className="text-danger">Mutliple Modules
                                        </span> | <strong>Not available until</strong> {assignment.availableFrom} |
                                        <strong> Due</strong> {assignment.due} | {assignment.points} pts
                                    </div>
                                    <AssignmentControlButtons/>
                                </div>
                            </li>
                          ))
                        }
                    </ul>
                </li>
            </ul>
        </div>
    );
}