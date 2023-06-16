/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name main
 * @description main script
 * @async
 */
(async $ => { 'use strict'
	/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
		CONFIG
	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
	const config = await(new(await load('app/config.js'))).init($)
	/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
		UTILITIES
	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
	// console overrides
	// await load('util/console.js')
	// math utilities
	await load('util/math.js')
	// shorthand for createElement & set StyleSheets
	await load('util/element.js')
	// animation library
	await load('lib/anime.min.js')
	/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
		INITIAL PAGE
	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
	// initial head
	await(new(await load('page/head.js'))).init(config)
	// initial css
	await(new(await load('page/css.js'))).init(config)
	// logo page
	const logo = await(new(await load('page/logo.js'))).init(config)
	logo.show(logo.MODE.INTRO, 'Online Shop')
	/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
		FIREBASE
	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
	let timer = performance.now()
	// firebase auth, firestore, & storage
	const app = await(new(await load('app/fire.js'))).init('auth', 'firestore', 'storage')
	if (performance.now() - timer < 1000) await Math.wait(1000)
	/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
		PAGES
	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
	logo.show(logo.MODE.LOGIN, 'Login')
	// login page
	const login = await(new(await load('page/login.js'))).init(config)
	login.show()
	// check login status
})({})