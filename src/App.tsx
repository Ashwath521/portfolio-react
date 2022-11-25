import './App.css'
import Header from './Component/Header/Index'
import React from 'react'

function App() {
  const githubLink = 'https://in.linkedin.com/in/ashwath-m-n-9278421a0'
  const linkedInLink = 'https://in.linkedin.com/in/ashwath-m-n-9278421a0'
  return (
    <div className="App">
      <Header githubLink={githubLink} linkedInLink={linkedInLink} />
    </div>
  )
}

export default App
