/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name load
 * @description import js, css, json, & data as strings
 * @param {load(<url>)}
 */
(async () => { 'use strict'
	// JS & CSS LOADER
	const dot = {JS:'js',CSS:'css'}
	// 98 B5 F0 7E 6C 2D 41 3A 2023
	const key = new Uint8Array(new BigUint64Array([12069899619776803545n]).buffer)
	const crypt = async data => {
		let crypt = await load('util/crypt.js')
		new crypt(key).convert = data
	}
	const load = link => {
		// PARSING EXTENSION
		let ext = link.split('.')
		ext = ext[ext.length-1].toLowerCase()
		let path = ext == dot.JS ? 'src' : ext == dot.CSS ? 'style' : 'res'
		
		return new Promise((solve,reject) => {
			let get = (link,key) => {
				fetch(`./${path}/${link}`)
				.then(response => {
					//console.log(response.ok, !key, link)
					if(response.ok && !key) return response.text()
					else if(!response.ok && !key) throw get(`${link}.cry`,true)
					else if(response.ok && key) return response.arrayBuffer()
					else {
						//throw new Error(`HTTP error, status = ${response.status}`)
						reject()
					}
				})
				.then(async data => {
					typeof data == 'object' ? await crypt(new Uint8Array(data)) : null
					switch(ext) {
						case dot.JS:
							solve(eval(key ? new TextDecoder().decode(new Uint8Array(data)) : data))
							break
						case dot.CSS:
							const css = new CSSStyleSheet()
							css.replace(data)
							.then(() => {
								document.adoptedStyleSheets = [css]
								solve(css)
							})
							.catch(err => {
								//console.error("Failed to replace styles:", err)
								reject()
							})
							break
						default: solve(data)
					}
				})
				.catch(err => {
					//console.error(`Error load: ${link}`, err)
					reject()
				})
			}
			get(link)
		})
	}
	return load
})()
