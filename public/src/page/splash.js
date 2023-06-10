/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name splash
 * @description splash page
 * @async @class
 */
(async () => { 'use strict'
	class splash {
		el
		logo
		subtitle
		constructor() {
			this.init()
		}
		init = async () => {
			this.el = document.body.newChild('div')
		}
		show = async () => {
			this.el.enable
			window.addEventListener('resize', this.resize)
		}
		hide = async () => {
			this.el.disable
			window.removeEventListener('resize', this.resize)
		}
		resize = async e => {

			this.el.css = {
				width: innerWidth+'px',
				height: innerHeight+'px'
			}
		}
	}
	return splash
})()