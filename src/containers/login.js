import { connect } from 'react-redux';
import Login from '../components/login';
import { AuthenticateUser } from '../services/login';

const mapStateToProps = state => {
  return {
    loggedIn: state.Login.loggedIn,
    loginFailed: state.Login.loginFailed,
    accountCreated: state.Signup.accountCreated,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    AuthenticateUser: data => {
      dispatch(AuthenticateUser(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
