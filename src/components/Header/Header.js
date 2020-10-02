import React, { Fragment } from 'react'

const authenticatedOptions = (
  <Fragment>
    <a href="#change-password">Change Password</a>
    <a href="#sign-out">Sign Out</a>
    <a href="#sign-out">Sign Out</a>
    <a href="#games-create">Start a New Game</a>
    <a href="#games">View All Games</a>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <a href="#sign-up">Sign Up</a>
    <a href="#sign-in">Sign In</a>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <a href="/">Home</a>
  </Fragment>
)

const Header = ({ user }) => (
  <header>
    <h5>Mancala</h5>
    <nav>
      { user && <span> Welcome, {user.email}</span> }
      { alwaysOptions }
      { user ? authenticatedOptions : unauthenticatedOptions }
    </nav>
  </header>
)

export default Header
