
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('pages/index', {
		page: {
			title: 'Clock Coding Guidelines',
			section: 'general'
		}
	});
};

exports.html = function(req, res){
	res.render('pages/html', {
		page: {
			title: 'HTML / Clock Coding Guidelines',
			section: 'html'
		}
	});
};

exports.css = function(req, res){
	res.render('pages/css', {
		page: {
			title: 'CSS / Clock Coding Guidelines',
			section: 'css'
		}
	});
};