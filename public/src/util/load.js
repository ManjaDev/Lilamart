/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name load
 * @description import js, css, json, & data as strings
 * @param { load(<url>) }
 */
'use strict'
// JS & CSS LOADER
const dot = {JS:'js', CSS:'css'}
const load = link => {
	// PARSING EXTENSION
	let ext = link.split('.')
	ext = ext[ext.length-1].toLowerCase()

	return new Promise((solve, reject) => {
		fetch(link)
		.then(response => response.text())
		.then(data => {
			switch(ext) {
				case dot.JS:
					solve(Function(data)())
					break
				case dot.CSS:
					const css = new CSSStyleSheet()
					css.replace(data)
					.then(() => {
						document.adoptedStyleSheets = [css]
						solve(css)
					})
					.catch(err => console.error("Failed to replace styles:", err))
					break
				default: solve(data)
			}
		})
		.catch(error => {
			console.error(`Error load: ${link}`, error)
			reject()
		})
	})
}
self.load = load