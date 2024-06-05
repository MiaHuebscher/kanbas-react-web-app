import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const [module, setModule] = useState({
    id: 1, name: "Guitar Structure",
    description: "Explore how the Structure of a Guitar Affects its Sound",
    course: "GT101",
});
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
  return (
    <div id="wd-working-with-objects">
      <h3 className="mb-3">Working With Objects (Assignment Example)</h3>
      <h4>Modifying Properties</h4>
        {/* Updating Title*/}
        <a id="wd-update-assignment-title"
            className="btn btn-primary float-end"
            href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
            Update Title
        </a>
        <input className="form-control w-75" id="wd-assignment-title"
            value={assignment.title} onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })}/>
        {/* Updating Score*/}
        <br />
        <a id="wd-update-assignment-score"
            className="btn btn-primary float-end"
            href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
            Update Score
        </a>
        <input className="form-control w-75" id="wd-assignment-score"
               type="number" value={assignment.score} onChange={(e) =>
            setAssignment({ ...assignment, score: e.target.valueAsNumber })}/>
        {/* Updating Completed Status*/}
        <br />
        <input id="wd-assignment-completed-status"
            type="checkbox" defaultChecked={assignment.completed} onChange={(e) =>
            setAssignment({ ...assignment, completed: !assignment.completed })}/>
        <strong className="ms-2">{assignment.completed.toString()}</strong>
        <a id="wd-update-assignment-completed-status"
            className="btn btn-primary ms-5"
            href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
            Update Completed Status
        </a>
      <h4 className="mt-3">Retrieving Objects</h4>
        <a id="wd-retrieve-assignments" className="btn btn-primary"
            href={`${REMOTE_SERVER}/lab5/assignment`}>
            Get Assignment
        </a>
      <h4 className="mt-3">Retrieving Properties</h4>
        <a id="wd-retrieve-assignment-title" className="btn btn-primary me-2"
            href={`${REMOTE_SERVER}/lab5/assignment/title`}>
            Get Title
        </a>
        <a id="wd-retrieve-assignment-score" className="btn btn-primary me-2"
            href={`${REMOTE_SERVER}/lab5/assignment/score`}>
            Get Score
        </a>
        <a id="wd-retrieve-assignment-completed-status" className="btn btn-primary"
            href={`${REMOTE_SERVER}/lab5/assignment/completed`}>
            Get Completed Status
        </a><hr />
      {/* Module Example*/}
      <h3 className="mb-3">Working With Objects (Module Example)</h3>
      <h4>Modifying Properties</h4>
        <a id="wd-update-module-name"
            className="btn btn-primary float-end"
            href={`${MODULE_API_URL}/name/${module.name}`}>
            Update Name
        </a>
        <input className="form-control w-75" id="wd-module-name"
            value={module.name} onChange={(e) =>
            setModule({ ...module, name: e.target.value })}/>
        <br />
        <a id="wd-update-module-description"
            className="btn btn-primary float-end"
            href={`${MODULE_API_URL}/description/${module.description}`}>
            Update Description
        </a>
        <textarea className="form-control w-75" id="wd-module-description"
            value={module.description} onChange={(e) =>
            setModule({ ...module, description: e.target.value })} />
      <h4 className="mt-3">Retrieving Objects</h4>
        <a id="wd-retrieve-modules" className="btn btn-primary"
            href={`${REMOTE_SERVER}/lab5/module`}>
            Get Module
        </a>
      <h4 className="mt-3">Retrieving Properties</h4>
        <a id="wd-retrieve-module-name" className="btn btn-primary me-2"
            href={`${REMOTE_SERVER}/lab5/module/name`}>
            Get Module Name
        </a>
        <a id="wd-retrieve-module-description" className="btn btn-primary"
            href={`${REMOTE_SERVER}/lab5/module/description`}>
            Get Module Description
        </a>
    </div>
);}

