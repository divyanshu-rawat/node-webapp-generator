

const fse = require('fs-extra');
const fs  = require('fs');
// fs-extra adds file system methods that aren't included in the native fs module and adds promise support to the fs methods.
// Adds new functions to Node’s native file-system module (fs) and add promise support for the existing ones.

const path = require('path');
// The Path module provides a way of working with directories and file paths.

const { promisify } = require('util');
// Wraps Node modules, functions, and methods written in the Node-callback style to return Promises.

const ejsRenderFile = promisify(require('ejs').renderFile)

// Compile our templates to HTML.

const glob_promise = promisify(require('glob'));
// Recursively read a directory, returning an array with all files that match an specified pattern.


const config = require('./site.config')

const srcPath = './src'
const distPath = './public'
fse.emptyDirSync(distPath);

fse.copy(`${srcPath}/assets`, `${distPath}/assets`)

glob_promise('**/*.ejs', { cwd: `${srcPath}/pages` }).then((files)=> {

	console.log(files);
	
	files.forEach( (file) =>  {

		console.log(file);
		const fileData = path.parse(file);
		console.log(fileData);
		const destPath = path.join(distPath, fileData.dir);
		console.log(destPath);

		fse.mkdirs(destPath).then(() => {

			return ejsRenderFile(`${srcPath}/pages/${file}`, Object.assign({}, config))
		}).then((pageContents) => {

			return ejsRenderFile(`${srcPath}/layout.ejs`, Object.assign({}, config, { body: pageContents }))

		}).then((layout_compiled) => {

			fse.writeFile(`${destPath}/${fileData.name}.html`, layout_compiled)
		})
	})
})


// callback version
// var glob = require("glob")
// glob("**/*.ejs", { cwd: `${srcPath}/pages` }, (er, files) => {
// 	console.log(files);
// })




// Recursively read a directory, returning an array with all files that match an specified pattern.
// Node’s util.promisify function to convert all callback-based functions to promise-based.
// It makes our code shorter, cleaner and easier to read.


