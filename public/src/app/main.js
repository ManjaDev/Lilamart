/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name main
 * @description main app
 * @async
 */
(async $ => { 'use strict'
	/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
		UTILITIES
	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
	// pause the execution 
	const wait = $.wait = duration => new Promise(s => setTimeout(s,duration))
	// console overrides
	await load('util/console.js')
	// math utilities
	await load('util/math.js')
	// shorthand for createElement & set StyleSheets
	await load('util/element.js')
	// animation library
	await load('lib/anime.min.js')
	/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
		MAIN CONFIG
	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
	$.config = await(await load('app/config.js')).init($)
	/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
		INITIAL PAGE
	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
	// initial head
	await(await load('page/head.js')).init($)
	// initial css
	await(await load('page/css.js')).init($)
	// logo page
	const logo = $.logo = await(await load('page/logo.js')).init($)
	logo.show(logo.MODE.INTRO, 'Online Shop')
	/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
		FIREBASE APPS
	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
	let timer = performance.now()
	// firebase auth, firestore, & storage
	const fire = $.fire = await(await load('app/fire.js')).init('auth')
	if (performance.now() - timer < 1000) await wait(1000)
	/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
		PAGES
	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
	// check login status
	if (fire.auth.currentUser === null) {
		// login page
		const login = $.login = await(await load('page/login.js')).init($)
		login.show()
	}
	else {
		fire.auth
	}
})({})