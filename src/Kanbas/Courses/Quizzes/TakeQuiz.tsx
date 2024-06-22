import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuiz, updateQuiz, setQuiz } from "./quizzesReducer";
import * as client from "./client";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import DOMPurify from 'dompurify';

export default function TakeQuiz () {
    const {cid, qid} = useParams();
    const dispatch = useDispatch();
    const { updatingQuiz, newQuiz } = useSelector((state: any) => state.quizzesReducer);
    const [currentQuiz, setCurrentQuiz] = useState<any>({});
    const [userAnswer, setUserAnswer] = useState("");
    const [userAnswers, setUserAnswers] = useState<any>([]);
    function createMarkup(html: any) {
        return { __html: DOMPurify.sanitize(html) };
    }
    const findQuiz = async (cid: string, qid: string) => {
        const quiz = await client.findQuiz(cid, qid);
        dispatch(setQuiz(quiz[0]));
        setCurrentQuiz(quiz[0]);
    }
    useEffect(() => {
        findQuiz(cid as string, qid as string);
      }, []);
    return (
        <div className="mb-2">
            <div>
                <h1>{updatingQuiz.title} <Link className="btn btn-lg btn-danger float-end" 
                                                to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/editor`}>Edit Quiz</Link></h1>
                <div><strong>Started:</strong> {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}</div><br />
                <h4>Quiz Instructions:</h4>
                <div dangerouslySetInnerHTML={createMarkup(updatingQuiz.instructions)} />
                </div><hr />
            <ul id="wd-questions-take-quiz" className="list-group rounded-0">
              {updatingQuiz.questions && updatingQuiz.questions
                .map((question: any) => (
                    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <span className="ms-2">{question.title}</span><span className="float-end text-secondary">{question.points} pts</span>
                        </div>
                        <div>
                            <div className="ms-3 mt-3" dangerouslySetInnerHTML={createMarkup(question.content)} />
                            {question.questionType === "fill in blank" &&
                                <input className="form-control ms-4 mb-2" onChange={(e) => setUserAnswer(e.target.value)}/>}
                            {question.questionType === "multiple choice" &&
                                question.possibleAnswers.map((possAns: any, index: number) => (
                                    <div className="ms-4 mb-2">
                                        <input type="radio" name={`all-possible-answers-${question._id}`} id={`possible-answer-${index}`} className="me-2" 
                                               onClick={() => setUserAnswer("true")}/>
                                        <label htmlFor={`possible-answer-${index}`}>{possAns}</label>
                                        <br />
                                    </div>
                                ))}
                            {question.questionType === "true false" &&
                                <div className="mb-2 ms-4">
                                    <span>
                                        <input type="radio" name="true-false" id="true" className="me-2" onClick={() => setUserAnswer("true")} />
                                        <label htmlFor="true">True</label>
                                    </span><br />
                                    <span>
                                        <input type="radio" name="true-false" id="false" className="me-2" onClick={() => setUserAnswer("false")} />
                                        <label htmlFor="false">False</label>
                                    </span>
                                </div>}
                        </div>
                    </li>
                ))}
            </ul>
            <button className="btn btn-danger float-end">Submit Quiz</button><br />
        </div>
    );
}