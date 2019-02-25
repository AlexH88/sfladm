import mongoose, {Schema} from 'mongoose';

const ArticleSchema = new Schema({
	title: {type: String, require: true},
	teaser: {type: String, require: true},
	body: {type: String, require: true},
	img: {type: String},
	createAt: {type: Date, require: true, default: Date.now}
});

export default mongoose.model('Article', ArticleSchema);