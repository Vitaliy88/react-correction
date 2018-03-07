import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from '../SignUp';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

const SignInPage = ({ history }) =>
  <div>
    <h1>SignIn</h1>
    <SignInForm history={history} />
    <SignUpLink />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.FLAG = false;
    this.state = { ...INITIAL_STATE };
  }


  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.ACCOUNT);
        // console.log(this.FLAG = true);
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
  //   const UserGreeting = ()=> {
  //     return (
  //       console.log(this.SignInForm.FLAG)
  //     //   this.SignInForm.FLAG ?
  //     //  <div id="toggle_btn" onClick={(event) => {
  //     //   document.getElementById('sidebar').classList.toggle('active');
  //     //  }}>
  //     //           <span></span>
  //     //           <span></span>
  //     //           <span></span>
  //     //           </div> : null
  //   );
  //  }
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        {/* <UserGreeting /> */}
        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};
