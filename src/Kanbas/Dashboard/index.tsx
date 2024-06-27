import { Link } from "react-router-dom";
import "./index.css"
import { useSelector } from "react-redux";

export default function Dashboard(
    { courses, course, setCourse, addNewCourse,
      deleteCourse, updateCourse } : {
      courses: any[]; course: any; setCourse: (course: any) => void;
      addNewCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: () => void; })
    { 
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    return (
        <div className="p-4" id="wd-dashboard">
            <div>
            <h1 id="wd-dashboard-title">Dashboard <Link className="float-end btn btn-lg btn-primary"
                to={`/Kanbas/Enrollments/${currentUser._id}`}>Enroll in Courses</Link> </h1>
            </div>
            <hr />
            {currentUser.role === "FACULTY" || currentUser.role === "TA" ? 
            <div>
                <h5 className="fw-bold fs-2">New Course
                    <button className="btn btn-success float-end" 
                            id="wd-add-new-course-click"
                            onClick={addNewCourse}>Add</button>
                    <button className="btn btn-warning float-end me-2"
                            id="wd-update-course-click"
                            onClick={updateCourse}>
                            Update
                    </button>
                </h5><br />
                <input value={course.name} className="form-control mb-2"
                    onChange={(e) => setCourse({...course, name: e.target.value })} />
                <textarea value={course.description} className="form-control" 
                    onChange={(e) => setCourse({...course, description: e.target.value})} />
                < hr />
            </div> : "" }
            <h2 id="wd-dashboard-published">Published Courses ({currentUser.enrollments.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.filter((course: any) => currentUser.enrollments.includes(course._id)).map((course) => (
                        <div key={course._id} className="col" id="wd-dashboard-course " style={{ width: "300px" }}>
                            <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none">
                                <div className="card rounded-3 overflow-hidden">
                                    <img src={`/images/${course.image}`} height="{160}" />
                                    <div className="card-body">
                                        <span className="wd-dashboard-course-link"
                                            style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
                                            {course.name}
                                        </span>
                                        <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                                            {course.description}
                                        </p>
                                        <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                                        {currentUser.role === "FACULTY" || currentUser.role === "TA" ?
                                        <span>
                                            <button onClick={(event) => {
                                                        event.preventDefault();
                                                        deleteCourse(course._id);}}
                                                    className="btn btn-danger float-end"
                                                    id="wd-delete-course-click">
                                                    Delete
                                            </button>
                                            <button id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}
                                                className="btn btn-warning me-2 float-end">
                                                Edit
                                            </button>
                                        </span>
                                        : "" }
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <br />
        </div>
    );
}