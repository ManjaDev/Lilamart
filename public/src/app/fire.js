/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name fire
 * @description firebase apps
 * @async @class
 */
(async () => { 'use strict'
	return new class {
		constructor() {
			this.el = {}
			this.version = '9.22.2'
			this.link = {
				app					: `/__/firebase/${this.version}/firebase-app-compat.js`,
				auth				: `/__/firebase/${this.version}/firebase-auth-compat.js`,
				database		: `/__/firebase/${this.version}/firebase-database-compat.js`,
				firestore		: `/__/firebase/${this.version}/firebase-firestore-compat.js`,
				functions		: `/__/firebase/${this.version}/firebase-functions-compat.js`,
				messaging		: `/__/firebase/${this.version}/firebase-messaging-compat.js`,
				storage			: `/__/firebase/${this.version}/firebase-storage-compat.js`,
				analytics		: `/__/firebase/${this.version}/firebase-analytics-compat.js`,
				remoteConfig: `/__/firebase/${this.version}/firebase-remote-config-compat.js`,
				performance	: `/__/firebase/${this.version}/firebase-performance-compat.js`,
				init				: `/__/firebase/init.js${location.hostname==='127.0.0.1'?'?useEmulator=true':''}`
			}

		}
		/**
		 * @param {object} $
		 * @param {array <string>} features
		 * @return {this}
		 */
		async init(...features) {
			let timer = performance.now()
			const wait = $.wait
			if (typeof firebase === 'function') return
			await this.load(this.link.app)
			for (let feature of features)
				this.el[feature] = await this.load(this.link[feature])
			await this.load(this.link.init)
			this.app = firebase
			delete globalThis.firebase
			if (performance.now() - timer < 1000) await wait(1000)
			return this
		}
		/**
		 * @param {string} link
		 * @return {Promise <Element>}
		 */
		load = async link => {
			return new Promise(solve => {
				document.head
				.newChild('script', {defer:'', src:link})
				.onload = e => solve(e.target)
			})
		}
	}
})()