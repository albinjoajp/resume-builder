import React, { useState, useContext, Fragment } from 'react'
import classes from './LeftPanel.module.css'
import { Context } from '../../context/Context'
import addLogo from './../../assets/plus.png'

function Education() {
  const { resumeData, updateEducationData } = useContext(Context)
  const initialValue = resumeData.education.institution ? 'Update' : 'Add'
  const [btnText, setBtnText] = useState(initialValue)
  const [addMoreEducation, setMoreEducation] = useState(false)
  let [education, setEducation] = useState({
    institution: resumeData.education.institution,
    major: resumeData.education.major,
    gradYear: resumeData.education.gradYear,
    institution2: resumeData.education.institution2,
    major2: resumeData.education.major2,
    gradYear2: resumeData.education.gradYear2,
  })

  const handleInputChange = (event, key) => {
    const value = event.target.value
    setEducation((prevProps) => ({
      ...prevProps,
      [key]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    updateEducationData(education)
    setMoreEducation(false)
    setBtnText('Update')
  }

  const moreEducation = () => {
    setMoreEducation(true)
  }

  return (
    <div className="">
      <div className={classes.headerDiv}>
        <h2>Education</h2>
        <p onClick={moreEducation}>
          <img src={addLogo} className={classes.addImage} />
        </p>
      </div>
      <form className={classes.formStyle} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <h4>Education 1</h4>
        <div className="input-group mb-3">
          <input
            id="institution"
            name="institution"
            defaultValue={education.institution}
            type="text"
            onBlur={(e) => {
              handleInputChange(e, 'institution')
            }}
            className="form-control"
            placeholder="Institution"
            aria-label="Institution"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <input
            id="major"
            name="major"
            defaultValue={resumeData.education.major}
            type="text"
            onBlur={(e) => {
              handleInputChange(e, 'major')
            }}
            className="form-control"
            placeholder="Major"
            aria-label="Major"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <input
            id="gradYear"
            name="gradYear"
            defaultValue={resumeData.education.gradYear}
            type="number"
            onBlur={(e) => {
              handleInputChange(e, 'gradYear')
            }}
            className="form-control"
            placeholder="Graduation Year"
            aria-label="Graduation Year"
            aria-describedby="basic-addon1"
          />
        </div>

        {addMoreEducation || resumeData.education.institution2 ? (
          <Fragment>
            <hr />

            <h4>Education 2</h4>

            <div className="input-group mb-3">
              <input
                id="institution2"
                name="institution2"
                defaultValue={resumeData.education.institution2}
                type="text"
                onBlur={(e) => {
                  handleInputChange(e, 'institution2')
                }}
                className="form-control"
                placeholder="Institution"
                aria-label="Institution"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <input
                id="major2"
                name="major2"
                defaultValue={resumeData.education.major2}
                type="text"
                onBlur={(e) => {
                  handleInputChange(e, 'major2')
                }}
                className="form-control"
                placeholder="Major"
                aria-label="Major"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <input
                id="gradYear2"
                name="gradYear2"
                defaultValue={resumeData.education.gradYear2}
                type="number"
                onBlur={(e) => {
                  handleInputChange(e, 'gradYear2')
                }}
                className="form-control"
                placeholder="Graduation Year"
                aria-label="Graduation Year"
                aria-describedby="basic-addon1"
              />
            </div>
          </Fragment>
        ) : null}
        <button type="submit" className="btn btn-success" style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}>
          {btnText}
        </button>
      </form>
    </div>
  )
}

export default Education
