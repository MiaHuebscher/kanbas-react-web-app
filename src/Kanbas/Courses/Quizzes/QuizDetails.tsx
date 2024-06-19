import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function QuizDetails () {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { cid, qid } = useParams();
    return (
        currentUser.role === "STUDENT" || currentUser.role === "USER" ? 
        <h1>student/user</h1>
        :
        <h1>faculty/TA</h1>
    );
}