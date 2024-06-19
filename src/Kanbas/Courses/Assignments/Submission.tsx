import { useSelector } from "react-redux";
import { useParams } from "react-router";
import SubmissionDialog from "./SubmissionDialog";

export default function Submission() {
    const { cid } = useParams();
    const { aid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    return (
        <div id="wd-assignment-submission" className="p-5">
            {assignments
              .filter((assignment: any) => (assignment.course === cid && assignment._id === aid))
              .map((assignment: any) => (
                <div>
                    <h1>
                        {assignment.title}
                        {(new Date(assignment.availableFrom) <= new Date()) && (new Date() <= new Date(assignment.availableUntil))  &&
                        <button className="btn btn-lg btn-danger text-white float-end" data-bs-toggle="modal" 
                                data-bs-target={`#wd-submit-assignment-dialog-${aid}`}>Start Assignment</button>
                        }
                    </h1><hr />
                    <strong>Due</strong> {new Date(assignment.due).toDateString()}
                    <strong className="ms-5">Points</strong> {assignment.points}
                    <strong className="ms-5">Submitting</strong> a {assignment.onlineEntryOption}
                    <strong className="ms-5">Available</strong> {(new Date(assignment.availableUntil) < new Date())  && "Assignment Closed"}
                        {(new Date(assignment.availableFrom) <= new Date()) && (new Date() <= new Date(assignment.availableUntil))  && "until " + new Date(assignment.availableUntil).toDateString()}
                        {(new Date(assignment.availableFrom) > new Date()) && "after" && new Date(assignment.availableFrom).toDateString()}
                    <hr />
                    <h3>Instructions</h3>
                    {assignment.description}
                    <SubmissionDialog assignment={assignment}/>
                </div>
                
            ))}
            

        </div>
    );
}