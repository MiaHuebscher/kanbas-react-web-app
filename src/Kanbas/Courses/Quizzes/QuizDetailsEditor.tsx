import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addQuiz, updateQuiz, setQuiz } from "./quizzesReducer";
import * as client from "./client";


export default function QuizDetailsEditor ({cid, updatingQuiz, quiz, newQuiz}: 
    {cid: any, updatingQuiz: any, quiz: any, newQuiz: any}) {
    const dispatch = useDispatch();
    const [stat, setStat] = useState(null);
    let quiz_points = 0;
    quiz.questions.map((q: any) => quiz_points += q.points); //idk
    const createQuiz = async (quiz: any) => {
        const newQuiz = await client.createQuiz(cid as string, quiz);
        dispatch(addQuiz(newQuiz));
    }; 
    const saveQuiz = async (quiz: any) => {
        const status = await client.updateQuiz(quiz);
        setStat(status);
        dispatch(updateQuiz(quiz));
    };

    return (
        <form className="mt-4">
            <input type="text" className="form-control" id="wd-quiz-name" defaultValue={quiz.title}
                onChange={(e) => dispatch(setQuiz({ ...updatingQuiz, title: e.target.value }))} />
            <br />
            <label htmlFor="wd-quiz-instructions">Quiz Instructions:</label><br />
            <textarea id="wd-quiz-instructions" className="form-control" rows={10} defaultValue={quiz.instructions}
                onChange={(e) => dispatch(setQuiz({ ...updatingQuiz, instructions: e.target.value }))} />
            <div className="form-group mt-4 row">
                <div className="col-sm-4">
                    <label htmlFor="wd-quiz-type" className="me-4 col-form-label float-end">
                        Quiz Type
                    </label>
                </div>
                <div className="col-sm-7 w-25">
                    <select className="form-select" id="wd-quiz-type"
                        onChange={(e) => dispatch(setQuiz({ ...updatingQuiz, quizType: e.target.value }))}>
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
                        onChange={(e) => dispatch(setQuiz({ ...updatingQuiz, assignmentGroup: e.target.value }))}>
                        <option selected value="quizzes">Quizzes</option>
                        <option value="exams">Exams</option>
                        <option value="assignments">Assignments</option>
                        <option value="project">Project</option>
                    </select>
                </div>
            </div>
            <div className="form-group mt-4 row">
                <div className="col-sm-4">
                    <label htmlFor="wd-quiz-points" className="me-4 col-form-label float-end">
                        Points
                    </label>
                </div>
                <div className="col-sm-7">
                    <input type="number" id="wd-quiz-points" className="form-control w-25" defaultValue={quiz_points} 
                           onChange={(e) => dispatch(setQuiz({ ...updatingQuiz, points: e.target.value }))}/>
                </div>
            </div>
            <div className="form-group mt-4 row">
                <div className="col-sm-4">
                    <label htmlFor="wd-access-code" className="me-4 col-form-label float-end">
                        Access Code
                    </label>
                </div>
                <div className="col-sm-7">
                    <input type="text" id="wd-access-code" className="form-control w-25" defaultValue={quiz.accessCode} 
                           onChange={(e) => dispatch(setQuiz({ ...updatingQuiz, accessCode: e.target.value }))}/>
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
                    <input id="wd-quiz-shuffle" type="checkbox" defaultChecked={quiz.shuffleAnswers}
                        onChange={(e) => dispatch(setQuiz({ ...updatingQuiz, shuffleAnswers: e.target.checked }))} /> <label htmlFor="wd-quiz-shuffle">Shuffle Answers</label><br /><br />
                    <input id="wd-quiz-time-limit" type="checkbox" defaultChecked={quiz.timeLimit}
                        onChange={(e) => dispatch(setQuiz({ ...updatingQuiz, timeLimit: e.target.checked }))} /> <label htmlFor="wd-quiz-time-limit" className="me-3">Time Limit</label>
                    <input id="wd-quiz-minutes" type="number" className="input-sm" defaultValue={quiz.minutes}
                        onChange={(e) => dispatch(setQuiz({ ...updatingQuiz, minutes: e.target.value }))} /> <label htmlFor="wd-quiz-minutes">Minutes</label><br /><br />
                    <input id="wd-show-correct-answers" type="checkbox" defaultChecked={quiz.showCorrectAnswers}
                        onChange={(e) => dispatch(setQuiz({ ...updatingQuiz, showCorrectAnswers: e.target.checked }))} /> <label htmlFor="wd-show-correct-answers">Show Correct Answers</label><br /><br />
                    <input id="wd-one-question-at-a-time" type="checkbox" defaultChecked={quiz.oneQuestionAtATime}
                        onChange={(e) => dispatch(setQuiz({ ...updatingQuiz, oneQuestionAtATime: e.target.checked }))} /> <label htmlFor="wd-one-question-at-a-time">One Question At A Time</label><br /><br />
                    <input id="wd-webcam-required" type="checkbox" defaultChecked={quiz.webcamRequired}
                        onChange={(e) => dispatch(setQuiz({ ...updatingQuiz, webcamRequired: e.target.checked }))} /> <label htmlFor="wd-webcam-required">Webcam Required</label><br /><br />
                    <input id="wd-lock-questions" type="checkbox" defaultChecked={quiz.lockQuestions}
                        onChange={(e) => dispatch(setQuiz({ ...updatingQuiz, lockQuestions: e.target.checked }))} /> <label htmlFor="wd-lock-questions">Lock Questions</label><br /><br />
                </div>
            </div><br />
            <div className="form-group row">
                <div className="col-sm-4"></div>
                <div className="col-sm-6 pt-2 pb-2 border border-secondary rounded ">
                    <input id="wd-quiz-multiple-attempts" type="checkbox"
                        defaultChecked={quiz.allowMultipleAttempts}
                        onChange={(e) => dispatch(setQuiz({ ...updatingQuiz, allowMultipleAttempts: e.target.checked }))} /> <label htmlFor="wd-quiz-multiple-attempts">Allow Multiple Attempts</label>
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
                            defaultValue={quiz.assignTo} onChange={(e) => dispatch(setQuiz({ ...updatingQuiz, assignTo: e.target.value }))} />
                    </div>
                    <div className="form-group ms-4 me-4">
                        <label htmlFor="wd-due-date" className="fw-bold">Due</label><br />
                        <input type="datetime-local" id="wd-due-date" className="form-control mt-2"
                            defaultValue={quiz.due} onChange={(e) => dispatch(setQuiz({ ...updatingQuiz, due: e.target.value }))} />
                    </div>
                    <div>
                        <div className="float-end mt-4 me-4">
                            <label htmlFor="wd-available-until" className="fw-bold">Until</label><br />
                            <input type="datetime-local" id="wd-available-until" className="form-control mt-2 mb-4"
                                defaultValue={quiz.availableUntil} onChange={(e) => dispatch(setQuiz({ ...updatingQuiz, availableUntil: e.target.value }))} />
                        </div>
                        <div className="float-end mt-4">
                            <label htmlFor="wd-available-from" className="fw-bold">Available From</label><br />
                            <input type="datetime-local" id="wd-available-from" className="form-control mt-2 mb-4"
                                defaultValue={quiz.availableFrom} onChange={(e) => dispatch(setQuiz({ ...updatingQuiz, availableFrom: e.target.value }))} />
                        </div>
                    </div>
                </section>
            </div>
            < hr />
            <div className="float-end">
                <Link to={`/Kanbas/Courses/${cid}/Quizzes`} className="btn btn-light">Cancel</Link> {quiz._id === "new" ?
                    (<Link to={`/Kanbas/Courses/${cid}/Quizzes`} className="btn btn-danger"
                        onClick={() => createQuiz({ ...newQuiz, ...updatingQuiz })}>Save</Link>) :
                    (<Link to={`/Kanbas/Courses/${cid}/Quizzes`} className="btn btn-danger"
                        onClick={() => saveQuiz({ ...newQuiz, ...updatingQuiz })} >Save</Link>)}
            </div>
            <br /><br />
        </form>

    );
}