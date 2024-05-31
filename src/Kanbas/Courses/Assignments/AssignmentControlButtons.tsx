import assignmentDialog from "./assignmentDialog";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <FaTrash className="text-danger me-4 mb-1" />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4 ms-2" />
    </div>
);
}

