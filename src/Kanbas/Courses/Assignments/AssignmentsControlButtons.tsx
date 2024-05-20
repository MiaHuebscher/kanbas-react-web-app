import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

export default function AssignmentsControlButtons() {
    return (
    <div className="float-end">
      <button className="btn border-dark">
        40% of Total
      </button>&nbsp;&ensp;
      <FaPlus />&nbsp;
      <IoEllipsisVertical className="fs-4" />
    </div>
    );
}