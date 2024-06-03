import { IoEllipsisVertical } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaCopy } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
import { Link } from "react-router-dom";

export default function QuizControlButtons({quiz} : {quiz: any}) {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <div className="dropdown d-inline me-1 float-end">
          <IoEllipsisVertical id="wd-quiz-context-btn" className="fs-4 ms-2" data-bs-toggle="dropdown" />
          <ul className="dropdown-menu">
            <li>
              <Link id="wd-quiz-edit-btn" className="dropdown-item" to={`/Kanbas/Courses/${quiz.course}/Quizzes/${quiz._id}`}>
                <FaPencil /> Edit
              </Link>
            </li>
            <li>
              <a id="wd-quiz-delete-btn" className="dropdown-item" href="#">
                <FaTrash /> Delete
              </a>
            </li>
            <li>
              <a id="wd-quiz-publish-btn" className="dropdown-item" href="#">
              <GreenCheckmark /> Publish
              </a>
            </li>
            <li>
              <a id="wd-quiz-copy-btn" className="dropdown-item" href="#">
                <FaCopy /> Copy
              </a>
            </li>
            <li>
              <a id="wd-quiz-sort-btn" className="dropdown-item" href="#">
                <TiArrowSortedDown /> Sort
              </a>
            </li>
          </ul>
      </div>
    </div>
);
}