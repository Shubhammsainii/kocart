import React from "react";
import { isEmpty } from "lodash";
import { redirect } from "react-router-dom";


export default class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }
  constructor(props) {
    super(props);

    // this.state={
    //    ...props.props.state
    // }
    // this.state=props;
    // console.log(this.state);
    //  this.state=props.state;

    // debugger;
  }
  handleSubmitClick = async () => {
    const { username, password } = this.state;
    this.setState({ isLoading: true });

    try {
      //Replace this with api call
      //Or action
      if (username == "Mohit" && password == "1234") {
        localStorage.setItem('token', 'mohit1234');
        this.setState({
          success: true,
          token: localStorage.getItem('token')
        });
        window.location.href = '/home';
      } else {
        this.setState({
          error: {
            status: true,
            message: "Invalid Credentials"
          }
        });
      }
    } catch (e) {
      this.setState({
        error: {
          status: true,
          message: e
        }
      });
    } finally {
      this.setState({
        isLoading: false
      });
    }
  };
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      error: {
        status: false,
        message: ""
      }
    });
  };
  handleKeyPressed(event) {
    if (event.key === "Enter" && !this.shouldSubmitDisable()) {
      this.handleSubmitClick();
    }
    console.log(event.key);
  };
  shouldSubmitDisable() {
    return isEmpty(this.state.username) || isEmpty(this.state.password);
  };
  render() {
    console.log(this.state);
    if (!this.props.state.token) {
      // const { username, password, isLoading, error, success } = this.state;
      // debugger;
      return (
        <>
          <div className="row align-items-center justify-content-center p-5">
            <div className="col-md-6">
              <div className="form-block">
                <div className="text-center mb-5">
                  <h3>
                    Login to <strong className="logo">KOCart</strong>
                  </h3>
                  {(this.state?.error?.status) ? (
                    <div className="alert alert-danger" >
                      {this.state?.error?.message}
                    </div>

                  ) : ('')}

                </div>
                <form>
                  <div className="form-group first">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="your-email@gmail.com"
                      onChange={this.handleInputChange}
                      onKeyDown={this.handleKeyPressed}
                      // value={this.state.username}
                      id="username"
                      name="username"
                    />
                  </div>
                  <div className="form-group last mb-3">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Your Password"
                      onChange={this.handleInputChange}
                      onKeyDown={this.handleKeyPressed}
                      value={this.state.password}
                      id="password"
                    />
                  </div>
                  <div className="d-sm-flex mb-5 align-items-center">
                    <label className="control control--checkbox mb-3 mb-sm-0">
                      <span className="caption">Remember me</span>
                      <input type="checkbox" />
                      <div className="control__indicator"></div>
                    </label>
                    <span className="ml-auto">
                      <a href="#" className="forgot-pass">
                        Forgot Password
                      </a>
                    </span>
                  </div>
                  <button
                    type="button"
                    value="Log In"
                    className="btn btn-block btn-lg btn-success"
                    disabled={this.shouldSubmitDisable()}
                    onClick={this.handleSubmitClick}
                  //   isloading={isLoading}
                  >
                    Log In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (<a href="/login">You are already LoggedIn</a>)
    }
  }
}
