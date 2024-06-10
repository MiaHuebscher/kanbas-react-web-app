import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { UseSelector, useSelector, useDispatch } from "react-redux";
import { addQuiz, updateQuiz, setQuiz } from "./quizzesReducer";
import * as client from "./client";
import "./quizzes.css";
import { setAssignment } from "../Assignments/assignmentsReducer";

export default function QuizEditor() {
    const { cid, qid } = useParams();
    const [stat, setStat] = useState(null);
    const { quizzes, updatingQuiz, newQuiz } = useSelector((state: any) => state.quizzesReducer);
    const toEdit = quizzes.filter((q: any) => (q.course === cid && q._id === qid));
    const dispatch = useDispatch();
    const createQuiz = async (quiz: any) => {
        const newQuiz = await client.createQuiz(cid as string, quiz);
        dispatch(addQuiz(newQuiz));
    }; 
    const saveQuiz = async (quiz: any) => {
        const status = await client.updateQuiz(quiz);
        setStat(status);
        dispatch(updateQuiz(quiz));
    };
    useEffect(() => {
        dispatch(setQuiz(toEdit[0]));
      }, []);
    return (
        <div id="wd-quiz-editor" className="m-5">
            <div className="float-end">
                Points and Info
            </div><br /><hr />
            {quizzes
                .filter((quiz: any) => (quiz.course === cid && quiz._id === qid))
                .map((quiz: any) => (
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
                                <input type="text" className="form-control" id="wd-quiz-name" defaultValue={quiz.title} 
                                       onChange={(e) => dispatch(setQuiz({...updatingQuiz, title: e.target.value}))} />
                                {/*Add quiz instructions here*/ }
                                <br />
                                <label htmlFor="wd-quiz-instructions">Quiz Instructions:</label><br />
                                <textarea id="wd-quiz-instructions" className="form-control" rows={10} defaultValue={quiz.instructions} />
                                <div className="form-group mt-4 row">
                                    <div className="col-sm-4">
                                        <label htmlFor="wd-quiz-type" className="me-4 col-form-label float-end">
                                            Quiz Type
                                        </label>
                                    </div>
                                    <div className="col-sm-7 w-25">
                                        <select className="form-select" id="wd-quiz-type"
                                                onChange={(e) => dispatch(setQuiz({...updatingQuiz, quizType: e.target.value}))}>
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
                                        <select className="form-select" id="wd-assignment-group"
                                                onChange={(e) => dispatch(setQuiz({...updatingQuiz, assignmentGroup: e.target.value}))}>
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
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-4"></div>
                                    <div className="col-sm-6">
                                        <input id="wd-quiz-shuffle" type="checkbox" defaultChecked={quiz.shuffleAnswers}/> <label htmlFor="wd-quiz-shuffle">Shuffle Answers</label><br /><br />
                                        <input id="wd-quiz-time-limit" type="checkbox" defaultChecked={quiz.timeLimit} /> <label htmlFor="wd-quiz-time-limit" className="me-3">Time Limit</label>
                                        <input id="wd-quiz-minutes" type="number" className="input-sm" defaultValue={quiz.minutes} /> <label htmlFor="wd-quiz-minutes">Minutes</label>
                                    </div>
                                </div><br />
                                <div className="form-group row">
                                    <div className="col-sm-4"></div>
                                    <div className="col-sm-6 pt-2 pb-2 border border-secondary rounded ">
                                        <input id="wd-quiz-multiple-attempts" type="checkbox" 
                                            defaultChecked={quiz.allowMultipleAttempts}/> <label htmlFor="wd-quiz-multiple-attempts">Allow Multiple Attempts</label>
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
                                                defaultValue={quiz.assignTo} />
                                        </div>
                                        <div className="form-group ms-4 me-4">
                                            <label htmlFor="wd-due-date" className="fw-bold">Due</label><br />
                                            <input type="datetime-local" id="wd-due-date" className="form-control mt-2" 
                                                defaultValue={quiz.due}/>
                                        </div>
                                        <div>
                                            <div className="float-end mt-4 me-4">
                                                <label htmlFor="wd-available-until" className="fw-bold">Until</label><br />
                                                <input type="datetime-local" id="wd-available-until" className="form-control mt-2 mb-4" 
                                                    defaultValue={quiz.availableUntil}/>
                                            </div>
                                            <div className="float-end mt-4">
                                                <label htmlFor="wd-available-from" className="fw-bold">Available From</label><br />
                                                <input type="datetime-local" id="wd-available-from" className="form-control mt-2 mb-4" 
                                                    defaultValue={quiz.availableFrom}/>
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
            ))}
        </div>
    );
}