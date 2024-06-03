import AssignmentDialog from "./AssignmentDialog";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "./assignmentsReducer";
import { useState } from "react";

export default function AssignmentControlButtons({ assignmentId } : {assignmentId: string} ) {
  const dispatch = useDispatch();
  return (
    <div className="float-end">
      <FaTrash id="wd-delete-assignment-btn" className="text-danger me-4 mb-1" data-bs-toggle="modal" 
               data-bs-target={`#wd-delete-assignment-dialog-${assignmentId}`} />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4 ms-2" />
      <AssignmentDialog dialogTitle="Delete This Assignment?" assignmentId={assignmentId} deleteAssignment={(assignmentId) => {
                                                                                            dispatch(deleteAssignment(assignmentId)) }}/>
      {assignmentId}
    </div>
);
}

