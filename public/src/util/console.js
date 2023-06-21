/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name console
 * @description console override
*/
(async () => { 'use strict'
	let print = {
		log:console.log,
		info:console.info,
		warn:console.warn,
		error:console.error,
	}
	console.log = function(...args) {
		print.log(`%c✨ ${args.join(' ')}`, `margin-left:-22px;padding:4px;border-radius:4px;color:#9c6902;background:#fef3dc;font-family:'Segoe Print';font-size:10px`)
	}
	console.info = function(...args) {
		print.info(`%c🌟 ${args.join(' ')}`, `margin-left:-22px;padding:4px;border-radius:4px;color:#9c6902;background:#fef3dc;font-family:'Segoe Print';font-size:10px`)
	}
	console.warn = function(...args) {
		print.warn(`%c🌠 ${args.join(' ')}`, `margin-left:-36px;padding:4px;border-radius:4px;color:#9c6902;background:#fdcd6d;font-family:'Segoe Print';font-size:10px`)
	}
	console.error = function(...args) {
		print.error(`%c☄️ ${args.join(' ')}`, `margin-left:-36px;padding:4px;border-radius:4px;color:#fdcd6d;background:#e65;font-family:'Segoe Print';font-size:10px`)
	}
})()