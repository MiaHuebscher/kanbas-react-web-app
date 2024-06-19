import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { updateEnrollments } from "./accountReducer";
import * as coursesClient from "./../Courses/client";
import * as accountClient from "./client";

export default function Enrollments () {
    const [courses, setCourses] = useState<any[]>([]);
    const [user, setUser] = useState<any>({});
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const saveEnrollments = async (user: any) => {
        await accountClient.saveEnrollments(user);
        setUser(user);
        dispatch(updateEnrollments(user));
      };
    const fetchCourses = async () => {
        const courses = await coursesClient.fetchAllCourses();
        setCourses(courses);
    };
    useEffect(() => {
        fetchCourses();
    }, []);
    console.log(currentUser.enrollments);
    return (
    <div id="enrollments" className="p-4">
        <h1>Available Courses</h1><hr />
        <ul className="list-group">
            {courses.map((c: any) => 
            <li key={c._id} className="list-group-item">
                <strong className="fs-3">{c.name}</strong>
                {currentUser.enrollments.find((e: any) => e === c._id) ? 
                    <button className="btn btn-danger float-end"
                    onClick={() => saveEnrollments({...currentUser, enrollments: 
                        [...currentUser.enrollments.filter((e: any) => e !== c._id)]})}
                    > Unenroll </button> :
                    <button className="btn btn-success float-end"
                    onClick={() => saveEnrollments({...currentUser, enrollments: [...currentUser.enrollments, c._id]})}
                    > Enroll </button>}
            </li>
        )}
        </ul>
    </div>
    );
}