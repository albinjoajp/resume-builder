import React, { useContext } from 'react'
import classes from './Template.module.css'
import { Context } from '../../../context/Context'

function Skills() {
  const { resumeData } = useContext(Context)

  let title
  if (resumeData.skills && resumeData.skills.length === 0) {
    title = ''
  } else {
    title = (
      <h3>
        <strong>Skills</strong>
      </h3>
    )
  }

  return (
    <div className={classes.professionalResume}>
      <div className="">
        {title}
        <ul>
          {resumeData.skills.map((skill, index) => {
            return <li key={index}>{skill.name}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Skills
