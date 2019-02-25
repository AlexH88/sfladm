import Article from '../models/article';

export async function create(req, res, next) {
	const articleData = req.body;

	try {
		var article = await Article.create(articleData);
	} catch ({message}) {
		return next({
			status: 400,
			message
		});
	};

	res.json(article);
}

export async function removeArticle(req, res, next) {
	try {
		var result = await Article.remove({_id: req.params.id});
	} catch ({message}) {
		return next({
			status: 400,
			message
		});
	}

	res.send(result);
}

export async function getAll(req, res, next) {
	try {
		var articles = await Article.find({});
	} catch ({message}) {
		return next({
			status: 500,
			message
		});
	}

	res.send({articles});
}

export async function getNewsById(req, res, next) {
	try {
		var article = await Article.find({_id: req.params.id});
	} catch ({message}) {
		return next({
			status: 500,
			message
		});
	}

	res.send({article});
}

export async function updateArticle(req, res, next) {
	try {
		var result = await Article.findByIdAndUpdate(req.params.id, req.body, {new: true});
	} catch ({message}) {
		return next({
			status: 400,
			message
		});
	}
	res.send(result);
}