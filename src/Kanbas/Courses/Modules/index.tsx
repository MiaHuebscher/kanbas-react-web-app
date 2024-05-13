export default function Modules() {
    return (
      <div>
        {/* Collapse All button, View Progress button, etc. */}
        <button>Collapse All</button> <button>View Progress</button> 
        &nbsp;
        <select id="wd-select-one-publish">
            <option value="publish week 1">Publish Week 1</option>
            <option value="publish week 2">Publish Week 2</option>
            <option value="publish week 3">Publish Week 3</option>
            <option value="publish week 4">Publish Week 4</option>
            <option value="publish week 5">Publish Week 5</option>
            <option value="publish week 6">Publish Week 6</option>
            <option value="publish week 7">Publish Week 7</option>
            <option value="publish week 8">Publish Week 8</option>
            <option selected value="publish all">Publish All</option>
        </select> &nbsp;
        <button>+ Module</button>
        {/* Week 1, Lecture 1 Content */}
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                  <li className="wd-content-item">Creating a development environment</li>
                  <li className="wd-content-item">Creating a Web Application</li>
                  <li className="wd-content-item">Getting started with the 1st assignment</li>
                </ul>
              </li>
              <li className="wd-readings">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User Interfaces with HTML</li>
                </ul>
              </li>
              <li className="wd-slides">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to Web Development</li>
                  <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                  <li className="wd-content-item">Creating a React Application</li>
                  <li className="wd-content-item">Commit your source to GitHub.com</li>
                  <li className="wd-content-item">Delopying to Netlify</li>
                  <li className="wd-content-item">Delopying multiple branches in Netlify</li>
                </ul>
              </li>
              <li className="wd-evaluations">
                <span className="wd-title">Evaluations</span>
                <ul className="wd-content">
                  <li className="wd-content-item">A1</li>
                  <li className="wd-content-item">P</li>
                </ul>
              </li>
            </ul>
          </li>
          <br />
          {/* Week 1, Lecture 2 Content */}
          <li className="wd-lecture-two">
            <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                  <li className="wd-content-item">Keep wprking on assignment 1</li>
                  <li className="wd-content-item">Deploy the assignment to Netlify</li>
                </ul>
              </li>
              <li className="wd-readings">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User Interfaces with HTML</li>
                </ul>
              </li>
              <li className="wd-slides">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to HTML and the DOM</li>
                  <li className="wd-content-item">Formatting Web content with Headings and Paragraphs</li>
                  <li className="wd-content-item">Formatting content with Lists and Tables</li>
                  <li className="wd-content-item">Creating Web Forms</li>
                  <li className="wd-content-item">Navigating with Anchors</li>
                  <li className="wd-content-item">Embedding content with Iframes</li>
                  <li className="wd-content-item">Drawing with Scalable Vector Graphics</li> 
                </ul>
              </li>
              <li className="wd-evaluations">
                <span className="wd-title">Evaluations</span>
                <ul className="wd-content">
                  <li className="wd-content-item">A1</li>
                  <li className="wd-content-item">P</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  