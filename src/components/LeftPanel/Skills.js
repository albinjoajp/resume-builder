import React, { useState, useContext } from 'react'
import { Context } from '../../context/Context'
import { Multiselect } from 'multiselect-react-dropdown'
import './LeftPanel.module.css'

let options = [
  { name: 'PHP', id: 'php' },
  { name: 'JavaScript', id: 'js' },
  { name: 'Python', id: 'py' },
]
function Skills() {
  const { updateSkills, resumeData } = useContext(Context)
  const [btnText, setBtnText] = useState('Add')
  const [skills, setskills] = useState(resumeData.skills)
  const handleSubmit = (event) => {
    event.preventDefault()
    updateSkills(skills)
    setBtnText('Update')
  }
  const onSelect = (data) => {
    setskills(data)
  }
  const onRemove = (selectedList, removedItem) => {
    setskills(selectedList)
  }
  return (
    <div className="">
      <h2>Skills</h2>
      <form className="formStyle" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Multiselect options={options} displayValue="name" onSelect={onSelect} selectedValues={skills} onRemove={onRemove} />

        <button type="submit" class="btn btn-success" style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}>
          {btnText}
        </button>
      </form>
    </div>
  )
}

export default Skills
