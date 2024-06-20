import { useEffect, useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { FaUserCircle, FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import * as client from "./client";

export default function PeopleDetails({ fetchUsers }:
    { fetchUsers: () => void; }) {
  const { uid, cid } = useParams();
  const [user, setUser] = useState<any>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();
  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);
  };
  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    fetchUsers();
    navigate(`/Kanbas/Courses/${cid}/People`);
  };
  const saveUser = async () => {
    const [firstName, lastName] = name.split(" ");
    const updatedUser = { ...user, firstName: firstName, lastName: lastName, email: email, role: role };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    fetchUsers();
    navigate(`/Kanbas/Courses/${cid}/People`);
  };
  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);
  if (!uid) return null;
  return (
    <div className="position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25 text-black">
        <Link to={`/Kanbas/Courses/${cid}/People`} className="btn position-fixed end-0 top-0">
            <IoCloseSharp className="fs-1" /> </Link>
        <div className="text-center mt-2"> <FaUserCircle className="text-secondary me-2 fs-1" /> </div><hr />
        <div className="text-danger fs-4"> 
            {!editing && (
                <FaPencil onClick={() => setEditing(true)}
                          className="float-end fs-5 mt-2 text-primary" /> )}
            {editing && (
                <FaCheck onClick={() => saveUser()}
                        className="float-end fs-5 mt-2 me-2 text-success" /> )}
            {!editing && (
                <div onClick={() => setEditing(true)}>
                    {user.firstName} {user.lastName}</div>)}
            {user && editing && (
                <input className="form-control w-50"
                    defaultValue={`${user.firstName} ${user.lastName}`}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => {
                    if (e.key === "Enter") { saveUser(); }}}
                />
            )}
        </div><br />
        <div className="d-inline">
            <b className="float-start">Roles:</b> 
            {!editing && (
                <div className="float-start ms-2" onClick={() => setEditing(true)}>
                    {user.role}
                </div>)}
            {user && editing && (
                <div>
                    <select defaultValue={user.role} onChange={(e) =>setRole(e.target.value)} className="form-select w-50 float-start ms-2" 
                            id="wd-details-role-dropdown" onKeyDown={(e) => {
                                                            if (e.key === "Enter") { saveUser(); }}}>
                        <option value="STUDENT">STUDENT</option>
                        <option value="TA">TA</option>     
                        <option value="FACULTY">FACULTY</option>
                    </select>
                <br /><br />
                </div>      
            )}
        </div><br />
        <b>Login ID:</b> {user._id} <br />
        <div className="d-inline">
            <b className="float-start">Email:</b> 
            {!editing && (
                <div className="float-start ms-2" onClick={() => setEditing(true)}>
                    {user.email}
                </div>)}
            {user && editing && (
                <input className="form-control w-50"
                defaultValue={user.email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => {
                if (e.key === "Enter") { saveUser(); }}}/>
            )}
        </div><br />
        <b>Section:</b> {user.section} <br />      
        <b>Total Activity:</b> {user.totalActivity} 
        <hr />
        <button onClick={() => deleteUser(uid)} className="btn btn-danger float-end" > Delete </button>
        <Link to={`/Kanbas/Courses/${cid}/People`} className="btn btn-secondary float-start float-end me-2" > Cancel </Link>
    </div> 
  ); 
}