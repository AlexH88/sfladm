import *as UserService from '../services/UserService';
import User from '../models/user';

import bcrypt from 'bcrypt';

export async function getCurrentUser(req, res, next) {

	const { token } = req;

	try {
		var user = await UserService.getUserByToken(token);
	} catch ({ message }) {
		return next({
			status: 500,
			message
		});
	}

	return res.json(user);
}

export async function getAllUsers(req, res, next) {
	try {
		var users = await User.find({});
	} catch ({message}) {
		return next({
			status: 500,
			message
		});
	}
	res.send({users})
}

export async function updateUser(req, res, next) {
	try {
		var result = await User.findOneAndUpdate(req.params.id, req.body, {new: true});
	} catch ({message}) {
		return next({
			status: 400,
			message
		});
	}

	const token = req.headers['authorization'];

	res.json({
		success: 1,
		token: token,
		data: result
	});
}

export async function getUserById(req, res, next) {
	try {
		var user = await User.find({_id: req.params.id});
	} catch ({message}) {
		return next({
			status: 500,
			message
		});
	}
	res.send({user});
}
