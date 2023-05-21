/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name element
 * @description shorthand for createElement & set StyleSheets
 * @param { Element.newChild(<type>,..<attributes>) | Element.css = {<key>:<value>} }
 */
'use strict'
Element.prototype.newChild = function(element, ...attributes) {
	let el = document.createElement(element);
	attributes.forEach(attr => {
		attr = attr.split('|');
		let name  = attr[0];
		let value = attr[1]
		if (!value) value = '';
		el.setAttribute(name, value);
	});
	Object.defineProperty(el, 'css', {
		set: function(css) {
			Object.entries(css).forEach(([key, value]) => {
				let fix = [null, 'Ms', 'Moz', 'Webkit'];
				for(let i=0, len=fix.length, type; i<len; i++) {
					type = !i ? key : fix[i]+key.replace(key[0], key[0].toUpperCase());
					if(typeof this.style[type] === 'string') {
						this.style[type] = value;
						break;
					}
				}
			});
		}
	});
	this.append(el);
	return el;
}