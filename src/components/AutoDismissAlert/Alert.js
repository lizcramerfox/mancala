import React, { Component } from 'react'
import './AutoDismissAlert.scss'

class Alert extends Component {
  render () {
    const { variant, heading, message } = this.props
    return (
        <div className="alert" variant={variant}>
          <div className="alert-heading">
            {heading}
          </div>
          <div className="alert-body">{message}</div>
        </div>
    )
  }
}

export default Alert
