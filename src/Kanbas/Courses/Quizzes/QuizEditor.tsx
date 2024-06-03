import { Link } from "react-router-dom";
import { useParams } from "react-router";
import "./quizzes.css";

export default function QuizEditor() {
    const { cid } = useParams();
    return (
        <div id="wd-quiz-editor" className="m-5">
            <div className="float-end">
                Points and Info
            </div><br /><hr />
            <div>
                <ul className="nav nav-tabs mt-5" id="wd-quiz-editor-tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="details-tab" data-bs-toggle="tab" 
                        data-bs-target="#details" type="button" role="tab" aria-controls="details" aria-selected="true">
                            Details
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="questions-tab" data-bs-toggle="tab" 
                        data-bs-target="#questions" type="button" role="tab" aria-controls="questions" aria-selected="false">
                            Questions
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="wd-quiz-editor-tabs-content">
                    <div className="tab-pane fade show active" id="details" role="tabpanel" aria-labelledby="details-tab">
                        <form className="mt-4">
                            <input className="form-control" defaultValue="Unnamed Quiz" />
                            {/*Add quiz instructions here*/ }
                            <div className="form-group mt-4 row">
                                <div className="col-sm-4">
                                    <label htmlFor="wd-quiz-type" className="me-4 col-form-label float-end">
                                        Quiz Type
                                    </label>
                                </div>
                                <div className="col-sm-7 w-25">
                                    <select className="form-select" id="wd-quiz-type">
                                        <option selected value="graded quiz">Graded Quiz</option>
                                        <option value="practice quiz">Practice Quiz</option>
                                        <option value="graded survey">Graded Survey</option>
                                        <option value="ungraded survey">Ungraded Survey</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group mt-4 row">
                                <div className="col-sm-4">
                                    <label htmlFor="wd-assignment-group" className="me-4 col-form-label float-end">
                                        Assignment Group
                                    </label>
                                </div>
                                <div className="col-sm-6 w-25">
                                    <select className="form-select" id="wd-assignment-group">
                                        <option selected value="quizzes">Quizzes</option>
                                        <option value="exams">Exams</option>
                                        <option value="assignments">Assignments</option>
                                        <option value="project">Project</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group mt-4 row">
                                <div className="col-sm-4"></div>
                                <div className="col-sm-6 w-25">
                                    <label htmlFor="wd-quiz-details-options" className="fw-bold col-form-label">
                                        Options
                                    </label>
                                </div>
                            </div><br />
                            <div className="form-group row">
                                <div className="col-sm-4"></div>
                                <div className="col-sm-6">
                                    <input id="wd-quiz-shuffle" type="checkbox"></input> <label htmlFor="wd-quiz-shuffle">Shuffle Answers</label>
                                </div>
                            </div>
                            <div className="mt-4 row">
                                <div className="col-sm-4">
                                    <label htmlFor="wd-assign" className="me-4 col-form-label float-end" >
                                        Assign
                                    </label>
                                </div>
                                <section className="border border-dark rounded col-sm-6 p-4">
                                    <div className="form-group m-4">
                                        <label htmlFor="wd-assign-to" className="fw-bold">Assign to</label><br />
                                        <input type="text" id="wd-assign-to" className="form-control mt-2"
                                            defaultValue="Everyone" />
                                    </div>
                                    <div className="form-group ms-4 me-4">
                                        <label htmlFor="wd-due-date" className="fw-bold">Due</label><br />
                                        <input type="datetime-local" id="wd-due-date" className="form-control mt-2" />
                                    </div>
                                    <div>
                                        <div className="float-end mt-4 me-4">
                                            <label htmlFor="wd-available-until" className="fw-bold">Until</label><br />
                                            <input type="datetime-local" id="wd-available-until" className="form-control mt-2 mb-4" />
                                        </div>
                                        <div className="float-end mt-4">
                                            <label htmlFor="wd-available-from" className="fw-bold">Available From</label><br />
                                            <input type="datetime-local" id="wd-available-from" className="form-control mt-2 mb-4" />
                                        </div>
                                    </div>
                                </section>
                            </div>
                            < hr />
                            <div className="float-end">
                                <Link to={`/Kanbas/Courses/${cid}/Quizzes`} className="btn btn-light">Cancel</Link> <Link 
                                to={`/Kanbas/Courses/${cid}/Quizzes`} className="btn btn-danger">Save</Link>
                            </div>
                            <br /><br />
                        </form>
                    </div>
                    <div className="tab-pane fade" id="questions" role="tabpanel" aria-labelledby="questions-tab">
                        Questions
                    </div>
                </div>
            </div>
        </div>
    );
}