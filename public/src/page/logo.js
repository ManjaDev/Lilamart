/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name logo
 * @description logo page
 * @async @class
 */
(async () => {
	class logo {
		el = {}
		css = {}
		text = {
			title:'Lilamart',
			subtitle:'Online Shop'
		}
		mode = {
			INTRO:0,
			LOGIN:1,
			TITLE:2,
			HIDDEN:3,
		}
		config = {
			mode:this.mode.INTRO,
		}

		constructor() {
			this.init()
		}
		/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
			INIT
		━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
		init = async () => {
			// prefixes
			let _ = this.el
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				LOGO
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			_.logo = document.body.newChild('div')
			_.logo.css = {
				userSelect:'none',
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
			_.title.textContent = this.text.title
			_.title_shadow.textContent = this.text.title
			_.title.css = _.title_shadow.css = {
				position:'absolute',
				fontFamily:'Pacifico, serif',
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
				fontSize:'40px',
				fontWeight:'bold',
				whiteSpace:'nowrap',
				color:'var(--col_neutral)',
				textShadow:`0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)`
			}
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				STAR
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			_.star = _.logo.newChild('div')
			_.star.css = {
				position: 'absolute',
				width: `${_.title.clientWidth+20}px`,
				height: `${145}px`,
				left:`${-(_.title.clientWidth/2)-10}px`,
				top:`${-106}px`,
			}
			let svg = _.star.newChild('svg', { viewBox:'0 0 512 512' })
			svg.css = {
				'--size': '30px',
				position: 'absolute',
				width: 'var(--size)',
				height: 'var(--size)',
			}
			let path = svg.newChild('path', {
				d:'M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z',
			})
			path.css = {
				fill:'var(--col_lighter)',
				opacity:'.8',
			}
			svg.clone.clone

			for(let star of _.star.children) {
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
				let anim = () => {
					star.css = {
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
			addEventListener('resize', this.resize)
		}
		/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
			SHOW
		━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
		show = async (mode, subtitle) => {
			this.config.mode = mode
			let _ = this.el
			_.logo.css = {
				transition:'scale .5s, opacity .5s, left 0s, top .5s',
				opacity:1,
			}
			this.resize()
			if (!subtitle) return
			this.text.subtitle = subtitle
			_.subtitle.innerHTML = subtitle.replace(/\S/g, '<span>$&</span>')
			for (let child of _.subtitle.children) {
				child.style.opacity = 0
				child.style.transformOrigin = '0 0'
				child.style.display = 'inline-block'
			}
			_.subtitle.css = {
				left:`${-(_.subtitle.clientWidth/2)}px`,
				top:`${-(_.subtitle.clientHeight/2)+10}px`,
			}
			await Math.wait(500)
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
			let _ = this.el
			_.logo.css = {
				transition:'scale .2s, opacity .2s, left 0s, top 0s',
				scale:parseFloat(_.logo.style.scale)-.1,
				opacity:0,
			}
			this.config.mode = this.mode.HIDDEN
		}
		/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
			RESIZE
		━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
		resize = async () => {
			let _ = this.el
			switch(this.config.mode) {
				case this.mode.INTRO:
					_.logo.css = {
						scale:.8,
						left:`${innerWidth/2}px`,
						top:`${innerHeight/2}px`,
					}
					break
				case this.mode.LOGIN:
					_.logo.css = {
						scale:.7,
						left:`${innerWidth/2}px`,
						top:`${innerHeight/2-200}px`,
					}
					break
				case this.mode.TITLE:
					_.logo.css = {
						scale:.4,
						left:`${innerWidth/2}px`,
						top:`${_.title.clientHeight/2}px`,
					}
					break
			}
		}
	}
	return logo
})()