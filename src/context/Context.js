import React, { createContext, useState, useEffect } from 'react'

export const Context = createContext()

const ContextProvider = (props) => {
  const [resumeData, setResumeData] = useState(
    JSON.parse(localStorage.getItem('dataLocal')) || {
      personalInfo: {},
      experience: {},
      education: {},
      skills: [],
    }
  )

  function updatePersonalData(data) {
    setResumeData({ ...resumeData, personalInfo: data })
  }

  function updateProfessionalData(data) {
    setResumeData({ ...resumeData, experience: data })
  }

  function updateEducationData(data) {
    setResumeData({ ...resumeData, education: data })
  }

  function updateSkills(data) {
    // debugger
    setResumeData({ ...resumeData, skills: data })
  }

  useEffect(() => {
    localStorage.setItem('dataLocal', JSON.stringify(resumeData))
  }, [resumeData])
  return (
    <Context.Provider
      value={{
        resumeData,
        updatePersonalData,
        updateProfessionalData,
        updateEducationData,
        updateSkills,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider
