import React, { useContext } from 'react'
import classes from './Template.module.css'
import { Context } from '../../../context/Context'

function PersonalInfo() {
  const { resumeData } = useContext(Context)

  let divider
  if (resumeData.personalInfo && Object.keys(resumeData.personalInfo).length > 0) {
    divider = <hr className={classes.dividerRight} />
  } else {
    divider = ''
  }

  return resumeData.personalInfo ? (
    <div>
      <div className={classes.headerResume}>
        <div className={classes.contentHeader}>
          <h1 className={classes.h1Name}>{resumeData.personalInfo.name}</h1>
          <p>
            {resumeData.personalInfo.address}
            <br />
            {resumeData.personalInfo.phone}
            <br />
            {resumeData.personalInfo.email}
          </p>

          {divider}
        </div>
      </div>
    </div>
  ) : null
}

export default PersonalInfo
