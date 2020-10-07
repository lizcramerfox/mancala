import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import '../../index.scss'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../Auth/SignUp'
import SignIn from '../Auth/SignIn'
import SignOut from '../Auth/SignOut'
import ChangePassword from '../Auth/ChangePassword'
import GameCreate from '../Games/GameCreate'
import GameIndex from '../Games/GameIndex'
import GameShow from '../Games/GameShow'
import Home from '../Home/Home'


class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}

        {/* _____Authentication Routes for Users_____ */}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />

          {/* _____RESTful Routes for Games_____ */}
          <AuthenticatedRoute user={user} exact path='/' render={() => (
            <Home msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/games' render={() => (
            <GameIndex msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/games/:id' render={(data) => (
            <GameShow msgAlert={this.msgAlert} user={user} id={data.match.params.id}/>
          )} />
          <AuthenticatedRoute user={user} exact path='/games-create' render={() => (
            <GameCreate msgAlert={this.msgAlert} user={user} />
          )} />
        </main>
      </Fragment>

    )
  }
}

export default App
