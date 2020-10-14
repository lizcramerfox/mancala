import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import { Redirect } from 'react-router'

import { signUp, signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'


class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      showModal: true,
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  goBack = event => {
    event.preventDefault()
    this.props.history.goBack()
  }

  onSignUp = event => {
    event.preventDefault()

    const { msgAlert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Success',
        message: messages.signUpSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ email: '', password: '', passwordConfirmation: '' })
        msgAlert({
          heading: 'Failed',
          message: messages.signUpFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    console.log(this.state)
    const { email, password, passwordConfirmation } = this.state

    const classNames = 'auth'

    return (
      <div className={classNames}>
        <div className="title">
          <h3>Sign Up</h3>
        </div>
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
          <div className="form-element form-button">
            <input
              className="button"
              onClick={this.goBack}
              type="submit"
              value="Cancel"
            />
            <input
              className="button"
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
