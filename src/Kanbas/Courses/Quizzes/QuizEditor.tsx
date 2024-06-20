import { useParams } from "react-router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuiz } from "./quizzesReducer";
import "./quizzes.css";
import QuizDetailsEditor from "./QuizDetailsEditor";
import QuizQuestionsEditor from "./QuizQuestionsEditor";

export default function QuizEditor() {
    const { cid, qid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const toEdit = quizzes.filter((q: any) => (q.course === cid && q._id === qid));
    const dispatch = useDispatch();
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
                            <QuizDetailsEditor />
                        </div>
                        <div className="tab-pane fade" id="questions" role="tabpanel" aria-labelledby="questions-tab">
                            <QuizQuestionsEditor quiz={quiz} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}