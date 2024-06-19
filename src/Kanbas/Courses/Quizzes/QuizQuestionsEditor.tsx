export default function QuizQuestionsEditor ({quiz} : {quiz: any}) {
    const questions = quiz.questions;
    return (
        <div id="wd-quiz-questions-page" className="text-center">
            <button className="btn btn-lg btn-light mt-5 border border-dark">
                + New Question
            </button>
            <div id="wd-quiz-questions">
                {questions.map((q: any) => 
                    <div>
                        <div className="border border-dark bg-secondary" id="quiz-question">
                            {q.title}
                        </div>
                        <div>
                            {q.points}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}