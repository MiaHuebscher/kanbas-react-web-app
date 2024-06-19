import { Link } from "react-router-dom";
export default function SubmissionDialog ({assignment} : {assignment: any}) {
    if (!assignment._id) return null;
    const inputType = assignment.onlineEntryOption === "Website URL" ? "url" : "file"
      return (
        <div>
          <div id={`wd-submit-assignment-dialog-${assignment._id}`} className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Submit Assignment </h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                  <label htmlFor="wd-assignment-submission" className="form-label">{assignment.onlineEntryOption}</label><br />
                    {assignment.onlineEntryOption === "Text Entry" ? 
                      <textarea className="form-control" rows={30} /> : 
                      <input className="form-control" type={inputType} />
                    } 
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Cancel </button>
                  <Link to={`/Kanbas/Courses/${assignment.course}/Assignments`} data-bs-dismiss="modal" className="btn btn-danger">
                    Submit Assignment </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}