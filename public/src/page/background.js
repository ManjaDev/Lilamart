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
			const color = [250,170,10]
			let canvas, ctx, img, particles, particle_number, mappedImage, pixels,
			    scale, scale_w, scale_h, x, y, w, h, animation
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
			canvas = _.background
			ctx = canvas.getContext('2d')
			img = new Image()

			class Particle {
				constructor() {
					this.x = Math.random() * canvas.width
					this.y = 0
					this.speed = 0
					this.velocity = Math.random() * 3.5
					this.size = Math.random() * 1.5 + 1
				}
				update() {
					this.position1 = Math.floor(this.y)
					this.position2 = Math.floor(this.x)
					this.speed = mappedImage[this.position1][this.position2]
					let movement = (2.5 - this.speed) + this.velocity

					this.y += movement
					if (this.y >= canvas.height) {
						this.x = Math.random() * canvas.width
						this.y = 0
					}
				}
				draw() {
					ctx.beginPath()
					ctx.fillStyle = '#FDCD6D'
					ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
					ctx.fill()
				}
			}
			function start_particles() {
				mappedImage = []
				for (let y = 0; y < canvas.height; y++) {
					let row = []
					for (let x = 0; x < canvas.width; x++) {
						const red = pixels.data[(y * 4 * pixels.width) + (x * 4)]
						const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)]
						const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)]
						const brightness = calculateRelativeBrightness(red,green,blue)
						const cell = [
							brightness,
						]
						row.push(cell)
					}
					mappedImage.push(row)
				}
				particles = []
				particle_number = 5000
				for (let i = 0; i < particle_number; i++) {
					particles.push(new Particle)
				}
				if (animation) cancelAnimationFrame(animation)
				animate()
			}
			function animate() {
				ctx.globalAlpha = .05
				ctx.fillStyle = '#000'
				ctx.fillRect(0,0,canvas.width,canvas.height)
				ctx.globalAlpha = .02
				for (let i = 0; i < particles.length; i++) {
					particles[i].update()
					ctx.globalAlpha = particles[i].speed * .5
					particles[i].draw()
				}
				animation = requestAnimationFrame(animate)
			}
			function calculateRelativeBrightness(red,green,blue) {
				return Math.sqrt(
					(red * red) * 0.299 +
					(green * green) * 0.587 +
					(blue * blue) * 0.114
				) / 100
			}
			function mono_color(pixels,rgb) {
				for (let y = 0; y < pixels.height; y++) {
					for ( let x = 0; x < pixels.width; x++) {
						const index = (y * 4 * pixels.width) + (x * 4)
						const red = pixels.data[index]
						const green = pixels.data[index + 1]
						const blue = pixels.data[index + 2]
						const average = (red + green + blue) / 3
						const alpha = 1 * average / 2
						pixels.data[index] = rgb[0]
						pixels.data[index + 1] = rgb[1]
						pixels.data[index + 2] = rgb[2]
						pixels.data[index + 3] = alpha
					}
				}
				ctx.putImageData(pixels,0,0)
			}
			const load = () => {
				canvas.width = canvas.clientWidth
				canvas.height = canvas.clientHeight

				scale_w = canvas.width/img.width
				scale_h = canvas.height/img.height
				scale = scale_w < scale_h ? scale_w : scale_h

				x = canvas.width / 2 - img.width * scale / 2
				y = canvas.height / 2 - img.height * scale / 2
				w = img.width * scale
				h = img.height * scale

				ctx.drawImage(img,x,y,w,h)
				pixels = ctx.getImageData(0,0,canvas.width,canvas.height)
				ctx.clearRect(0,0,canvas.width,canvas.height)
				mono_color(pixels,color)
			}
			img.src = 'res/image/peeblespair.jpg'
			img.addEventListener('load',load)
			addEventListener('resize',load)

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