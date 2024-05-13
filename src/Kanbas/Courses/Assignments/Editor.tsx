export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name </label>
        <input id="wd-name" value="A1 - ENV + HTML" />
        <br />
        <br />
        <textarea id="wd-description" cols={50} rows={10}>
          The assignment is available online. 
          Submit a link to the landing page of your Web application running on Netlify.
          The landing page should include the following: Your full name and section, 
          Links to each of the lab assignments, Link to the Kanbas application,
          Links to all relevant source code repositories. The Kanbas application should 
          include a link to navigate back to the landing page.
        </textarea>
        <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" type="number" placeholder="100" />
          </td>
        </tr>
        <br/>
        {/* Complete on your own */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
                <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAM">EXAM</option>
                <option value="PROJECT">PROJECT</option>
            </select>
          </td>
        </tr>
        <br/>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
                <option selected value="Percentage">Percentage</option>
                <option value="Letter">Letter</option>
            </select>
          </td>
        </tr>
        <br/>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
                <option selected value="Online">Online</option>
                <option value="In Class">In Class</option>
            </select>
          </td>
        </tr>
        <br/>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <label>Online Entry Options</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left">
              <input type="checkbox"
                    name="check-entry" id="wd-text-entry"/>
              <label htmlFor="wd-text-entry">Text Entry</label><br/>
              <input type="checkbox"
                    name="check-entry" id="wd-website-url"/>
              <label htmlFor="wd-website-url">Website URL</label><br/>
              <input type="checkbox"
                    name="check-entry" id="wd-media-recordings"/>
              <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
              <input type="checkbox"
                    name="check-entry" id="wd-student-annotation"/>
              <label htmlFor="wd-student-annotation">Student Annotation</label><br />
              <input type="checkbox"
                    name="check-entry" id="wd-file-upload"/>
              <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr> <br />
        <tr>
          <td align="right">
            Assign
          </td>
          <td align="left">
            <label htmlFor="wd-assign-to">Assign to</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input id="wd-assign-to" placeholder="Everyone" />
          </td>   
        </tr>
        <br />
        <tr>
          <td></td>
          <td align="left" valign="top">
            <label htmlFor="wd-due-date">Due</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type="date" id="wd-due-date" 
            defaultValue="2024-05-13"/>
          </td>   
        </tr>
        <br />
        <tr>
          <td></td>
          <td>
            <label htmlFor="wd-available-from">Available from  </label>
            &emsp;&nbsp;
            <label htmlFor="wd-available-until">Until</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left">
            <input type="date" id="wd-available-from" 
              defaultValue="2024-05-06"/>
            &nbsp;
            <input type="date" id="wd-available-until" 
              defaultValue="2024-05-20"/>
          </td>
        </tr>
      </table>
      <hr />
      <div>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;
        <button>Cancel</button> <button>Save</button>
      </div>
    </div>
  );
}
  