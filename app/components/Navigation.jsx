import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {startLogout} from 'actions';
import { isLoggedIn } from 'api/firebase';


export class Navigation extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();
    dispatch(startLogout());
  }

  render() {
    const { login } = this.props;

    const logoutHtml = (
      <div className="top-bar-right">
        <ul className="menu">
          <li>
            <a href="#" onClick={this.handleLogout}>
              <i className="fa fa-fw fa-sign-out"/>Logout</a>
          </li>
        </ul>
      </div>
    );

    return (
      <div className="top-bar navigation">
        <div className="row">
          <div className="small-12 columns">
            <div className="top-bar-left">
              <ul className="menu">
                <li className="menu-text">
                  TVDeadpool.xyz
                </li>
                <li>
                  <NavLink to="/" activeClassName="link-active">Bets</NavLink>
                </li>
                <li>
                  <NavLink to="/help" activeClassName="link-active">Help</NavLink>
                </li>
                <li>
                  <NavLink to="/about" activeClassName="link-active">About</NavLink>
                </li>
                <li>
                  <NavLink to="/admin" activeClassName="link-active">Admin</NavLink>
                </li>
              </ul>
            </div>
            { isLoggedIn() ? logoutHtml : ''}
          </div>
        </div>
      </div>
    );
  }
}
/*
                { login ? (
                    <li>
                      <Link to="/profile" activeClassName="link-active">You</Link>
                    </li>
                  ) : <li/> }
*/

export default connect()(Navigation);
