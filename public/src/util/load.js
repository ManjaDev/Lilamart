/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name load
 * @description import js, css, json, & data as strings
 * @async @param {load(<url>)}
 */
(async () => { 'use strict'
	// JS & CSS LOADER
	const DOT = {
		JS:'js',
		CSS:'css',
		WOFF:'woff',
		WOFF2:'woff2',
		TTF:'ttf',
		OTF:'otf',
	}
	// 98 B5 F0 7E 6C 2D 41 3A 2023
	const key = new Uint8Array(new BigUint64Array([12069899619776803545n]).buffer)
	const crypt = async data => {
		let crypt = await load('util/crypt.js')
		new crypt(key).convert = data
	}
	const load_list = []
	const load = (link, options) => {
		// check if link already loaded
		if (load_list.some(e => e === link)) return
		load_list.push(link)
		// parse extension
		let ext = link.split('.')
		ext = ext[ext.length-1].toLowerCase()
		let path = ext == DOT.JS ? 'src' : ext == DOT.CSS ? 'style' : 'res'
		
		return new Promise((solve,reject) => {
			let get = (link,key) => {
				fetch(`./${path}/${link}`)
				.then(response => {
					if(response.ok && !key) {
						switch(ext) {
							case DOT.WOFF:
							case DOT.WOFF2:
							case DOT.TTF:
							case DOT.OTF:
								return response.arrayBuffer()
							default:
								return response.text()
						}
					}
					else if(!response.ok && !key) throw get(`${link}.cry`,true)
					else if(response.ok && key) return response.arrayBuffer()
					else {
						console.error(`HTTP error, status = `, response.status)
						reject()
					}
				})
				.then(async data => {
					typeof data == 'object' && key ? await crypt(new Uint8Array(data)) : null
					switch(ext) {
						case DOT.JS:
							solve(eval(key ? new TextDecoder().decode(new Uint8Array(data)) : data))
							break
						case DOT.CSS:
							const css = new CSSStyleSheet(options)
							css.replace(data)
							.then(() => {
								document.adoptedStyleSheets = [css]
								solve(css)
							})
							.catch(err => {
								console.error(`Failed to replace styles:`, err)
								reject()
							})
							break
						case DOT.WOFF:
						case DOT.WOFF2:
						case DOT.TTF:
						case DOT.OTF:
							let font_name = link.split('.')[0].split('/')[1]
							.replace(/[-_]/g,' ')
							.replace(/\b([a-z])/g, c => c.toUpperCase())
							const font = new FontFace(font_name, data, options)
							font.load()
							.then(() => {
								document.fonts.add(font)
								solve(font)
							})
							.catch(err => {
								console.error(`Failed to load font:`, link, err)
								reject()
							})
							break
						default: solve(data)
					}
				})
				.catch(err => {
					console.error(`Error load: ${link}`, err)
					reject()
				})
			}
			get(link)
		})
	}
	return load
})()
