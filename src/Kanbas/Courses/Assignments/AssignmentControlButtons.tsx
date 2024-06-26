import AssignmentDialog from "./AssignmentDialog";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";

export default function AssignmentControlButtons({ assignmentId, deleteAssignment } : 
  {assignmentId: string, deleteAssignment: (assignmentId: string) => void;} ) {
  return (
    <div className="float-end">
      <FaTrash id="wd-delete-assignment-btn" className="text-danger me-4 mb-1" data-bs-toggle="modal" 
               data-bs-target={`#wd-delete-assignment-dialog-${assignmentId}`} />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4 ms-2" />
      <AssignmentDialog dialogTitle="Delete This Assignment?" assignmentId={assignmentId} deleteAssignment={(assignmentId) => {
                                                                                            deleteAssignment(assignmentId) }}/>
    </div>
);
}

