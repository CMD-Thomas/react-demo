import * as api from '../api/api';

const EnsureLoggedInContainer = (props) => {

  const token = localStorage.getItem('token');
  if (!token) {
    this.props.router.replace('/login')
  }


  console.log(props);

  console.log('tooken ' ,token)

  function isLoggedIn(data) {
    console.log(data.data.success);
    if (!data.data.succes) {
      console.log('ghier');
      // move the router
      this.props.router.replace('/');
    }
  }

  // Make api/authentica hier
  api.get('http://localhost:3030/api/', token, isLoggedIn);
};

export default EnsureLoggedInContainer;
