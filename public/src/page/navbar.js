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
				TITLE:{
					[$.PAGE.CART]:{EN:'Cart',ID:'Keranjang'},
					[$.PAGE.SHOP]:{EN:'Shop',ID:'Belanja'},
					[$.PAGE.CHAT]:{EN:'Chat',ID:'Pesan'},
					[$.PAGE.STOCK]:{EN:'Stock',ID:'Stok'},
					[$.PAGE.REPORT]:{EN:'Report',ID:'Laporan'},
					[$.PAGE.ACCOUNT]:{EN:'Account',ID:'Akun'},
					[$.PAGE.SETTING]:{EN:'Setting',ID:'Pengaturan'},
					[$.PAGE.DASHBOARD]:{EN:'Dashboard',ID:'Dasbor'},
					[$.PAGE.TRANSACTION]:{EN:'Transaction',ID:'Transaksi'},
					[$.PAGE.NOTIFICATION]:{EN:'Notification',ID:'Notifikasi'},
				},
			}
		}
		/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
			INIT
		━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
		init = async () => {
			const _ = this.el
			const PAGE = $.PAGE
			const ID = this.GET.ID
			const MODE = this.MODE
			const TITLE = this.GET.TITLE
			const config = this.config
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				CONFIG
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			config.page = $.config.page
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
				backgroundColor:'#FFF3',
				backdropFilter:'blur(7px)',
				borderTop:'1px solid var(--col_lighter)',
				left:0,
				top:`${innerHeight+50}px`,
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
						fill:'var(--col_neutral)',
						// background:'var(--col_lighter)',
						// borderRadius:'calc(var(--icon_size) / 3)',
						top:'calc((var(--navbar_size) - var(--icon_size)) / 2)',
					}
					// _[id].css = {
					// 	left:`${(innerWidth/2/ids.length)+innerWidth*(i/ids.length)-(_[id].clientWidth/2)}px`,
					// }
					_[id].innerHTML = await load(`icon/${id}.svg`)
					_[id].addEventListener('click',async () => await _id(ids[i]))
				}
			}
			await button(
				PAGE.CHAT,
				PAGE.NOTIFICATION,
				PAGE.SHOP,
				PAGE.CART,
				PAGE.STOCK,
				PAGE.DASHBOARD,
				PAGE.TRANSACTION,
				PAGE.ACCOUNT,
				PAGE.SETTING,
			)
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				CLICK EVENT
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			const _id = async id => {
				$.logo.show($.logo.MODE.TITLE,{
					en:TITLE[id].EN,
					id:TITLE[id].ID,
				})
				try {
					await $[ID[config.page]].hide()
				} catch(e) {}

				$.config.page = config.page = id

				try {
					$[ID[config.page]].show()
				} catch(e) {
					$[ID[config.page]]
					= await(await load(`page/${ID[id]}.js`)).init()
					$[ID[config.page]].show()
				}
			}
			await this.hide()
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				RESIZE EVENT
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
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
			const ID = this.GET.ID
			const config = this.config
			const PAGE = $.PAGE
			const login_as = $.config.login_as
			const LOGIN_AS = $.LOGIN_AS
			const enable = (...ids) => ids.forEach(id => _[ID[id]].enable)

			login_as === LOGIN_AS.ADMIN
			? enable(
				PAGE.CHAT,
				PAGE.NOTIFICATION,
				PAGE.STOCK,
				PAGE.DASHBOARD,
				PAGE.TRANSACTION,
				PAGE.ACCOUNT,
				PAGE.SETTING,
			)
			: login_as === LOGIN_AS.ANONYM
			| login_as === LOGIN_AS.CLIENT
			? enable(
				PAGE.CHAT,
				PAGE.NOTIFICATION,
				PAGE.SHOP,
				PAGE.CART,
				PAGE.SETTING,
			)
			: null

			_.navbar.enable
			await this.resize()
			await $.wait(500)
		}
		/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
			HIDE
		━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
		hide = async () => {
			if (this.config.mode === this.MODE.HIDE) return
			else this.config.mode = this.MODE.HIDE

			const _ = this.el
			const ID = this.GET.ID
			const PAGE = $.PAGE
			const disable = (...ids) => ids.forEach(id => _[ID[id]].disable)

			disable(
				PAGE.CHAT,
				PAGE.NOTIFICATION,
				PAGE.STOCK,
				PAGE.DASHBOARD,
				PAGE.TRANSACTION,
				PAGE.ACCOUNT,
				PAGE.SHOP,
				PAGE.CART,
				PAGE.SETTING,
			)
			await this.resize()
			await $.wait(200)
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
					_.navbar.css = {
						transition:'top .5s',
						top:`${innerHeight-_.navbar.clientHeight}px`,
					}
					for (let i=0,icon=_.navbar.children; i<icon.length; i++) {
						icon[i].css = {
							left:`${(innerWidth/2/icon.length)+innerWidth*(i/icon.length)-(icon[i].clientWidth/2)}px`,
						}
					}
					break
				case MODE.HIDE:
					_.navbar.css = {
						transition:'top .2s',
						top:`${innerHeight+50}px`,
					}		
					break
			}
		}
	}
})()