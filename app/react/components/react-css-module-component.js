// CSS Modules will localize the style to the component
// The classes will be using BEM naming convention (see webpack config)
import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import sharedStyles from './../../../dist/shared-styles.css'

class ReactCSSModule extends Component {
  render() {
    return (
      <div styleName='shared-react'>I'm a React Component using CSS modules</div>
    )
  }
}

export default CSSModules(ReactCSSModule, sharedStyles)
