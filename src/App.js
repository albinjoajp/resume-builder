import React from 'react'
import Header from './components/LeftPanel/Header'
import RightPanel from './components/RightPanel/RightPanel'
import './styles.css'
import ContextProvider from './context/Context'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import './components/LeftPanel/LeftPanel.module.css'

function Templates() {
  return (
    <div className="left">
      <hr className="hr2" />
      <div className="cards">
        <div className="templateCard">
          <Link to="/person/personal-info">
            <button type="button" className="btn btn-warning">
              Click here to build your resume now
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <ContextProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Templates} exact />
            <Route path="/person" component={Header} />
          </Switch>
        </BrowserRouter>
        <RightPanel />
      </ContextProvider>
    </div>
  )
}

export default App
