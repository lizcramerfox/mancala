import React, { Component, Fragment } from 'react'
import './autoDismissAlert.module.scss'

class AutoDismissAlert extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showModal: true
    }
  }

  handleClose = () => {
    this.setState({ showModal: false })
  }

  componentDidMount () {
    this.timer = setTimeout(this.handleClose, 4000)
  }

  componentWillUnmount () {
    clearTimeout(this.timer)
  }

  render () {
    const { variant, heading, message } = this.props
    const classNames = ['alert', variant].join(' ')

    const alertJsx = (
      <Fragment>
        <div className="alert-heading">
          {heading}
        </div>
        <div className="alert-message">
          {message}
        </div>
      </Fragment>
    )

    if (this.state.showModal) {
      return (
        <div
          className={classNames}
          onRequestClose={this.handleClose}
          isOpen={this.state.showModal}
        >
          {alertJsx}
        </div>
      )
    }
    return null
  }
}

export default AutoDismissAlert
