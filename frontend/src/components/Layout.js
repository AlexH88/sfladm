import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import HeaderMenu from './containers/HeaderMenu';
import ConfirmModal from './containers/ConfirmModal';

class Layout extends Component {

	constructor(props){
		super(props);
		this.state = {
			rightMenu: false
		}

		this.handleClickButtonUser = this.handleClickButtonUser.bind(this);
	}

	handleClickButtonUser() {
		this.setState({rightMenu: !this.state.rightMenu});
	};

	render() {
		return(
			<div className="wrapper">
				<div className="header navbar navbar-default navbar-static-top">
					<div className="navbar-header"><a className="navbar-brand">Sofoil Admin v1.0</a></div>
					<ul className="nav navbar-top-links navbar-right">
						<li> <HeaderMenu /> </li>
					</ul>
				</div>

				<nav id="navbar-default sidebar">
					<ul className="list-unstyled components">
						<li><Link to={'/'}> <i className="fa fa-home fa-fw"></i> Home </Link></li>
						<li><Link to={'/about'}> <i className="fa fa-info-circle fa-fw"></i> About</Link></li>
						<li><Link to={'/users'}> <i className="fa fa-user fa-fw"></i> Users</Link></li>
						<li><Link to={'/articles'}> <i className="fa fa-newspaper-o fa-fw"></i> Articles</Link></li>
					</ul>
				</nav>

				<div id="page-wrapper">
					{ this.props.children }
				</div>

				<ConfirmModal />

			</div>
		);
	}
}

export default Layout;