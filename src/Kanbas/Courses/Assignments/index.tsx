import { BsGripVertical } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";
import { LiaEdit } from "react-icons/lia";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import { setAssignments, updateAssignment, deleteAssignment, updateNewAssignment } from "./assignmentsReducer";
import * as client from "./client";
import "./Assignments.css";



export default function Assignments() {
    const { cid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { assignments, newAssignment } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();

    const fetchAssignments = async () => {
        const assignments = await client.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
      };
      const removeAssignment = async (assignmentId: string) => {
          await client.deleteAssignment(assignmentId);
          dispatch(deleteAssignment(assignmentId));
      };
      const saveAssignment = async (assignment: any) => {
        const status = await client.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
      };
      useEffect(() => {
        fetchAssignments();
        saveAssignment({...newAssignment, course: cid, title: `Assignment ${assignments.length}` });
        updateNewAssignment({...newAssignment, course: cid, title: `Assignment ${assignments.length}` });
      }, [cid]);
    return (
        <div>
            <AssignmentsControls aid={newAssignment._id} cid={cid} /><br /><br />
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
                          .filter((assignment: any) => (assignment.course === cid && assignment._id !== "new"))
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
                                        </span> | <strong>{(new Date(assignment.availableUntil) < new Date())  && "Closed"}</strong>
                                        <strong>{(new Date(assignment.availableFrom) <= new Date()) && (new Date() <= new Date(assignment.availableUntil))  && "Available"}</strong> 
                                        <strong>{(new Date(assignment.availableFrom) > new Date()) && "Not Available Until"}</strong> {(new Date(assignment.availableFrom) > new Date()) && 
                                            new Date(assignment.availableFrom).toDateString()} | <strong> Due</strong> {new Date(assignment.due).toDateString()} | {assignment.points} pts
                                    </div>
                                    {currentUser.role === "FACULTY" || currentUser.role === "TA" ?
                                    <AssignmentControlButtons assignmentId={assignment._id} 
                                                              deleteAssignment={(assignmentId) => { removeAssignment(assignmentId); }}/> : ""}
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