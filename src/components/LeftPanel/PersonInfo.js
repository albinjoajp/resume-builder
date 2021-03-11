import React, { useContext, useState } from 'react'
import { Context } from '../../context/Context'
import './LeftPanel.module.css'

function PersonInfo() {
  const { resumeData, updatePersonalData } = useContext(Context)
  const initialValue = resumeData.personalInfo.name ? 'Update' : 'Add'
  const [btnText, setBtnText] = useState(initialValue)
  let [personalInfo, setPersonalInfo] = useState({
    name: resumeData.personalInfo.name,
    address: resumeData.personalInfo.address,
    phone: resumeData.personalInfo.phone,
    email: resumeData.personalInfo.email,
  })

  const handleInputChange = (event, key) => {
    const value = event.target.value
    setPersonalInfo((prevProps) => ({
      ...prevProps,
      [key]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    updatePersonalData(personalInfo)
    setBtnText('Update')
  }
  return (
    <div className="">
      <h2>Info</h2>
      <form className="formStyle" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            id="name"
            name="name"
            defaultValue={personalInfo.name}
            type="text"
            onBlur={(e) => {
              handleInputChange(e, 'name')
            }}
            className="form-control"
            placeholder="Full Name"
            aria-label="Full Name"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3">
          <input
            id="email"
            name="email"
            defaultValue={personalInfo.email}
            type="email"
            onBlur={(e) => {
              handleInputChange(e, 'email')
            }}
            className="form-control"
            placeholder="E-mail"
            aria-label="E-mail"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3">
          <input
            id="address"
            name="address"
            defaultValue={personalInfo.address}
            type="text"
            onBlur={(e) => {
              handleInputChange(e, 'address')
            }}
            className="form-control"
            placeholder="Address"
            aria-label="Address"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3">
          <input
            id="phone"
            name="phone"
            defaultValue={personalInfo.phone}
            type="number"
            onBlur={(e) => {
              handleInputChange(e, 'phone')
            }}
            className="form-control"
            placeholder="Phone"
            aria-label="Phone"
            aria-describedby="basic-addon1"
          />
        </div>

        <button type="submit" className="btn btn-success" style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}>
          {btnText}
        </button>
      </form>
    </div>
  )
}

export default PersonInfo
