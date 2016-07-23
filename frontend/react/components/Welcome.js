import React, { Component } from 'react'
import reactCSSModules from 'react-css-modules'
import welcomeHAMLStyles from '../../../app/assets/stylesheets/shared-styles.css'

class App extends Component {
  render() {
    return(
      <div styleName='i-am-global'>Hello, React!</div>
    )
  }
}

export default reactCSSModules(App, welcomeHAMLStyles)
