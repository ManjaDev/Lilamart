/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name init
 * @description initial script
 * @async
 */
(async $ => { 'use strict'
	/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
		INIT
	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
	const load = await new Promise(solve=>fetch('./src/util/load.js')
	.then(type=>type.text())
	.then(data=>solve(eval(data))))
	await load('app/main.js')
})({})
