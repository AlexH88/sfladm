import React, {Component} from 'react';
import {connect} from 'react-redux';
import {showModalNewUser} from '../../actions/modalActions';

class UserPanelMenu extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.addUser = this.addUser.bind(this);
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

  addUser(){
  	this.props.dispatch(showModalNewUser());
  }

  render() {
    return (
      <div className="btn-group">
        <button className="btn btn-default btn-xs dropdown-toggle" onClick={this.showMenu}>
          <i className="fa fa-cogs"></i>
        </button>
        
        {
          this.state.showMenu
            ? (
				<ul class="dropdown-menu pull-right" role="menu">
					<li><a href="#" onClick={this.addUser}>Add User</a>
					</li>
					<li><a href="#">Another action</a>
					</li>
					<li><a href="#">Something else here</a>
					</li>
					<li className="divider"></li>
					<li><a href="#">Separated link</a>
					</li>
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


export default connect()(UserPanelMenu);