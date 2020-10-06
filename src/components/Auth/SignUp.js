import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'


class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { msgAlert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Sign Up Success',
        message: messages.signUpSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ email: '', password: '', passwordConfirmation: '' })
        msgAlert({
          heading: 'Sign Up Failed with error: ' + error.message,
          message: messages.signUpFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { email, password, passwordConfirmation } = this.state

    return (
      <div className="auth">
        <h3>Sign Up</h3>
        <form onSubmit={this.onSignUp}>
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
            <label className='form-label'>Password</label>
            <input
              className="text-input"
              required={true}
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Enter password"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-element">
            <label className='form-label'>Confirm Password</label>
            <input
              className="text-input"
              required={true}
              type="password"
              name="passwordConfirmation"
              id="passwordConfirmation"
              value={passwordConfirmation}
              placeholder="Confirm password"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-element submit-button">
            <input
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>

    )
  }
}

export default withRouter(SignUp)
