/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name login
 * @description login page
 * @async @class
 */
(async () => { 'use strict'
	class login {
		el = {}
		constructor() {
			this.init()
		}
		init = async config => {
			let _ = this.el
			_.login = document.body.newChild('div')
			addEventListener('resize', this.resize)
			return this
		}
		show = async () => {
			let _ = this.el
			_.login.enable
		}
		hide = async () => {
			let _ = this.el
			_.login.disable
		}
		resize = async e => {
			let _ = this.el
			_.login.css = {
				width: innerWidth+'px',
				height: innerHeight+'px'
			}
		}
	}
	return login
})()