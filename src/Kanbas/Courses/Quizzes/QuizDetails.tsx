import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as client from "./client";

export default function QuizDetails () {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { cid, qid } = useParams();
    const [quiz, setQuiz] = useState<any>({});

    const findQuiz = async (cid: string, qid: string) => {
        const quiz = await client.findQuiz(cid, qid);
        setQuiz(quiz[0]);
    }
    useEffect(() => {
        findQuiz(cid as string, qid as string);
      }, [cid, qid]);
    return (
      <div>
        {currentUser.role === "FACULTY" || currentUser.role === "TA" ? 
            <div>
                <div className="row">
                    <div className="col text-center">
                        <Link className="btn btn-light btn-lg border border-dark me-2"
                              to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/start`}>Preview</Link>
                        <Link className="btn btn-light btn-lg border border-dark"
                            to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/editor`}><FaPencil className="mb-2"/> Edit</Link>
                    </div>
                </div>
                <hr />
            </div> : ""
        }
        <h1>{quiz.title}</h1>
        {currentUser.role === "FACULTY" || currentUser.role === "TA" ? 
            <div>
                <div className="row">
                    <div className="col-5 text-end fw-bold">Quiz Type</div>
                    <div className="col-5 text-start">{quiz.quizType}</div>
                </div>
                <div className="row">
                    <div className="col-5 text-end fw-bold">Points</div>
                    <div className="col-5 text-start">{quiz.points ? quiz.points : 0}</div>
                </div>
                <div className="row">
                    <div className="col-5 text-end fw-bold">Assignment Group</div>
                    <div className="col-5 text-start">{quiz.assignmentGroup}</div>
                </div>
                <div className="row">
                    <div className="col-5 text-end fw-bold">Shuffle Answers</div>
                    <div className="col-5 text-start">{quiz.shuffleAnswers ? "yes" : "no"}</div>
                </div>
                <div className="row">
                    <div className="col-5 text-end fw-bold">Time Limit</div>
                    <div className="col-5 text-start">{quiz.timeLimit ? "yes" : "no"}</div>
                </div>
                <div className="row">
                    <div className="col-5 text-end fw-bold">Multiple Attempts</div>
                    <div className="col-5 text-start">{quiz.allowMultipleAttempts ? "yes" : "no"}</div>
                </div>
                <div className="row">
                    <div className="col-5 text-end fw-bold">View Responses</div>
                    <div className="col-5 text-start">{quiz.viewResponses ? "yes" : "no"}</div>
                </div>
                <div className="row">
                    <div className="col-5 text-end fw-bold">Show Correct Answers</div>
                    <div className="col-5 text-start">{quiz.showCorrectAnswers ? "yes" : "no"}</div>
                </div>
                <div className="row">
                    <div className="col-5 text-end fw-bold">One Question at a Time</div>
                    <div className="col-5 text-start">{quiz.oneQuestionAtATime ? "yes" : "no"}</div>
                </div>
                <div className="row">
                    <div className="col-5 text-end fw-bold">Require Respondus LockDown Browser</div>
                    <div className="col-5 text-start">{quiz.requireLockdownBrowser ? "yes" : "no"}</div>
                </div>
                <div className="row">
                    <div className="col-5 text-end fw-bold">Required to View Quiz Results</div>
                    <div className="col-5 text-start">{quiz.requiredToViewResults ? "yes" : "no"}</div>
                </div>
                <div className="row">
                    <div className="col-5 text-end fw-bold">Webcam Required</div>
                    <div className="col-5 text-start">{quiz.webcamRequired ? "yes" : "no"}</div>
                </div>
                <div className="row">
                    <div className="col-5 text-end fw-bold">Lock Questions After Answering</div>
                    <div className="col-5 text-start">{quiz.lockQuestions ? "yes" : "no"}</div>
                </div>
            <br />
            </div> : <hr />
        }
        <table className="table">
            <thead>
                <tr>
                    <th>Due</th><th>For</th><th>Available From</th><th>Available Until</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{quiz.due}</td><td>{quiz.assignTo}</td><td>{quiz.availableFrom}</td><td>{quiz.availableUntil}</td>
                </tr>
            </tbody>
        </table>
        <div className="row">
            <div className="col text-center">
                <Link className="btn btn-large btn-danger" to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/start`}>Start Quiz</Link>
            </div>
        </div>
      </div>
    );
}