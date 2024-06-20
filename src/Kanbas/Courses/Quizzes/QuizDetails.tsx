import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function QuizDetails () {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { cid, qid } = useParams();
    return (
        <div>
        {currentUser.role === "FACULTY" || currentUser.role === "TA" ? 
            <h1>faculty/TA</h1> : <h1>student</h1>}
        </div>
    );
}