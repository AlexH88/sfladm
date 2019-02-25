import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchArticleItem} from '../../actions/articleActions';

class ArticleItem extends Component {

	async componentDidMount() {
		let token = localStorage.getItem("token");
		await this.props.dispatch(fetchArticleItem(token, this.props.match.params.id));
	}

	async componentDidUpdate(prevProps) {
		let oldId = prevProps.match.params.id;
		let newId = this.props.match.params.id;
		if(newId !== oldId) {
			await this.props.dispatch(fetchArticleItem(token, this.props.match.params.id));
		}
	}

	render() {

		return (
			<div className="">
			{this.props.loading ?

				<div className="row">
					<div className="col-lg-12">
						<h4 className="page-header">{this.props.articleItem.title}</h4>
					</div>
					<div className="col-md-4 col-sm-6 col-xs-12">
						<div className="text-center">
							<img src={this.props.articleItem.img} className="avatar img-circle img-thumbnail" alt="avatar" />
						</div>
					</div>

					<div className="col-md-8 col-sm-6 col-xs-12 personal-info">
						<form className="form-horizontal">
							<div className="form-group">
								<label className="col-lg-3 control-label">Заголовок статьи:</label>
								<div className="col-lg-8">
									<input className="form-control" type="text" name="title" value={this.props.articleItem.title} />
								</div>
							</div>
							<div className="form-group">
								<label className="col-lg-3 control-label">Превью статьи:</label>
								<div className="col-lg-8">
									<textarea className="form-control" name="teaser" rows="5" value={this.props.articleItem.teaser} ></textarea>
								</div>
							</div>
							<div className="form-group">
								<label className="col-lg-3 control-label">Статьи:</label>
								<div className="col-lg-8">
									<textarea className="form-control" name="body" rows="8" value={this.props.articleItem.body} ></textarea>
								</div>
							</div>
						</form>
					</div>
				</div>
			: <div>Loading</div>}
			</div>

		);
	}
}

const mapStateToProps = state => {
	return {
		articleItem: state.article.articleItem,
		loading: state.article.loading
	}
}

export default connect(mapStateToProps)(ArticleItem);
