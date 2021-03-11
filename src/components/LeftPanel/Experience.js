import React, { useState, useContext, Fragment } from 'react'
import classes from './LeftPanel.module.css'
import { Context } from '../../context/Context'
import addLogo from './../../assets/plus.png'

function Experience() {
  const { resumeData, updateProfessionalData } = useContext(Context)
  const initialValue = resumeData.experience.company1 ? 'Update' : 'Add'
  const [btnText, setBtnText] = useState(initialValue)
  const [addMoreExperience, setMoreExperience] = useState(false)
  let [experience, setExperience] = useState({
    company1: resumeData.experience.company1,
    position1: resumeData.experience.position1,
    start1: resumeData.experience.start1,
    end1: resumeData.experience.end1,
    company2: resumeData.experience.company2,
    position2: resumeData.experience.position2,
    start2: resumeData.experience.start2,
    end2: resumeData.experience.end2,
  })

  const handleInputChange = (event, key) => {
    const value = event.target.value
    setExperience((prevProps) => ({
      ...prevProps,
      [key]: value,
    }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    updateProfessionalData(experience)
    setBtnText('Update')
    setMoreExperience(false)
  }
  const addExperience = () => {
    setMoreExperience(true)
  }
  return (
    <div>
      <div className={classes.headerDiv}>
        <h2>Experience</h2>
        <p onClick={addExperience}>
          <img src={addLogo} className={classes.addImage} />
        </p>
      </div>
      <form className={classes.formStyle} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <h4>Company 1</h4>

        <div className="input-group mb-3">
          <input
            id="company1"
            name="company1"
            defaultValue={experience.company1}
            type="text"
            onBlur={(e) => {
              handleInputChange(e, 'company1')
            }}
            className="form-control"
            placeholder="Company"
            aria-label="Company"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3">
          <input
            id="position1"
            name="position1"
            defaultValue={experience.position1}
            type="text"
            onBlur={(e) => {
              handleInputChange(e, 'position1')
            }}
            className="form-control"
            placeholder="Position"
            aria-label="Position"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3">
          <input
            id="start1"
            name="start1"
            defaultValue={experience.start1}
            type="number"
            onBlur={(e) => {
              handleInputChange(e, 'start1')
            }}
            className="form-control"
            placeholder="Start Year"
            aria-label="Start Year"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3">
          <input
            id="end1"
            name="end1"
            defaultValue={experience.end1}
            type="number"
            onBlur={(e) => {
              handleInputChange(e, 'end1')
            }}
            className="form-control"
            placeholder="End Year"
            aria-label="End Year"
            aria-describedby="basic-addon1"
          />
        </div>

        {addMoreExperience || resumeData.experience.company2 ? (
          <Fragment>
            <hr />

            <h4>Company 2</h4>

            <div className="input-group mb-3">
              <input
                id="company2"
                name="company2"
                defaultValue={experience.company2}
                type="text"
                onBlur={(e) => {
                  handleInputChange(e, 'company2')
                }}
                className="form-control"
                placeholder="Company"
                aria-label="Company"
                aria-describedby="basic-addon1"
              />
            </div>

            <div className="input-group mb-3">
              <input
                id="position2"
                name="position2"
                defaultValue={experience.position2}
                type="text"
                onBlur={(e) => {
                  handleInputChange(e, 'position2')
                }}
                className="form-control"
                placeholder="Position"
                aria-label="Position"
                aria-describedby="basic-addon1"
              />
            </div>

            <div className="input-group mb-3">
              <input
                id="start2"
                name="start2"
                defaultValue={experience.start2}
                type="number"
                onBlur={(e) => {
                  handleInputChange(e, 'start2')
                }}
                className="form-control"
                placeholder="Start Year"
                aria-label="Start Year"
                aria-describedby="basic-addon1"
              />
            </div>

            <div className="input-group mb-3">
              <input
                id="end2"
                name="end2"
                defaultValue={experience.end2}
                type="number"
                onBlur={(e) => {
                  handleInputChange(e, 'end2')
                }}
                className="form-control"
                placeholder="End Year"
                aria-label="End Year"
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

export default Experience
