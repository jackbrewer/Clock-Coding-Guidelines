
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('pages/overview', {
		title: 'Clock Coding Guidelines'
	});
};

exports.html = function(req, res){
	res.render('pages/html', {
		title: 'HTML / Clock Coding Guidelines'
	});
};

exports.css = function(req, res){
	res.render('pages/css', {
		title: 'CSS / Clock Coding Guidelines'
	});
};