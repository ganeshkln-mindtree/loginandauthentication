import React, { Component } from 'react';

class Signup extends Component {
  state = { submitted: false, formData: {} };
  componentDidUpdate = () => {
    if (this.props.accountCreated) {
      this.props.history.push('/login');
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

    if (formData['email'] && formData['username'] && formData['password'])
      this.props.createUser(formData);
  };

  render() {
    const { submitted, formData } = this.state;
    return (
      <form onSubmit={this.handleSubmit} noValidate>
        {this.props.accountCreateFailed && (
          <div className="alert alert-danger" role="alert">
            {'Please check your username. It is already registered with us'}
          </div>
        )}
        <div className="form-row">
          <div
            className={
              'form-group col-md-6' +
              (submitted && !formData['email'] ? ' alert alert-danger' : '')
            }
          >
            <label for="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              ref="email"
              placeholder="Email"
            />
          </div>
          <div
            className={
              'form-group col-md-6' +
              (submitted && !formData['username'] ? ' alert alert-danger' : '')
            }
          >
            <label for="username">User Name</label>
            <input
              type="username"
              className="form-control"
              id="username"
              ref="username"
              placeholder="UserName"
            />
          </div>
          <div
            className={
              'form-group col-md-6' +
              (submitted && !formData['password'] ? ' alert alert-danger' : '')
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
        </div>
        <div className="form-row">
          <div
            className={
              'form-group col-md-6' +
              (submitted && !formData['firstName'] ? ' alert alert-danger' : '')
            }
          >
            <label for="email">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              ref="firstName"
              placeholder="First Name"
            />
          </div>
          <div
            className={
              'form-group col-md-6' +
              (submitted && !formData['lastName'] ? ' alert alert-danger' : '')
            }
          >
            <label for="email">last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              ref="lastName"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="form-row">
          <div
            className={
              'form-group col-md-6' +
              (submitted && !formData['gender'] ? ' alert alert-danger' : '')
            }
          >
            <div className="form-row">
              <label for="gender">Gender</label>
            </div>
            <div className="form-check form-check-inline">
              <label>
                <input
                  type="radio"
                  className="form-check-input"
                  id="gender"
                  ref="gender"
                  value="male"
                  checked
                />
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <label>
                <input
                  type="radio"
                  className="form-check-input"
                  id="gender"
                  ref="gender"
                  value="female"
                />
                Female
              </label>
            </div>
          </div>
          <div
            className={
              'form-group col-md-4' +
              (submitted && !formData['country'] ? ' alert alert-danger' : '')
            }
          >
            <label for="country">Country</label>
            <select id="country" ref="country" className="form-control">
              <option selected>Choose...</option>
              <option>india</option>
              <option>srilanka</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    );
  }
}

export default Signup;
