const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/appdatabase';

mongoose.set('strictQuery', true);

(async() => {
	try {
		await mongoose.connect(URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}, (err, res) => {
			if (err) throw err;
			console.log('Mongo is ONLINE');
		});
	} catch (err) {
		console.log('error:' + err);
	}
})()

module.exports = mongoose;
