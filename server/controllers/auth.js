import jwt from 'jsonwebtoken';
import User from '../models/user';
import config from '../config';

export const signup = async (req, res, next) => {
	const credentials = req.body;
	
	let user;

	try {
		user = await User.create(credentials);
	} catch ({message}) {
		return next({
			status: 400,
			message
		});
	}

	res.json(user);
}

export const signin = async (req, res, next) => {
	const {login, password} = req.body;

	const user = await User.findOne({login});

	if(!user) {
		return next({
			status: 400,
			message: `User not found`
		});
	}

	const result = await user.comparePasswords(password);
	if(!result) {
		return next({
			status: 400,
			message: `Bad Credentials`
		});
	}

	const token = jwt.sign({_id: user._id}, config.secret);

//	res.json(token);
	res.json({
		success: 1,
		token: token,
		data: {
			_id: user._id,
			login: user.login,
			firstname: user.firstname,
			lastname: user.lastname,
			position: user.position,
			company: user.company,
			email: user.email,
			img: user.img
		}
	});
}