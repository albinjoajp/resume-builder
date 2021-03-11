import React, { useContext } from 'react'
import classes from './Template.module.css'
import { Context } from '../../../context/Context'

function Education() {
  const { resumeData } = useContext(Context)

  let title
  if (resumeData.education && Object.keys(resumeData.education).length === 0) {
    title = ''
  } else {
    title = (
      <h3>
        <strong>Education</strong>
      </h3>
    )
  }

  return (
    <div className={classes.professionalResume}>
      <div className="">
        {title}
        <p>
          <strong>{resumeData.education.institution}</strong>{' '}
        </p>
        <p>
          {resumeData.education.major} {resumeData.education.gradYear}
        </p>
        <p>
          <strong>{resumeData.education.institution2}</strong>{' '}
        </p>
        <p>
          {resumeData.education.major2} {resumeData.education.gradYear2}
        </p>
      </div>
    </div>
  )
}

export default Education
