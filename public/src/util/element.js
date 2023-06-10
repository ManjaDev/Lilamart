/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name element
 * @description shorthand for createElement & setStyleSheets
 * @param { Element.newChild(<type>,..<attributes>) | Element.css = {<key>:<value>} }
 */
(async () => { 'use strict'
	let fix = [null, 'Ms', 'Moz', 'Webkit']
	let style = function(css) {
		console.log(css)
		Object.entries(css).forEach(([key, value]) => {
			if(key[1] === '-') {
				this.style.setProperty(key, value)
				return
			}
			for(let i=0, len=fix.length, type; i<len; i++) {
				type = !i ? key : fix[i]+key.replace(key[0], key[0].toUpperCase())
				if(typeof this.style[type] === 'string') this.style[type] = value
			}
		})
	}
	Object.defineProperty(document.body, 'css', { set:style })
	Element.prototype.newChild = function(element, attr) {
		let parent = this
		let el = document.createElement(element)
		let before = getComputedStyle(el, ':before')
		let after = getComputedStyle(el, ':after')

		el[':before'] = before
		el[':after'] = after

		if(!!attr) Object.entries(attr).forEach(([name,value]) => el.setAttribute(name, value))


		Object.defineProperty(el, 'css', { set:style })
	
		Object.defineProperty(el, 'enable', {
			get: () => parent.append(el)
		})

		Object.defineProperty(el, 'disable', {
			get: () => el.remove()
		})

		Object.defineProperty(el, 'duplicate', {
			get: () => {
				parent.append(el.cloneNode(true))
				return el
			}
		})

		el.enable
		return el
	}
})()
