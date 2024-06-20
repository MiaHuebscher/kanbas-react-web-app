import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseDispatch, useDispatch } from "react-redux";
import { setCurrentUser } from "./accountReducer";
import * as client from "./client";

export default function Signup() {
  const [error, setError] = useState("");
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = async () => {
    try {
      user._id = new Date().getTime().toString();
      user.firstName = "New";
      user.lastName = "";
      user.section = "S101";
      user.role = "STUDENT";
      user.enrollments = ["CS101"];
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
      <h1>Sign up</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}
             className="form-control mb-2" placeholder="username" />
      <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} type="password"
             className="form-control mb-2" placeholder="password" />
      <select value={user.role} onChange={(e) =>setUser({ ...user, role: e.target.value})} className="form-select mb-2" >
        <option value="STUDENT">Student</option>        
        <option value="FACULTY">Faculty</option>
        <option value="USER">User</option> 
        <option value="ADMIN">Admin</option> 
      </select>
      <button onClick={signup} className="btn btn-primary mb-2"> Sign up </button><br />
      <Link to="/Kanbas/Account/Signin">Sign in</Link>
    </div>
  );
}

