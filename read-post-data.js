'use strict'
module.exports = function read_post_data(req)
	{ return new Promise((yes) =>
		{ const chunks = []
		req.on('data', x => chunks.push(x))
		req.on('end', x => yes(Buffer.concat(chunks))) }) }
