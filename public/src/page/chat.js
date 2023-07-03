/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name chat
 * @description chat page
 * @async @class
 */
(async () => { 'use strict'
	return new class {
		constructor() {
			this.el = {}
			this.config = {}
			this.MODE = {
				SHOW:Symbol(),
				HIDE:Symbol(),
			}
		}
		init = async () => {
			const _ = this.el
			const config = this.config
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				CONFIG
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			config.page = $.config.page
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				CHAT
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			_.chat = document.body.newChild('div')
			_.chat.css = {
				position:'absolute',
				width:'100%',
				height:'100%',
				zIndex:-1,
			}

			addEventListener('resize',this.resize)

			await this.hide()
			return this
		}
		show = async () => {
			if (this.config.mode === this.MODE.SHOW) return
			else this.config.mode = this.MODE.SHOW

			const _ = this.el

			_.chat.enable
			await this.resize()
			await $.wait(500)
		}
		hide = async () => {
			if (this.config.mode === this.MODE.HIDE) return
			else this.config.mode = this.MODE.HIDE

			const _ = this.el

			await this.resize()
			await $.wait(200)
			_.chat.disable
		}
		resize = async () => {
			const _ = this.el
		}
	}
})()