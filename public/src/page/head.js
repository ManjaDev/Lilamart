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
		init = async () => {
			document.querySelector('html').setAttribute('lang', $.config.app.lang)
			document.title = $.config.app.title
			document.head.newChild('meta',{charset:$.config.app.charset})
			document.head.newChild('meta',{name:'viewport', content:`width=${$.config.app.viewport.width}, height=${$.config.app.viewport.height}, user-scalable=${$.config.app.viewport['user-scalable']}, initial-scale=${$.config.app.viewport['initial-scale']}, minimum-scale=${$.config.app.viewport['minimum-scale']}, maximum-scale=${$.config.app.viewport['maximum-scale']}`})
			document.head.newChild('meta',{name:'description', content:$.config.app.description})
			document.head.newChild('meta',{name:'keywords', content:$.config.app.keywords.join('|')})
			document.head.newChild('link',{rel:'shortcut icon', href:`res/${$.config.app.icon}`, type:'image/x-icon'})
		}
	}
})()