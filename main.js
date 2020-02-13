'use strict'

let path = require('path');
const readMD = require('./index')
const marked = require('marked');

let file = process.argv[2]; // matriz que contiene los argumentos de la línea de comandos
file = path.resolve(file);
file = path.normalize(file); // si hay errores de escritura, los resuelve para leerlos bien 

readMD(file)
	.then((data) => {
		let renderer = new marked.Renderer();
		let links = [];
		renderer.link = function (href, title, text) {
			links.push(
				{
					href: href,
					text: text,
					file: file,
				});
		};
		marked(data, { renderer: renderer }); // obtiene los links en un array de object
		let resultGet = getLinks(links); // funcion que filtra los links
		console.log(resultGet); 
	}).catch((err) => {
		console.log(err);
	});

// función que filtra todos los links
function getLinks(links){
	let validateLink = [];
	links.map((element) => {
		var prefix = element.href.substring(0, 4);
		if (prefix == 'http') {
			validateLink.push(element);
		}
	})
	return validateLink;
};


