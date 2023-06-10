/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name logo
 * @description logo page
 * @async @class
 */
(async () => {
	//await load('page/logo.css')

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
		}
		config = {
			mode:this.mode.INTRO,
		}
		constructor() {
			this.init()
		}
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
				left:`${innerWidth/2}px`,
				top:`${innerHeight/2}px`,
				scale:.6,
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
			}
			_.title.css = {
				color:'var(--black)',
				textShadow: '2px 3px 0 var(--gold)',
				left:`${-(_.title.clientWidth/2)-4}px`,
				top:`${-(_.title.clientHeight/2)-46}px`,
			}
			_.title_shadow.css = {
				margin: '-10px',
				padding: '10px',
				textShadow:'none',
				left:`${-(_.title.clientWidth/2)+2}px`,
				top:`${-(_.title.clientHeight/2)-40}px`,
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
			_.subtitle.textContent = this.text.subtitle
			_.subtitle.css = {
				position:'absolute',
				fontFamily:'Kaushan Script',
				fontSize:'40px',
				fontWeight:'bold',
				whiteSpace:'nowrap',
				color:'var(--gold)',
				textShadow:`0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)`
			}
			_.subtitle.css = {
				left:`${-(_.subtitle.clientWidth/2)}px`,
				top:`${-(_.subtitle.clientHeight/2)+30}px`,
			}
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				STAR
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			_.star = _.logo.newChild('div')
			let svg = _.star.newChild('svg', {viewBox:'0 0 512 512'})
			svg.newChild('path', {d:'M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z'})
			svg.duplicate.duplicate

			for (let star of _.star.children) {
				star.css = {
					color:'var(--black)',
				}
				star.animate(
					[{}, {}],
					{
						duration: 2000,
						iterations : Infinity
					}
				)
			}
			this.show(this.mode.INTRO)
		}
		show = async (mode, subtitle) => {
			let _ = this.el.logo
			_.css = {
				transition:'scale .5s, opacity .5s, top .5s',
				opacity:1,
			}
			switch(mode) {
				case this.mode.INTRO:
					_.style.scale = .7
					break
				case this.mode.LOGIN:
					_.style.scale = .7
					_.style.top = `${0}px`
					break
				case this.mode.TITLE:
					_.style.scale = .4
					_.style.top = `${20}px`
					break
			}
			if (!subtitle) return

		}
		hide = async () => {
			this.el.logo.css = {
				transition:'scale .2s, opacity .2s',
				scale:.6,
				opacity:0,
			}
		}
		
		resize = async () => {

		}
	}
	return logo
})()