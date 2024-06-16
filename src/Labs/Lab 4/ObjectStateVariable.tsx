import React, { useState } from "react";
export default function ObjectStateVariable() {
  const [person, setPerson] = useState({ name: "Peter", age: 24 });
  return (
    <div>
      <h3>Object State Variables</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <input className="form-control" type="text"
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      /><br />
      <input className="form-control" type="number"
        value={person.age}
        onChange={(e) => setPerson({ ...person,
                                     age: parseInt(e.target.value) })}
      />
      <hr/>
    </div>
  );
}

