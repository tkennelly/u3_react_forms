import { useState } from 'react'
import './App.css'

const App = () => {
  const initialState = {
    issueType: '',
    subject: '',
    message: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formState)
    setFormState(initialState)
  }

  const handleChange = (e) => {
    setFormState({...formState, [e.target.id]: e.target.value})
  }

  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="issueType">Type of Issue:</label>
    <select id="issueType" 
    onChange={handleChange} value={formState.issueType}>
      <option value="default">Select Issue</option>
      <option value="outage">Service Outage</option>
      <option value="billing">Billing</option>
      <option value="cancel">Cancel Service</option>
    </select>
    <label htmlFor="subject">Subject:</label>
    <input type="text" id="subject" 
    onChange={handleChange} value={formState.subject}/>
    <label htmlFor="message">Message</label>
    <textarea id="message" cols="30" rows="10" 
    onChange={handleChange} value={formState.message}></textarea>
    <button type="submit">Send</button>
  </form>
  )
}

export default App
