/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name navbar
 * @description navigation bar
 * @async @class
 */
(async () => { 'use strict'
	return new class {
		// client : chat, cart, shop, notification, setting
		// admin : dashboard, report, transaction, stock, chat, notification, setting
		/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
			CONSTRUCTOR
		━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
		constructor() {
			this.el = {}
			this.config = {}
			this.MODE = {
				SHOW:Symbol(),
				HIDE:Symbol(),
			}
			this.GET = {
				ID:{
					[$.PAGE.CART]:'cart',
					[$.PAGE.SHOP]:'shop',
					[$.PAGE.CHAT]:'chat',
					[$.PAGE.STOCK]:'stock',
					[$.PAGE.REPORT]:'report',
					[$.PAGE.ACCOUNT]:'account',
					[$.PAGE.SETTING]:'setting',
					[$.PAGE.DASHBOARD]:'dashboard',
					[$.PAGE.TRANSACTION]:'transaction',
					[$.PAGE.NOTIFICATION]:'notification',
				},
				LANG:{
					EN:0b1,
					ID:0b10,
				},
				TITLE:{
					TEXT:0b100,
				},
				BUTTON:{
					CLICK:0b1000,
				},
			}
		}
		/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
			INIT
		━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
		init = async () => {
			const _ = this.el
			const MODE = this.MODE
			const ID = this.GET.ID
			const LANG = this.GET.LANG
			const TITLE = this.GET.TITLE
			const BUTTON = this.GET.BUTTON
			const config = this.config
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				CONFIG
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			config.mode = MODE.HIDE
			config.lang = $.config.app.lang.toUpperCase()
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				NAVBAR METHOD
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			const _id = {
				[$.PAGE.CART]: get => {
					return (
						  get === (TITLE.TEXT | LANG.EN) ? 'GOOGLE'
						: get === (TITLE.TEXT | LANG.ID) ? 'GOOGLE'
						: get === BUTTON.CLICK 
						? async () => {

							}
						: null
					)
				},
				[$.PAGE.SHOP]: get => {
					return (
						  get === (TITLE.TEXT | LANG.EN) ? 'GOOGLE'
						: get === (TITLE.TEXT | LANG.ID) ? 'GOOGLE'
						: get === BUTTON.CLICK 
						? async () => {
							
							}
						: null
					)
				},
				[$.PAGE.CHAT]: get => {
					return (
						  get === (TITLE.TEXT | LANG.EN) ? 'GOOGLE'
						: get === (TITLE.TEXT | LANG.ID) ? 'GOOGLE'
						: get === BUTTON.CLICK 
						? async () => {
							
							}
						: null
					)
				},
				[$.PAGE.STOCK]: get => {
					return (
						  get === (TITLE.TEXT | LANG.EN) ? 'GOOGLE'
						: get === (TITLE.TEXT | LANG.ID) ? 'GOOGLE'
						: get === BUTTON.CLICK 
						? async () => {
							
							}
						: null
					)
				},
				[$.PAGE.REPORT]: get => {
					return (
						  get === (TITLE.TEXT | LANG.EN) ? 'GOOGLE'
						: get === (TITLE.TEXT | LANG.ID) ? 'GOOGLE'
						: get === BUTTON.CLICK 
						? async () => {
							
							}
						: null
					)
				},
				[$.PAGE.ACCOUNT]: get => {
					return (
						  get === (TITLE.TEXT | LANG.EN) ? 'GOOGLE'
						: get === (TITLE.TEXT | LANG.ID) ? 'GOOGLE'
						: get === BUTTON.CLICK 
						? async () => {
							
							}
						: null
					)
				},
				[$.PAGE.SETTING]: get => {
					return (
						  get === (TITLE.TEXT | LANG.EN) ? 'GOOGLE'
						: get === (TITLE.TEXT | LANG.ID) ? 'GOOGLE'
						: get === BUTTON.CLICK 
						? async () => {
							
							}
						: null
					)
				},
				[$.PAGE.DASHBOARD]: get => {
					return (
						  get === (TITLE.TEXT | LANG.EN) ? 'GOOGLE'
						: get === (TITLE.TEXT | LANG.ID) ? 'GOOGLE'
						: get === BUTTON.CLICK 
						? async () => {
							
							}
						: null
					)
				},
				[$.PAGE.TRANSACTION]: get => {
					return (
						  get === (TITLE.TEXT | LANG.EN) ? 'GOOGLE'
						: get === (TITLE.TEXT | LANG.ID) ? 'GOOGLE'
						: get === BUTTON.CLICK 
						? async () => {
							
							}
						: null
					)
				},
				[$.PAGE.NOTIFICATION]: get => {
					return (
						  get === (TITLE.TEXT | LANG.EN) ? 'GOOGLE'
						: get === (TITLE.TEXT | LANG.ID) ? 'GOOGLE'
						: get === BUTTON.CLICK 
						? async () => {
							
							}
						: null
					)
				},
			}
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				NAVBAR
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			_.navbar = document.body.newChild('div')
			_.navbar.css = {
				'--navbar_size':'100px',
				'--icon_size':'80px',
				'--icon_padding':'5px',
				position:'fixed',
				width:'100%',
				height:'var(--navbar_size)',
				background:'var(--col_black)',
			}
			_.navbar.css = {
				left:0,
				top:`${innerHeight-_.navbar.clientHeight}px`,
			}
			
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				BUTTON
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			const button = async (...ids) => {
				for (let i = 0, id, click; i < ids.length; i++) {
					id = ID[ids[i]]
					_[id] = _.navbar.newChild('div')
					_[id].css = {
						margin:0,
						padding:'var(--icon_padding)',
						position:'absolute',
						width:'calc(var(--icon_size) - (var(--icon_padding) * 2))',
						height:'calc(var(--icon_size) - (var(--icon_padding) * 2))',
						fill:'var(--col_light)',
						// background:'var(--col_lighter)',
						// borderRadius:'calc(var(--icon_size) / 3)',
						top:'calc((var(--navbar_size) - var(--icon_size)) / 2)',
					}
					_[id].css = {
						left:`${(innerWidth/2/ids.length)+innerWidth*(i/ids.length)-(_[id].clientWidth/2)}px`,
					}
					_[id].innerHTML = await load(`icon/${id}.svg`)
					// _[id].addEventListener('click',_id[ids[i]](BUTTON.CLICK))
					click = async e => {
						
					}
					_[id].addEventListener('click',click)
				}
			}
			  $.config.login_as === $.LOGIN_AS.ADMIN
			? await button(
				$.PAGE.CHAT,
				$.PAGE.STOCK,
				$.PAGE.TRANSACTION,
				$.PAGE.DASHBOARD,
				$.PAGE.ACCOUNT,
				$.PAGE.NOTIFICATION,
				$.PAGE.SETTING,
			)
			: $.config.login_as === $.LOGIN_AS.ANONYM
			| $.config.login_as === $.LOGIN_AS.CLIENT
			? await button(
				$.PAGE.CART,
				$.PAGE.SHOP,
				$.PAGE.CHAT,
				$.PAGE.ACCOUNT,
				$.PAGE.STOCK,
				$.PAGE.REPORT,
				$.PAGE.SETTING,
				$.PAGE.DASHBOARD,
				$.PAGE.TRANSACTION,
				$.PAGE.NOTIFICATION,
			)
			: null
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
		show = async () => {
			if (this.config.mode === this.MODE.SHOW) return
			else this.config.mode = this.MODE.SHOW

			const _ = this.el
			const page = $.config.page
			const login_as = $.config.login_as

			switch(login_as) {

			}
			_.navbar.enable
		}
		/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
			HIDE
		━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
		hide = async () => {
			if (this.config.mode === this.MODE.HIDE) return
			else this.config.mode = this.MODE.HIDE

			const _ = this.el

			_.navbar.disable
		}
		/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
			RESIZE
		━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
		resize = async () => {
			const _ = this.el
			const MODE = this.MODE
			const config = this.config

			switch(config.mode) {
				case MODE.SHOW:
					break
				case MODE.HIDE:
					break
			}
		}
	}
})()