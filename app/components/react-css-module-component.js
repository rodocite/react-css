// CSS Modules will localize the style to the component
// The classes will be using BEM naming convention (see webpack config)
import React, { Component } from 'react'
import { render } from 'react-dom'
import CSSModules from 'react-css-modules';
import globalStyles from '../../dist/global-styles.css'

class ReactCSSModule extends Component {
  render() {
    return (
      <div styleName='global-style'>I'm a React Component extended with a CSS module to keep styles local</div>
    )
  }
}

export default CSSModules(ReactCSSModule, globalStyles)
