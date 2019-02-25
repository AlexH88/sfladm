import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class ArticleItemListing extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<div className="">
					<Link key={this.props.data._id} to={`/article/${this.props.data._id}`} >{this.props.data.title}</Link>
				</div>
			</div>
		);
	}
}

export default ArticleItemListing;