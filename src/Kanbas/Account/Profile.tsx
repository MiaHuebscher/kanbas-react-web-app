import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UseDispatch, useDispatch } from "react-redux";
import { setCurrentUser } from "./accountReducer";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchProfile = async () => {
    try {
      const account = await client.profile();
      setProfile(account);
    } catch (err: any) {
      navigate("/Kanbas/Account/Signin");
    }
  };
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };
  useEffect(() => { fetchProfile(); }, []);
  return (
    <div>
      <h1>Profile</h1>
      {profile && (
        <div>
          <input className="form-control mb-2" value={profile.username}  onChange={(e) => setProfile({ ...profile, username:  e.target.value })}
                 placeholder="username"/>
          <input className="form-control mb-2" value={profile.password}  onChange={(e) => setProfile({ ...profile, password:  e.target.value })}
                 placeholder="password"/>
          <input className="form-control mb-2" value={profile.firstName} onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                 placeholder="first name"/>
          <input className="form-control mb-2" value={profile.lastName}  onChange={(e) => setProfile({ ...profile, lastName:  e.target.value })}
                 placeholder="last name"/>
          <input className="form-control mb-2" value={profile.dob} onChange={(e) => setProfile({ ...profile, dob: e.target.value })} type="date"/>
          <input className="form-control mb-2" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} type="email"
                 placeholder="email"/>
          <select className="form-control mb-2" onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
            <option value="STUDENT">Student {profile.role === "STUDENT" ? "(Current)" : "" }</option>        
            <option value="FACULTY">Faculty {profile.role === "FACULTY" ? "(Current)" : "" }</option>
            <option value="USER">User {profile.role === "USER" ? "(Current)" : "" }</option> 
            <option value="ADMIN">Admin {profile.role === "ADMIN" ? "(Current)" : "" }</option>
          </select>
        </div>
      )}
      <button onClick={signout} className="btn btn-danger w-100">
        Sign out
      </button>

    </div>
  );
}

