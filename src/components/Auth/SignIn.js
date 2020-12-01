import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'
import './auth.module.scss'

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  goBack = event => {
    event.preventDefault()
    this.props.history.goBack()
  }

  onSignIn = event => {
    event.preventDefault()

    const { msgAlert, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Sign In Success',
        message: messages.signInSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ email: '', password: '' })
        msgAlert({
          heading: 'Sign In Failed',
          message: messages.signInFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { email, password } = this.state

    return (
      <div className="auth">
        <div className="title">
          <h3>Sign In</h3>
        </div>
        <form onSubmit={this.onSignIn}>
          <div className="form-element">
            <label className='form-label'>Email</label>
            <input
              className="text-input"
              required={true}
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Enter your email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-element">
            <label className="form-label">Password</label>
            <input
              className="text-input"
              required={true}
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-element form-buttons">
            <input
              className="button"
              onClick={this.goBack}
              type="submit"
              value="Cancel"
            />
            <input
              className="button"
              onClick={this.onSignIn}
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SignIn)
