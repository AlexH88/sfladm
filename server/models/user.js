import mongoose, {Schema} from 'mongoose';

import bcrypt from 'bcrypt';

const UserSchema = new Schema({
	login: {type: String, unique: true, lowercase: true, index: true},
	firstname: {type: String},
	lastname: {type: String},
	position: {type: String},
	company: {type: String},
	email: {type: String},
	password: {type: String},
	img: {type: String}
});

UserSchema.pre('save', async function(next) {
	if(!this.isModified('password')) {
		return(next);
	}

	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(this.password, salt);

	this.password = hash;
	next();
});


UserSchema.pre('findOneAndUpdate', async function(next) {
    let query = this;
    let update = query.getUpdate();

    if (!update.password) {
        return next();
    }

	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(update.password, salt);

	update.password = hash;

	next();
});




UserSchema.methods.comparePasswords = function(password) {
	return bcrypt.compareSync(password, this.password);
/*
	let res = bcrypt.compareSync(password, this.password);

	if(!res) {
		console.log(`ERROR! ${password}  -  ${this.password}`);
		return false;
	}
	console.log(`SUCCES! ${password}  -  ${this.password}`);
	return true;
*/
};

export default mongoose.model('User', UserSchema);