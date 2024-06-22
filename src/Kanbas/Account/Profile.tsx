import * as accountClient from "./client";
import * as peopleClient from "./../Courses/People/client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./accountReducer";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const [status, setStatus] = useState(false);
  const [user, setUser] = useState<any>({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [dob, setDob] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchProfile = async () => {
    try {
      const account = await accountClient.profile();
      setProfile(account);
      setFirstName(account.firstName || "");
      setLastName(account.lastName || "");
      setEmail(account.email || "");
      setRole(account.role || "");
      setDob(account.dob || "");
      setUsername(account.username || "");
      setPassword(account.password || "");
    } catch (err: any) {
      navigate("/Kanbas/Account/Signin");
    }
  };
  const saveUser = async () => {
    const updatedUser = { ...profile, firstName: firstName, lastName: lastName, email: email, role: role, dob: dob, username: username, 
      password: password };
    await peopleClient.updateUser(updatedUser);
    setProfile(updatedUser);
    navigate("/Kanbas/Account/Profile");
    setStatus(true);
  };
  const signout = async () => {
    await accountClient.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };
  useEffect(() => { fetchProfile(); }, []);
  return (
    <div>
      <h1>Profile</h1>
      {status && 
      <div className="alert alert-success" role="alert">
        Successfully Updated Account Information!
      </div>}
      {profile && (
        <div>
          <input className="form-control mb-2" defaultValue={profile.username}  onChange={(e) => setUsername(e.target.value)}
                 placeholder="username"/>
          <input className="form-control mb-2" defaultValue={profile.password}  onChange={(e) => setPassword(e.target.value)}
                 placeholder="password"/>
          <input className="form-control mb-2" defaultValue={profile.firstName} onChange={(e) => setFirstName(e.target.value)}
                 placeholder="first name"/>
          <input className="form-control mb-2" defaultValue={profile.lastName}  onChange={(e) => setLastName(e.target.value)}
                 placeholder="last name"/>
          <input className="form-control mb-2" defaultValue={profile.dob} onChange={(e) => setDob(e.target.value)} type="date"/>
          <input className="form-control mb-2" defaultValue={profile.email} onChange={(e) => setEmail(e.target.value)} type="email"
                 placeholder="email"/>
          <select className="form-control mb-2" onChange={(e) => setRole(e.target.value)} defaultValue={profile.role}>
            <option selected={profile.role === "STUDENT"} value="STUDENT">Student {profile.role === "STUDENT" ? "(Current)" : "" }</option>        
            <option selected={profile.role === "FACULTY"} value="FACULTY">Faculty {profile.role === "FACULTY" ? "(Current)" : "" }</option>
            <option selected={profile.role === "USER"} value="USER">User {profile.role === "USER" ? "(Current)" : "" }</option> 
            <option selected={profile.role === "ADMIN"} value="ADMIN">Admin {profile.role === "ADMIN" ? "(Current)" : "" }</option>
          </select>
        </div>
      )}
      <button onClick={saveUser} className="btn btn-primary w-100">
        Update Information
      </button>
      <button onClick={signout} className="btn btn-danger w-100">
        Sign out
      </button>

    </div>
  );
}

