import React, { Component } from 'react'
import ReactModal from 'react-modal'
import './AutoDismissAlert.scss'

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
    this.timer = setTimeout(this.handleClose, 5000)
  }

  componentWillUnmount () {
    clearTimeout(this.timer)
  }

  render () {
    const { variant, heading, message } = this.props

    const alertJsx = (
      <div>
        <div className="alert-heading">
          {heading}
        </div>
        <div className="alert-message">
          {message}
        </div>
      </div>
    )

    if (this.state.showModal) {
      return (
        <ReactModal
          ariaHideApp={true}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          onRequestClose={this.handleClose}
          isOpen={this.state.showModal}
          className={['alert', variant].join(' ')}
        >
          {alertJsx}
        </ReactModal>
      )
    }
    return null
  }
}

export default AutoDismissAlert
