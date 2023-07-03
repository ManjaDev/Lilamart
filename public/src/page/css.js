/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name css
 * @description initial css
 * @async @class
 */
(async () => { 'use strict'
	return new class {
		constructor() {
			this.el = {
				root:document.querySelector(':root'),
				body:document.body,
			}
		}
		init = async () => {
			const _ = this.el
			_.body.css = {
				'--col_white':$.config.color.white,
				'--col_black':$.config.color.black,
				'--col_gold':$.config.color.gold,
				'--col_green':$.config.color.green,
				'--col_coral':$.config.color.coral,
				'--col_pink':$.config.color.pink,
				'--col_lighter':$.config.color.lighter,
				'--col_light':$.config.color.light,
				'--col_neutral':$.config.color.neutral,
				'--col_dark':$.config.color.dark,
				'--col_darker':$.config.color.darker,
				textAlign: 'center',
				userSelect:'none',
				margin:0,
				padding:0,
				background: 'var(--col_black)',
			}
			return this
		}
	}
})()