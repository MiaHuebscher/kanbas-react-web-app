import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";

export default function AssignmentsControlButtons() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    return (
    <div className="float-end">
      <button className="btn border-dark">
        40% of Total
      </button>&nbsp;&ensp;
      {currentUser.role === "FACULTY" || currentUser.role === "TA" ? 
        <div className="float-end">
          <FaPlus />&nbsp;
          <IoEllipsisVertical className="fs-4" />
        </div> : ""}
    </div>
    );
}