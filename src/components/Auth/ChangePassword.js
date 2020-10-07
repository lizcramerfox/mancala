import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { changePassword } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

class ChangePassword extends Component {
  constructor () {
    super()

    this.state = {
      oldPassword: '',
      newPassword: '',
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  goBack = () => {
    this.props.history.goBack()
  }

  onChangePassword = event => {
    event.preventDefault()

    const { msgAlert, history, user } = this.props

    changePassword(this.state, user)
      .then(() => msgAlert({
        heading: 'Change Password Success',
        message: messages.changePasswordSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ oldPassword: '', newPassword: '' })
        msgAlert({
          heading: 'Change Password Failed with error: ' + error.message,
          message: messages.changePasswordFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { oldPassword, newPassword } = this.state

    return (
      <div className="auth">
        <h3>Change Password</h3>
        <form onSubmit={this.onChangePassword}>
          <div className="form-element">
            <label className="form-label">Old password</label>
            <input
              className="text-input"
              required={true}
              type="password"
              name="oldPassword"
              id="oldPassword"
              value={oldPassword}
              placeholder="Old Password"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-element">
            <label className="form-label">New Password</label>
            <input
              className="text-input"
              required={true}
              type="password"
              name="newPassword"
              id="newPassword"
              value={newPassword}
              placeholder="New Password"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-element form-button">
            <input
              type="submit"
              value="Submit"
            />
            <button
              onClick={this.goBack}
              value="Cancel"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(ChangePassword)
