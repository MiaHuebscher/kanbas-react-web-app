import { Link, useLocation, useParams } from "react-router-dom";
import "./index.css";

export default function CoursesNavigation() {
    const { pathname } = useLocation();
    const { cid } = useParams();
    const links =  [
        { label: "Home" }, 
        { label: "Modules" },
        { label: "Piazza" }, 
        { label: "Zoom" }, 
        { label: "Assignments" }, 
        { label: "Quizzes" }, 
        { label: "Grades" },
        { label: "People" }
    ];
    return (
        <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
            {links.map((link) => (
                <Link key={`/Kanbas/Courses/${cid}/${link.label}`} to={`/Kanbas/Courses/${cid}/${link.label}`} className={`list-group-item border border-0
                    ${pathname.includes(link.label) ? "text-black bg-white border-left-black" : "text-danger bg-white"}`}>
                {link.label}
                </Link>
            ))}
        </div>
    );
}