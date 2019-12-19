import { connect } from 'react-redux';
import Dashboard from '../components/dashboard';
import { logout } from '../redux/actions/login';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout());
    },
  };
};

export default connect(null, mapDispatchToProps)(Dashboard);
