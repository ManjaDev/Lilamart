/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name logo
 * @description logo page
 * @async @class
 */
(async () => {
	return new class {
		/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
			CONSTRUCTOR
		━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
		constructor() {
			this.el = {}
			this.config = {}
			this.MODE = {
				INTRO:Symbol(),
				LOGIN:Symbol(),
				TITLE:Symbol(),
				HIDE:Symbol(),
			}
		}
		/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
			INIT
		━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
		init = async () => {
			const _ = this.el
			const MODE = this.MODE
			const config = this.config
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				CONFIG
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			config.mode = MODE.HIDE
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				FONTS
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			await load('font/pacifico.woff2')
			await load('font/kaushan-script.woff2')
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				LOGO
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			_.logo = document.body.newChild('div')
			_.logo.css = {
				overflow:'visible',
				width:0, height:0,
				position:'absolute',
				scale:.7,
				opacity:0,
			}
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				TITLE
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			_.title_shadow = _.logo.newChild('div')
			_.title = _.logo.newChild('div')
			_.title.textContent = $.config.app.title
			_.title_shadow.textContent = $.config.app.title
			_.title.css = _.title_shadow.css = {
				position:'absolute',
				fontFamily:'Pacifico',
				fontSize:'100px',
				fontWeight:'bold',
				whiteSpace:'nowrap',
			}
			_.title.css = {
				color:'var(--col_darker)',
				textShadow: '2px 3px 0 var(--col_neutral)',
				left:`${-(_.title.clientWidth/2)-4}px`,
				top:`${-136}px`,
			}
			_.title_shadow.css = {
				margin: '-10px',
				padding: '10px',
				textShadow:'none',
				left:`${-(_.title.clientWidth/2)+2}px`,
				top:`${-130}px`,
				background:'linear-gradient(45deg, transparent 45%, black 45%, black 55%, transparent 0)',
				backgroundSize:'.05em .05em',
				backgroundClip:'text',
				textFillColor: 'transparent',
			}
			anime({
				targets:_.title_shadow,
				backgroundPosition: ['0', '-100%'],
				easing:'linear',
				duration:10000,
				loop:true,
			})
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				SUBTITLE
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			_.subtitle = _.logo.newChild('div')
			_.subtitle.css = {
				position:'absolute',
				fontFamily:'Kaushan Script',
				fontSize:'50px',
				fontWeight:'bold',
				whiteSpace:'nowrap',
				color:'var(--col_neutral)',
				textShadow:`0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)`
			}
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				STAR SVG
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			_.star = _.logo.newChild('div')
			_.star.css = {
				position: 'absolute',
				width: `${_.title.clientWidth+20}px`,
				height: `${145}px`,
				left:`${-(_.title.clientWidth/2)-10}px`,
				top:`${-106}px`,
				fill:'var(--col_lighter)',
				opacity:'.8',
			}
			const svg = await load(`icon/star.svg`)
			_.star.innerHTML = svg+svg+svg
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				STAR ANIMATIOH
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			for (const star of _.star.children) {
				star.css = {
					position:'absolute',
					width:'var(--size)',
					height:'var(--size)',
				}
				star.animate(
					[
						{rotate:'0deg'},
						{rotate:'180deg'},
					],
					{
						delay:Math.rand(0, 300),
						duration:1000,
						iterations:Infinity,
					}
				)
				const anim = () => {
					star.css = {
						'--size': `${Math.rand(15,30)}px`,
						left:`calc(${Math.rand(0, 100)}% - var(--size)/2)`,
						top:`calc(${Math.rand(0, 100)}% - var(--size)/2)`,
					}
					anime({
						targets:star,
						scale:[0,1.3],
						direction:'alternate',
						easing: 'easeInOutSine',
						delay:Math.rand(0, 300),
						duration:300,
						complete:anim,
					})
				}
				anim()
			}
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				RESIZE EVENT
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			this.resize()
			addEventListener('resize', this.resize)
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				RETURN
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			return this
		}
		/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
			SHOW
		━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
		show = async (mode, subtitle) => {
			const _ = this.el
			const wait = $.wait
			const MODE = this.MODE
			const config = this.config

			if (config.mode === MODE.HIDE) _.logo.enable

			config.mode = mode
			config.lang = $.config.app.lang

			_.logo.css = {
				transition:'scale .5s, opacity .5s, left 0s, top .5s',
				opacity:1,
			}
			this.resize()

			if (!subtitle) return
			config.subtitle = subtitle

			for (let child of _.subtitle.children)
				child.css = {
					transition:'opacity .2s',
					opacity:0,
				}
			await wait(200)

			_.subtitle.innerHTML = subtitle[config.lang].replace(/\S/g, '<span>$&</span>')

			for (let child of _.subtitle.children)
				child.css = {
					opacity:0,
					transformOrigin:'0 0',
					display:'inline-block',
				}
			_.subtitle.css = {
				left:`${-(_.subtitle.clientWidth/2)}px`,
				top:`${-20}px`,
			}
			anime({
				targets: _.subtitle.children,
				opacity:[0,1],
				translateX: ["0.55em", 0],
				translateY: ["1.1em", 0],
				translateZ: 0,
				rotateZ: [-180, 0],
				duration: 750,
				easing: "easeOutExpo",
				delay: (el, i) => 50 * i,
			})
		}
		/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
			HIDE
		━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
		hide = async () => {
			if (this.config.mode === this.MODE.HIDE) return
			else this.config.mode = this.MODE.HIDE

			const _ = this.el
			const wait = $.wait

			_.logo.css = {
				transition:'scale .2s, opacity .2s, left 0s, top 0s',
				scale:parseFloat(_.logo.style.scale)-.1,
				opacity:0,
			}
			await wait(200)
			_.logo.disable
		}
		/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
			RESIZE
		━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
		resize = async () => {
			const _ = this.el
			const MODE = this.MODE
			const config = this.config

			switch(config.mode) {
				case MODE.INTRO:
					_.logo.css = {
						scale:.8,
						left:`${innerWidth/2}px`,
						top:`${innerHeight/2}px`,
					}
					break
				case MODE.LOGIN:
					_.logo.css = {
						scale:.7,
						left:`${innerWidth/2}px`,
						top:`${innerHeight/2-400}px`,
					}
					break
				case MODE.TITLE:
					_.logo.css = {
						scale:.4,
						left:`${innerWidth/2}px`,
						top:`${_.title.clientHeight/2}px`,
					}
					break
			}
		}
	}
})()