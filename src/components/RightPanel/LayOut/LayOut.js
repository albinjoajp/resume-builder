import React from 'react'
import PersonalInfo from './PersonalInfo'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'

function LayOut() {
  return (
    <div className="">
      <div size="A4" className="page">
        <PersonalInfo />
        <Experience />
        <Education />
        <Skills />
      </div>
    </div>
  )
}

export default LayOut
