/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name element
 * @description shorthand for createElement & setStyleSheets
 * @param { Element.newChild(<type>,..<attributes>) | Element.css = {<key>:<value>} }
 */
(async () => { 'use strict'
	const fix = [null, 'Ms', 'Moz', 'Webkit']
	const css = function(css) {
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
	const init = function() {
		const parent = this.parentElement
		Object.defineProperty(this, 'enable', { get: () => parent.append(this) })
		Object.defineProperty(this, 'disable', { get: () => this.remove() })
		Object.defineProperty(this, 'clone', {
			get: () => {
				let node = this.cloneNode(true)
				define_property(parent, node)
				parent.append(node)
				return node
			}
		})
	}
	const newChild = function(element, attr) {
		let el
		switch(element) {
			case 'svg':
			case 'path':
				el = document.createElementNS('http://www.w3.org/2000/svg', element)
				break
			default:
				el = document.createElement(element)
				break
		}

		const before = getComputedStyle(el, ':before')
		const after = getComputedStyle(el, ':after')

		el[':before'] = before
		el[':after'] = after

		if(!!attr) Object.entries(attr).forEach(([name,value]) => el.setAttribute(name, value))
		this.append(el)
		el.init
		return el
	}

	Object.defineProperties(Element.prototype,{
		'css':{set:css},
		'init':{get:init},
		'newChild':{value:newChild},
	})
})()
