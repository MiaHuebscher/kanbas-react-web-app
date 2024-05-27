export default function AssignmentEditor() {
    return (
    <div id="wd-assignments-editor" className="mt-4 mb-4 ms-4">
      <div className="mb-4 row">
        <label htmlFor="wd-name"
              className="col-form-label">
              Assignment Name
        </label>
        <div>
          <input type="text" className="form-control"
            id="wd-name" placeholder="Assignment Name" />
        </div>
      </div>
      <div className="mb-4 form-group">
        <textarea id="wd-description"
          className="form-control"
          rows={10}
          placeholder="Assignment Description...">
          </textarea>
      </div>
      <div className="float-end mb-4 row">
        <label htmlFor="wd-points"
                className="col-sm-2 col-form-label">
                Points
          </label>
          <div className="col-sm-10">
            <input type="number" className="form-control"
              id="wd-points" defaultValue="100" />
          </div>
      </div>
      <br /><br /><br />
      <div className="float-end mb-4 row">
        <label htmlFor="wd-group"
                className="col-sm-3 col-form-label">
                Assignment Group
          </label>
          <div className="col-sm-9">
            <select className="form-select"
                  id="wd-group">
                  <option selected value="ASSIGNMENTS">
                    ASSIGNMENTS</option>
                  <option value="QUIZZES">QUIZZES</option>
                  <option value="EXAMS">EXAMS</option>
                  <option value="PROJECT">PROJECT</option>
            </select>
          </div>
      </div>
      <br /><br /><br /><br />
      <div className="float-end mb-4 row">
        <label htmlFor="wd-display-grade-as"
                className="col-sm-3 col-form-label">
                Display Grade as
          </label>
          <div className="col-sm-9">
            <select className="form-select"
                  id="wd-display-grade-as">
                  <option selected value="Percentage">Percentage</option>
                  <option value="Letter">Letter</option>
            </select>
          </div>
      </div>
      <br /><br /><br /><br /><br />
      <div className="float-center mb-4 ms-4 me-4 row">
        <label htmlFor="wd-submission-type"
                className="ml-2 col-sm-4 col-form-label">
                Submission Type
          </label>
          <div className="pr-4 pt-4 col-sm-8 border border-dark rounded">
            <select className="form-select"
                  id="wd-display-grade-as">
                  <option selected value="Online">Online</option>
                  <option value="In Class">In Class</option>
            </select>
            <br />
            <div className="pb-2">
              <label className="fw-bold">Online Entry Options</label><br />
              <div className="pb-2 pt-2">
                <input type="checkbox" name="check-entry" id="wd-text-entry"
                  className="m-2"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br />
              </div>
              <div className="pb-2">
                <input type="checkbox" name="check-entry" id="wd-website-url"
                  className="m-2"/>
                <label htmlFor="wd-website-url">Website URL</label>
              </div>
              <div className="pb-2">
                <input type="checkbox" name="check-entry" id="wd-media-recordings"
                  className="m-2"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label>
              </div>
              <div className="pb-2">
                <input type="checkbox" name="check-entry" id="wd-student-annotation"
                  className="m-2"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label>
              </div>
              <div className="pb-2">
                <input type="checkbox" name="check-entry" id="wd-file-upload"
                  className="m-2"/>
                <label htmlFor="wd-file-upload">File Upload</label>
              </div>
            </div>
          </div>  
      </div><br /><br /><br />
      <div className="float-center mb-4 ms-4 me-4 row">
        <label htmlFor="wd-assign"
                className="ml-2 col-sm-4 col-form-label">
                Assign
          </label>
          <div className="pr-4 pt-4 col-sm-8 border border-dark rounded">
            <label htmlFor="wd-assign-to" className="fw-bold">
              Assign to</label><br />
            <input type="text" id="wd-assign-to" 
              className="form-control mt-2"
              placeholder="Everyone"></input><br />
            <label htmlFor="wd-due-date" className="fw-bold">
              Due</label><br />
            <input type="datetime-local" id="wd-due-date" 
              className="form-control mt-2">
            </input>
            <div className="mt-4">
              <div className="float-start">
                <label htmlFor="wd-available-from" className="fw-bold">
                  Available From</label><br />
                <input type="datetime-local" id="wd-available-from" 
                  className="form-control mt-2 mb-4">
                </input>
              </div>
              <div className="float-end">
                <label htmlFor="wd-available-from" className="fw-bold">
                  Until</label><br />
                <input type="datetime-local" id="wd-available-from" 
                  className="form-control mt-2 mb-4">
                </input>
              </div>
            </div>
          </div>  
      </div>
      <hr />
      <div className="float-end">
        <button className="btn btn-light">Cancel</button> <button className="btn btn-danger">Save</button>
      </div>
      <br /><br />


    </div>
  );
}
  