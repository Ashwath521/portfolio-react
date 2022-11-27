import './App.css'
import Header from './Component/Header/Index'
import React from 'react'
import About from './Component/About/Index'

function App() {
  const githubLink = 'https://in.linkedin.com/in/ashwath-m-n-9278421a0'
  const linkedInLink = 'https://in.linkedin.com/in/ashwath-m-n-9278421a0'
  const twitterLink = 'https://twitter.com/Ashwath14234744?t=oBfr0e7chsH3WyA8csSHqA&s=09'
  return (
    <div className="App">
      <Header githubLink={githubLink} linkedInLink={linkedInLink} twitterLink={twitterLink} />
      <About />
    </div>
  )
}

export default App
