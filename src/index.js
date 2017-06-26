var fs = require('fs');
var got = require('got');
var cheerio = require('cheerio')
 
var opt = {
	json: false,
	followRedirect: true
}

var r_html = "";

got('leblogdebetty.com',opt)
    .then(response => {
        $ = cheerio.load(response.body);
		console.log($('title').text());
        //=> '<!doctype html> ...' 
    });

/*
$('a').each(function(i, elem) {
  console.log($(this).attr("href"));
});
*/