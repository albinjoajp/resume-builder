import React, { useContext } from 'react'
import classes from './Template.module.css'
import { Context } from '../../../context/Context'

function Experience() {
  const { resumeData } = useContext(Context)

  let title
  if (resumeData.experience && Object.keys(resumeData.experience).length < 3) {
    title = ''
  } else {
    title = (
      <h3>
        <strong>Experience</strong>
      </h3>
    )
  }

  return (
    <div className={classes.professionalResume}>
      <div className="">
        {title}
        <p>
          <strong>{resumeData.experience.company1}</strong>
        </p>
        <p>
          {resumeData.experience.position1} {resumeData.experience.start1} {resumeData.experience.end1}
        </p>
        <p>
          <strong>{resumeData.experience.company2}</strong>
        </p>
        <p>
          {resumeData.experience.position2} {resumeData.experience.start2} {resumeData.experience.end2}
        </p>
      </div>
    </div>
  )
}

export default Experience
