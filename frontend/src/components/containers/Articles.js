import React, {Component} from 'react';
import {connect} from 'react-redux';

import ArticlePanelMenu from './ArticlePanelMenu';
import {fetchArticles} from '../../actions/articleActions';
import ArticleItemListing from './ArticleItemListing';

class Articles extends Component {

	componentDidMount() {
		let token = localStorage.getItem("token");
		this.props.dispatch(fetchArticles(token));
	}

	render() {
		const articlesItems = this.props.articles.map( (article, i) => {
			return (<li className="list-group-item" key={i}><ArticleItemListing data={article}/></li>);
		});

		return (
			<div>
				<div className="row">
					<div className="col-lg-12">
						<h4 className="page-header">Статьи</h4>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-12">
						<div className="panel panel-default">
							<div className="panel-heading">
								&nbsp;
								<div class="pull-right">
									<ArticlePanelMenu />
								</div>
							</div>
							<div className="panel-body">
								{(this.props.articles.length > 0) ? <ul className="list-group">{articlesItems}</ul> : <div>Sorry we have no articles</div> }
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
		articles: state.article.articles,
		token: state.auth.dataUser.token
	}
}

export default connect(mapStateToProps)(Articles);
