import constants from '../constants/actionTypes';

var initialState = {
	articles: [],
	newArticle: {},
	articleItem: {},
	loading: false,
	error: null
}

export default (state = initialState, action) => {

	var update = Object.assign({}, state);

	switch(action.type) {
		case constants.ARTICLE_ITEM_CREATED:
			update['loading'] = false;
			update['newArticle'] = action.article;
			return update;

		case constants.ARTICLE_ITEM_CREATED_ERROR:
			update['loading'] = false;
			update['error'] = action.error;
			return update;

		case constants.FETCH_ARTICLES_SUCCESS:
			update['loading'] = true;
			update['articles'] = action.articles;
			return update;

		case constants.FETCH_ARTICLES_ERROR:
			update['loading'] = false;
			update['error'] = action.error;
			update['articles'] = [];
			return update;

		case constants.ARTICLE_ITEM_RECEIVED:
			update['articleItem'] = action.articleItem;
			update['loading'] = true;
			return update;

		case constants.FETCH_ARTICLE_ITEM_ERROR:
			update['loading'] = false;
			update['error'] = action.error;
			update['articleItem'] = {};
			return update;

		default:
			return state;
	}
}