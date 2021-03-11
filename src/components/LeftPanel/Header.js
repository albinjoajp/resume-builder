import React from 'react'
import PersonInfo from './PersonInfo'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import myClasses from './LeftPanel.module.css'

function Left() {
  return (
    <div className="left">
      <div>
        <Router>
          <div className={myClasses.topLeft}>
            <Link to="/person/personal-info">Info</Link>
            <Link to="/person/education">Education</Link>
            <Link to="/person/experience">Experience</Link>
            <Link to="/person/skills">Skills</Link>
          </div>
          <div>
            <hr className={myClasses.hr} />
            <div className={myClasses.formsSection}>
              <Switch>
                <Route path="/person/personal-info">
                  <PersonInfo />
                </Route>
                <Route path="/person/education">
                  <Education />
                </Route>
                <Route path="/person/experience">
                  <Experience />
                </Route>

                <Route path="/person/skills">
                  <Skills />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </div>
  )
}

export default Left
