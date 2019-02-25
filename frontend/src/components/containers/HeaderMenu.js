import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/authActions';


class HeaderMenu extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.logout = this.logout.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  logout() {
    this.props.dispatch(logoutUser());
  }

  render() {
    return (
      <div className="btn-group">
        <button className="btn btn-default btn-xs dropdown-toggle" onClick={this.showMenu}>
          <i className="fa fa-user fa-fw"></i>
        </button>
        
        {
          this.state.showMenu
            ? (
				<ul class="dropdown-menu pull-right" role="menu">
          <li><Link to={'/profile'}> <i className="fa fa-user fa-fw"></i> User Profile </Link></li>
					<li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a></li>
					<li className="divider"></li>
					<li><a href="#" onClick={this.logout}><i className="fa fa-sign-out fa-fw"></i> Logout</a></li>
				</ul>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps)(HeaderMenu);