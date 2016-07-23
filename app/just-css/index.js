import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import regularStyle from './regular-html.css'

// This is the hacky part
// Would need to clean up the index.js this guy generates or just create a vanilla js parser for the manifest
class ReactCSSModule extends Component {
  render() {
    return (
      <div>
        <div styleName="regular-style">Parse CSS</div>
        <div styleName="shared-react">Parse CSS</div>
      </div>
    )
  }
}

export default CSSModules(ReactCSSModule, regularStyle)
