/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name notification
 * @description notification page
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
				NOTIFICATION
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			_.notification = document.body.newChild('div')
			_.notification.css = {
				position:'absolute',
				width:'100%',
				height:'100%',
				background:'var(--col_black)',
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

			_.notification.enable
			await this.resize()
			await $.wait(500)
		}
		hide = async () => {
			if (this.config.mode === this.MODE.HIDE) return
			else this.config.mode = this.MODE.HIDE

			const _ = this.el

			await this.resize()
			await $.wait(200)
			_.notification.disable
		}
		resize = async () => {
			const _ = this.el
		}
	}
})()