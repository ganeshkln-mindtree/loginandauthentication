import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = { submitted: false, formData: {} };
  componentDidUpdate = () => {
    if (this.props.loggedIn) {
      this.props.history.push('/dashboard');
    }
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ submitted: true });

    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }
    this.setState({ formData: formData });

    if (formData['emailaddress'] && formData['password'])
      this.props.AuthenticateUser(formData);
  };
  render() {
    const { submitted, formData } = this.state;

    return (
      <form onSubmit={this.handleSubmit} noValidate>
        {this.props.loginFailed && (
          <div className="alert alert-danger" role="alert">
            {'Please check your username and password '}
          </div>
        )}
        {this.props.accountCreated && (
          <div className="alert alert-success" role="alert">
            {'Account created Successfully. Please login now '}
          </div>
        )}

        <div
          className={
            'form-group' +
            (submitted && !formData['emailaddress']
              ? ' alert alert-danger'
              : '')
          }
        >
          <label for="emailaddress">Email address</label>
          <input
            type="email"
            className="form-control"
            id="emailaddress"
            ref="emailaddress"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div
          className={
            'form-group' +
            (submitted && !formData.password ? ' alert alert-danger' : '')
          }
        >
          <label for="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            ref="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group form-check">
          <Link to="/sign-up">{'New User'} </Link>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default Login;
