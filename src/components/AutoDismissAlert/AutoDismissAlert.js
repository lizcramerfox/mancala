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
    document.removeEventListener('mousedown', this.handleClick) 
  }
    

  handleClick = (event) => {
    if (this.node.contains(event.target)) {
      return;
    }
    this.handleClose()
  }

  componentDidMount () {
    document.addEventListener('mousedown', this.handleClick)
    this.timer = setTimeout(this.handleClose, 5000)
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
          ref={node => this.node = node}
          onClick={this.handleClick}
        >
          {alertJsx}
        </div>
      )
    }
    return null
  }
}

export default AutoDismissAlert
