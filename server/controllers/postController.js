var Post = require('../models/postModel')

function create(req, res){
	Post.create(req.body, function (err, post) {
  		if (err) return console.error(err);
		res.writeHead(200, {'Content-Type' : 'test/json'})
		res.end(JSON.stringify(post))
	})
}

function retrieveOne(req, res){
	Post.findOne({slug: req.params.slug}, function(err,result){
		if (err) return console.error(err);
		res.writeHead(200, {'Content-Type' : 'test/json'})
		res.end(JSON.stringify(result))
	})
}

function deletion(req,res){
	Post.remove({slug: req.params.slug}, function(err, result){
		if (err) return console.error(err);
		res.writeHead(200, {'Content-Type' : 'test/json'})
		res.end(JSON.stringify(result))
	})
}

function change (req,res){
	Post.findOneAndUpdate({slug: req.params.slug}, req.body ,function(err,result){
		if (err) return console.error(err);
		res.writeHead(200, {'Content-Type' : 'test/json'})
		res.end(JSON.stringify(result))

	})
}

function retrieveAll(req, res){
	Post.find({}, function(err,result){
		if (err) return console.error(err);
		res.writeHead(200, {'Content-Type' : 'test/json'})
		res.end(JSON.stringify(result))
	})
}

module.exports = {
create,
retrieveAll,
retrieveOne,
deletion,
change,
}



