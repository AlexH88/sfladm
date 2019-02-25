import React, {Component} from 'react';
import {connect} from 'react-redux';
import {showModalNewArticle} from '../../actions/modalActions';

class ArticlePanelMenu extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.addArticle = this.addArticle.bind(this);
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

  addArticle(){
  	this.props.dispatch(showModalNewArticle());
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
					<li><a href="#" onClick={this.addArticle}>Добавить статью</a></li>
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


export default connect()(ArticlePanelMenu);