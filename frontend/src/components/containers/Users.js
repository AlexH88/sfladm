import React, {Component} from 'react';
import {connect} from 'react-redux';

import UserPanelMenu from './UserPanelMenu';
import {fetchUsers} from '../../actions/userActions';
import UserItemListing from './UserItemListing';

class Users extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: ''
		}

	this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
	}

	componentDidMount() {
		let token = localStorage.getItem("token");
		this.props.dispatch(fetchUsers(token));
	}

	handleFilterTextChange(e) {
		this.setState({
			filterText: e.target.value
		});
	}

	render() {

		const usersItems = this.props.users.map( (user, i) => {
			let strSearch = user.firstname + user.lastname;
			if (strSearch.toLowerCase().indexOf(this.state.filterText.toLowerCase()) === -1) {
				return;
			}
			return (<li className="list-group-item" key={i}><UserItemListing data={user}/></li>);
		});


		return (
			<div>
				<div className="row">
					<div className="col-lg-12">
						<h4 className="page-header">Все пользователи</h4>
					</div>
				</div>


				<div className="row">
					<div className="col-lg-12">
						<div className="panel panel-default">
							<div className="panel-heading">
								&nbsp;
								<div class="pull-right">
									<UserPanelMenu />
								</div>
							</div>
							<div className="panel-body">
								<div className="row">
									<div className="col-sm-6">
										<label>
											<select class="form-control input-sm">
												<option value="5">5</option>
												<option value="10">10</option>
												<option value="15">15</option>
												<option value="20">20</option>
											</select>
										</label>
									</div>
									<div className="col-sm-6 search-block">
										<label>
											<input 
												type="text"
												class="form-control input-sm"
												placeholder="Поиск"
												onChange={this.handleFilterTextChange}
											 />
										</label>
									</div>
								</div>

								{(this.props.users.length > 0) ? <ul className="list-group">{usersItems}</ul> : <div>Sorry we have no users</div> }
							</div>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		users: state.user.users,
		token: state.auth.dataUser.token
	}
}

export default connect(mapStateToProps)(Users);