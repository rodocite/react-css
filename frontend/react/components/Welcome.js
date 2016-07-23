import React, { Component } from 'react'
import reactCSSModules from 'react-css-modules'
import welcomeHAMLStyles from '../../../app/assets/stylesheets/application.css'

class App extends Component {
  render() {
    return(
      <div styleName='react-style'>Hello, React!</div>
    )
  }
}

export default reactCSSModules(App, welcomeHAMLStyles)
