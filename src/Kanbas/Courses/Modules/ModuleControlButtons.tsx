import { FaPencil } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons(
  { moduleId, deleteModule, editModule } : {
    moduleId: string; deleteModule: (moduleId: string) => void;
    editModule: (moduleId: string) => void }) {
    return (
    <div className="float-end">
      <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" />
      <FaTrash className="text-danger me-4 mb-1" onClick={() => deleteModule(moduleId)} />
      <GreenCheckmark />&nbsp;
      <FaPlus className="fs-4 mb-1"/>
      <IoEllipsisVertical className="fs-4 mb-1" />
    </div>
    );
}