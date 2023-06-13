/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name css
 * @description initial css
 * @async
 */
(async () => { 'use strict'
	let body = document.body
	/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
		INITIALS
	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
	body.css = {
		margin:0,
		padding:0,
		background: 'var(--col_neutral)',
		textAlign: 'center',
	}
	/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
		COLORS
	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
	body.css = {
		'--col_white':'#FFF',
		'--col_black':'#222',
		'--col_gold':'#FA1',
		'--col_green':'#5A8',
		'--col_coral':'#E65',
		'--col_pink':'#B48',
		'--col_lighter':'#FEF3DC',
		'--col_light':'#FDCD6D',
		'--col_neutral':'#FBA90A',
		'--col_dark':'#9C6902',
		'--col_darker':'#342609',
		}
})()