import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMsg: ''}

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'

    const response = await fetch(url, option)
    const data = await response.json()

    if (response.ok === true) {
      this.successFullyLogin()
    } else {
      console.log(data)
      this.unSuccessfullyLogin(data.error_msg)
    }
  }

  successFullyLogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  unSuccessfullyLogin = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  getUserName = event => {
    this.setState({username: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {showSubmitError, errorMsg} = this.state

    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <form className="form-element" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="nextWave-icon"
          />

          <div className="username-container">
            <label htmlFor="username" className="label-element">
              USERNAME
            </label>
            <input
              id="username"
              className="input-element"
              placeholder="Username"
              onChange={this.getUserName}
            />
          </div>

          <div className="username-container">
            <label htmlFor="password" className="label-element">
              PASSWORD
            </label>
            <input
              id="password"
              className="input-element"
              placeholder="Password"
              onChange={this.getPassword}
              type="password"
            />
          </div>

          <button className="login-button" type="submit">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
