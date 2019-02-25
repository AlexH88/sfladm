import actionTypes from '../constants/actionTypes';

const url = 'http://localhost:3000/api';

export function createArticle(token, data) {
	return dispatch => {
		return fetch(`${url}/articles`,{
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'authorization': token,
					'Content-Type': 'application/json'
				}
			})
			.then( (response) => response.json() )
			.then( (data) => {
				dispatch(createArticleItem(data))
			})
			.catch( (err) => dispatch(createArticleItemError(err)) );
	}
}

export const createArticleItem = article => ({
	type: actionTypes.ARTICLE_ITEM_CREATED,
	article: article
});

export const createArticleItemError = error => ({
	type: actionTypes.ARTICLE_ITEM_CREATED_ERROR,
	error: error
});

export function fetchArticles(token){
	return dispatch => {
		return fetch(`${url}/articles`,{
				method: 'GET',
				headers: {
					'authorization': token
				}
			})
			.then( (response) => response.json() )
			.then( (data) => dispatch(fetchArticlesSuccess(data.articles)))
			.catch( (err) => dispatch(fetchArticlesError(err)) );
	}
}

export const fetchArticlesSuccess = articles => ({
	type: actionTypes.FETCH_ARTICLES_SUCCESS,
	articles: articles
});

export const fetchArticlesError = err => ({
	type: actionTypes.FETCH_ARTICLES_ERROR,
	error: err
});

export function fetchArticleItem(token, id) {
	return dispatch => {
		return fetch(`${url}/articles/${id}`,{
				method: 'GET',
				headers: {
					'authorization': token
				}
			})
			.then( (response) => response.json() )
			.then( (data) => dispatch(articleItemReceived(data.article[0])))
			.catch( (err) => dispatch(fetchArticleItemError(err)) );
	}
}

export const articleItemReceived = articleItem => {
	return {
		type: actionTypes.ARTICLE_ITEM_RECEIVED,
		articleItem: articleItem
	}
}

export const fetchArticleItemError = err => ({
	type: actionTypes.FETCH_ARTICLE_ITEM_ERROR,
	error: err
});