import React from 'react'

const CustomLayout = (props) => {
  return (
      <nav className="navbar navbar-default navbar-inverse" role="navigation">
        <div className="container-fluid">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="true">Django-React Boilerplate</a>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="true" className="dropdown-toggle" data-toggle="dropdown">
                  <span className="glyphicon glyphicon-user" />&nbsp;
                  <strong>John Doe</strong>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <div className="navbar-login">
                      <div className="row">
                        <div className="col-lg-4">
                          <p className="text-center">
                            <span className="glyphicon glyphicon-user icon-size" />
                          </p>
                        </div>
                        <div className="col-lg-8">
                          <p className="text-left"><strong>Hi there,</strong></p>
                          <p className="text-left small">doe@example.com</p>
                          <p className="text-left">
                            <a href="true" className="btn btn-primary btn-block btn-sm">view profile</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="divider" />
                  <li>
                    <div className="navbar-login navbar-login-session">
                      <div className="row">
                        <div className="col-lg-12">
                          <p>
                            <a href="true" className="btn btn-danger btn-block">Logout</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>

              <li><p className="navbar-text">Already have an account?</p></li>
              <li className="dropdown">
                <a href="true" className="dropdown-toggle" data-toggle="dropdown"><b>Login</b></a>
                <ul id="login-dp" className="dropdown-menu">
                  <li>
                    <div className="row">
                      <div className="col-md-12">
                        Login via
                        <div className="social-buttons">
                          <a href="true" className="btn btn-fb"><i className="fa fa-facebook" /> Facebook</a>
                          <a href="true" className="btn btn-tw"><i className="fa fa-twitter" /> Twitter</a>
                        </div>
                        or
                        <form className="form" role="form" method="post" action="login" acceptCharset="UTF-8" id="login-nav">
                          <div className="form-group">
                            <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email address" required />
                          </div>
                          <div className="form-group">
                            <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required />
                            <div className="help-block text-right"><a href>Forget the password ?</a></div>
                          </div>
                          <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                          </div>
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" /> keep me logged-in
                            </label>
                          </div>
                        </form>
                      </div>
                      <div className="bottom text-center">
                        New here ? <a href="true"><b>Join Us</b></a>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              
            </ul>
          </div>{/* /.navbar-collapse */}
        </div>{/* /.container-fluid */}
      </nav>
  )
}


export default CustomLayout


// import React from 'react';
// import PropTypes from 'prop-types';

// function Layout(props) {
//   const logged_out_nav = (
//     <ul>
//       <li onClick={() => props.display_form('login')}>login</li>
//       <li onClick={() => props.display_form('signup')}>signup</li>
//     </ul>
//   );

//   const logged_in_nav = (
//     <ul>
//       <li onClick={props.handle_logout}>logout</li>
//     </ul>
//   );
//   return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
// }

// export default Layout;

// Layout.propTypes = {
//   logged_in: PropTypes.bool.isRequired,
//   display_form: PropTypes.func.isRequired,
//   handle_logout: PropTypes.func.isRequired
// };
