/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name head
 * @description initial head
 * @async @class
 */
(async () => { 'use strict'
	return new class {
		constructor() {
			this.el = {
				html:document.querySelector('html'),
				charset:document.head.newChild('meta'),
				viewport:document.head.newChild('meta',{name:'viewport'}),
				description:document.head.newChild('meta',{name:'description'}),
				keywords:document.head.newChild('meta',{name:'keywords'}),
				icon:document.head.newChild('link',{rel:'icon',type:'image/x-icon'}),
			}
			this.timer = performance.now()
		}
		init = async () => {
			const _ = this.el
			document.title = $.config.app.title
			_.html.setAttribute('lang',$.config.app.lang)
			_.charset.setAttribute('charset',$.config.app.charset)
			_.viewport.setAttribute('content',`
				width=${$.config.app.viewport.width},
				user-scalable=${$.config.app.viewport['user-scalable']},
				initial-scale=${$.config.app.viewport['initial-scale']},
				minimum-scale=${$.config.app.viewport['minimum-scale']}`
			)
			_.description.setAttribute('content',$.config.app.description)
			_.keywords.setAttribute('content',$.config.app.keywords.join('|'))
			_.icon.setAttribute('href',`res/${$.config.app.icon}`)

			if ($.config.user_agent === $.USER_AGENT.MOBILE) {
				this.resize()
				addEventListener('resize',this.resize)
			}
			return this
		}
		resize = async () => {
			if (Math.round(innerWidth/10) === $.WIDTH/10) return
			const _ = this.el
			_.viewport.setAttribute('content',`
				width=${$.config.app.viewport.width},
				user-scalable=${$.config.app.viewport['user-scalable']},
				initial-scale=1,minimum-scale=1`
			)
			$.config.app.viewport['initial-scale'] =
			$.config.app.viewport['minimum-scale'] = $.SCALE
			_.viewport.setAttribute('content',`
				width=${$.config.app.viewport.width},
				user-scalable=${$.config.app.viewport['user-scalable']},
				initial-scale=${$.config.app.viewport['initial-scale']},
				minimum-scale=${$.config.app.viewport['minimum-scale']}`
			)
		}
	}
})()