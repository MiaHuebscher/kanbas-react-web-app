import { Link } from "react-router-dom";
import * as db from "../../Database";
import { useParams } from "react-router";

export default function AssignmentEditor() {
    const { cid } = useParams();
    const { aid } = useParams();
    const assignments = db.assignments;
    return (
        <div>
            {assignments
              .filter((assignment: any) => (assignment.course === cid && assignment._id === aid))
              .map((assignment: any) => (
                <form className="p-5 ms-5 me-5">
                    <div className="form-group">
                        <label htmlFor="wd-name" className="col-form-label">Assignment Name</label>
                        <input type="text" className="form-control" id="wd-name" defaultValue={assignment.title} />
                    </div>
                    <div className="form-group mt-4">
                        <textarea id="wd-description" className="form-control" rows={10} defaultValue={assignment.description} />    
                    </div>

                    <div className="form-group mt-4 float-end row">
                        <label htmlFor="wd-points" className="col-sm-5 col-form-label">Points</label>
                        <div className="col-sm-7">
                            <input type="number" className="form-control" id="wd-name" defaultValue={assignment.points} />
                        </div>
                    </div>
                    <br /><br /><br /><br />

                    <div className="form-group mt-4 float-end row">
                        <label htmlFor="wd-group" className="col-sm-5 col-form-label text-nowrap">Assignment Group</label>
                        <div className="col-sm-7">
                            <select className="form-select" id="wd-group">
                                <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                                <option value="QUIZZES">QUIZZES</option>
                                <option value="EXAMS">EXAMS</option>
                                <option value="PROJECT">PROJECT</option>
                            </select>
                        </div>
                    </div>
                    <br /><br /><br /><br />
                    <div className="form-group mt-4 float-end row">
                        <label htmlFor="wd-display-grade-as" className="col-sm-5 col-form-label text-nowrap text-left">Display Grade as</label>
                        <div className="col-sm-7">
                            <select className="form-select" id="wd-display-grade-as">
                                <option selected value="Percentage">Percentage</option>
                                <option value="Letter">Letter</option>
                            </select>
                        </div>
                    </div>
                    <br /><br /><br /><br />
                    <div className="mt-4 row">
                        <div className="col-sm-4">
                            <label htmlFor="wd-submission-type" className="ml-2 col-form-label">
                                Submission Type
                            </label>
                        </div>
                        <section className="border border-dark rounded col-sm-8 p-4">
                            <select className="form-select m-4 pe-2" id="wd-submission-type">
                                <option selected value="Online">Online</option>
                                <option value="In Class">In Class</option>
                            </select>
                            <div className="form-group">
                                <label className="fw-bold ms-4 me-4">Online Entry Options</label><br />
                                <div className="pb-2">
                                    <input type="checkbox" name="check-entry" id="wd-text-entry"
                                    className="m-2"
                                    defaultChecked={assignment.onlineEntryOption === "Text Entry" ? true : false} />
                                    <label htmlFor="wd-text-entry">Text Entry</label><br />
                                </div>
                                <div className="pb-2">
                                    <input type="checkbox" name="check-entry" id="wd-website-url"
                                    className="m-2"
                                    defaultChecked={assignment.onlineEntryOption === "Website URL" ? true : false} />
                                    <label htmlFor="wd-website-url">Website URL</label>
                                </div>
                                <div className="pb-2">
                                    <input type="checkbox" name="check-entry" id="wd-media-recordings"
                                    className="m-2"
                                    defaultChecked={assignment.onlineEntryOption === "Media Recordings" ? true : false} />
                                    <label htmlFor="wd-media-recordings">Media Recordings</label>
                                </div>
                                <div className="pb-2">
                                    <input type="checkbox" name="check-entry" id="wd-student-annotation"
                                    className="m-2"
                                    defaultChecked={assignment.onlineEntryOption === "Student Annotation" ? true : false} />
                                    <label htmlFor="wd-student-annotation">Student Annotation</label>
                                </div>
                                <div className="pb-2">
                                    <input type="checkbox" name="check-entry" id="wd-file-upload"
                                    className="m-2" 
                                    defaultChecked={assignment.onlineEntryOption === "File Upload" ? true : false} />
                                    <label htmlFor="wd-file-upload">File Upload</label>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="mt-4 row">
                        <div className="col-sm-4">
                            <label htmlFor="wd-assign" className="ml-2 col-form-label">
                                Assign
                            </label>
                        </div>
                        <section className="border border-dark rounded col-sm-8 p-4">
                            <div className="form-group m-4">
                                <label htmlFor="wd-assign-to" className="fw-bold">Assign to</label><br />
                                <input type="text" id="wd-assign-to" className="form-control mt-2"
                                    defaultValue={assignment.assignTo} />
                            </div>
                            <div className="form-group ms-4 me-4">
                                <label htmlFor="wd-due-date" className="fw-bold">Due</label><br />
                                <input type="datetime-local" id="wd-due-date" className="form-control mt-2" 
                                    defaultValue={assignment.due}/>
                            </div>
                            <div>
                                <div className="float-end mt-4 me-4">
                                    <label htmlFor="wd-available-until" className="fw-bold">Until</label><br />
                                    <input type="datetime-local" id="wd-available-until" className="form-control mt-2 mb-4" 
                                    defaultValue={assignment.availableUntil}/>
                                </div>
                                <div className="float-end mt-4">
                                    <label htmlFor="wd-available-from" className="fw-bold">Available From</label><br />
                                    <input type="datetime-local" id="wd-available-from" className="form-control mt-2 mb-4"
                                    defaultValue={assignment.availableFrom} />
                                </div>
                            </div>
                        </section>
                    </div>
                    <hr />
                    <div className="float-end">
                        <Link to={`/Kanbas/Courses/${assignment.course}/Assignments`} className="btn btn-light">Cancel</Link> <Link 
                        to={`/Kanbas/Courses/${assignment.course}/Assignments`} className="btn btn-danger">Save</Link>
                    </div>
                    <br /><br />
                </form>
            ))}
        </div>
    
    );
}
