import GradesToolbar from "./GradesToolbar";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Grades() {
    const { cid } = useParams();
    const users = db.users;
    const enrollments = db.enrollments;
    const grades = db.grades;
    let idArray = enrollments.filter((enrollment: any) => enrollment.course === cid);
    let nameArray = [];
    let gradeArray = [];
    for (let i = 0; i < idArray.length; i++) {
        const id = idArray[i].user;
        nameArray.push(users.filter((user: any) => user._id === id));
    };
    for (let i = 0; i < nameArray.length; i++) {
        const name = nameArray[i][0].firstName + " " + nameArray[i][0].lastName;
        const id = nameArray[i][0]._id;
        const userGrades = grades.filter((grade: any) => grade.student === id);
        for (let j = 0; j < userGrades.length; j++) {
            const assignment = userGrades[j].assignment;
            const grade = userGrades[j].grade;
            gradeArray.push({"name": name, "assignment": assignment, "grade": grade});
        };
    }
    return (
        <div id="wd-grades">
            <GradesToolbar />
            <div className="table-responsive p-5">
                <table className="table table-lg">
                    <thead className="table-light">
                        <tr>
                            <th className="w-25">Student Name</th><th>Assignment Name</th><th>Grade (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gradeArray.map((assignmentGrade: any) => (
                            <tr>             
                                <td className="text-danger">{assignmentGrade.name}</td>
                                <td>{assignmentGrade.assignment}</td>
                                <td>{assignmentGrade.grade}</td>       
                            </tr>   
                        ))}                    
                    </tbody>                  
                </table>
            </div>
        </div>
    );

}