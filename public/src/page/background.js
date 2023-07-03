/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name background
 * @description background page
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
			let canvas, ctx, img, detail, grid = [], scale, x, y
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				CONFIG
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			config.page = $.config.page
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				BACKGROUND
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			_.background = document.body.newChild('canvas')
			_.background.css = {
				position:'absolute',
				left:0,
				top:0,
				width:'100%',
				height:'100%',
				zIndex:-1,
			}

			img = new Image()
			img.src = 'res/background/peeblespair.jpg'
			const draw = () => {
				canvas = _.background
				canvas.width = canvas.clientWidth
				canvas.height = canvas.clientHeight
				scale = canvas.height/img.height
				x = (canvas.width/2)-(img.width*scale/2)
				y = 0
				ctx = canvas.getContext('2d')
				ctx.drawImage(img,x,y,img.width*scale,img.height*scale)
				console.log(img.width,img.height)
			}
			img.addEventListener('load',draw)
			addEventListener('resize',draw)
			addEventListener('resize',this.resize)

			await this.hide()
			return this
		}
		show = async () => {
			if (this.config.mode === this.MODE.SHOW) return
			else this.config.mode = this.MODE.SHOW

			const _ = this.el

			_.background.enable
			await this.resize()
			await $.wait(500)
		}
		hide = async () => {
			if (this.config.mode === this.MODE.HIDE) return
			else this.config.mode = this.MODE.HIDE

			const _ = this.el

			await this.resize()
			await $.wait(200)
			_.background.disable
		}
		resize = async () => {
			const _ = this.el
		}
	}
})()