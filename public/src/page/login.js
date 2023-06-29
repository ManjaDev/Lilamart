/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name login
 * @description login page
 * @version alpha
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
					[$.LOGIN.SKIP]:'skip',
					[$.LOGIN.APPLE]:'apple',
					[$.LOGIN.YAHOO]:'yahoo',
					[$.LOGIN.EMAIL]:'email',
					[$.LOGIN.PHONE]:'phone',
					[$.LOGIN.GOOGLE]:'google',
					[$.LOGIN.GITHUB]:'github',
					[$.LOGIN.TWITTER]:'twitter',
					[$.LOGIN.FACEBOOK]:'facebook',
					[$.LOGIN.MICROSOFT]:'microsoft',
				},
				LANG:{
					EN:0b1,
					ID:0b10,
				},
				BUTTON:{
					TEXT:0b100,
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
			const BUTTON = this.GET.BUTTON
			const wait = $.wait
			const app = $.fire.app
			const config = this.config
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				CONFIG
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			config.mode = MODE.HIDE
			config.lang = $.config.app.lang.toUpperCase()
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				LOGIN METHOD
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			const _id = {
				success: result => {
					console.log('login success', result.toString())
				},
				error: error => {
					console.error(error.code,error.message)
				},
				google: get => {
					return (
						  get === (BUTTON.TEXT | LANG.EN) ? 'GOOGLE'
						: get === (BUTTON.TEXT | LANG.ID) ? 'GOOGLE'
						: get === BUTTON.CLICK 
						? async () => {
								const provider = new app.auth.GoogleAuthProvider()
								app.auth()
								.signInWithPopup(provider)
								.then(ID.success)
								.catch(ID.error)
							}
						: null
					)
				},
				apple: get => {
					return (
						  get === (BUTTON.TEXT | LANG.EN) ? 'APPLE'
						: get === (BUTTON.TEXT | LANG.ID) ? 'APPLE'
						: get === BUTTON.CLICK
						? async () => {
								console.log('ap')
							}
						: null
					)
				},
				microsoft: get => {
					return (
						  get === (BUTTON.TEXT | LANG.EN) ? 'MICROSOFT'
						: get === (BUTTON.TEXT | LANG.ID) ? 'MICROSOFT'
						: get === BUTTON.CLICK
						? async () => {
								console.log('ms')
							}
						: null
					)
				},
				facebook: get => {
					return (
						  get === (BUTTON.TEXT | LANG.EN) ? 'FACEBOOK'
						: get === (BUTTON.TEXT | LANG.ID) ? 'FACEBOOK'
						: get === BUTTON.CLICK
						? async () => {
								console.log('fb')
							}
						: null
					)
				},
				twitter: get => {
					return (
						  get === (BUTTON.TEXT | LANG.EN) ? 'TWITTER'
						: get === (BUTTON.TEXT | LANG.ID) ? 'TWITTER'
						: get === BUTTON.CLICK
						? async () => {
								console.log('tw')
							}
						: null
					)
				},
				github: get => {
					return (
						  get === (BUTTON.TEXT | LANG.EN) ? 'GITHUB'
						: get === (BUTTON.TEXT | LANG.ID) ? 'GITHUB'
						: get === BUTTON.CLICK
						? async () => {
								console.log('gh')
							}
						: null
					)
				},
				yahoo: get => {
					return (
						  get === (BUTTON.TEXT | LANG.EN) ? 'YAHOO'
						: get === (BUTTON.TEXT | LANG.ID) ? 'YAHOO'
						: get === BUTTON.CLICK
						? async () => {
								console.log('yh')
							}
						: null
					)
				},
				email: get => {
					return (
						  get === (BUTTON.TEXT | LANG.EN) ? 'EMAIL'
						: get === (BUTTON.TEXT | LANG.ID) ? 'EMAIL'
						: get === BUTTON.CLICK
						? async () => {
								console.log('ml')
							}
						: null
					)
				},
				phone: get => {
					return (
						  get === (BUTTON.TEXT | LANG.EN) ? 'PHONE'
						: get === (BUTTON.TEXT | LANG.ID) ? 'TELEPON'
						: get === BUTTON.CLICK
						? async () => {
								console.log('tp')
							}
						: null
					)
				},
				skip: get => {
					return (
						  get === (BUTTON.TEXT | LANG.EN) ? 'SKIP'
						: get === (BUTTON.TEXT | LANG.ID) ? 'LEWATI'
						: get === BUTTON.CLICK
						? async () => {
								app.auth()
								.signInAnonymously()
								.then(result => {
									config.login_as = $.LOGIN_AS.ANONYM
								})
								.catch(this.error)
							}
						: null
					)
				},
			}
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				FONT
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			await load('font/lilita-one.woff2')
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				LOGIN
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			_.login = document.body.newChild('div')
			_.login.css = {
				'--width':'200px',
				'--height':'50px',
				'--icon_size':'calc(var(--height) - 20px)',
				overflow:'visible',
				width:0, height:0,
				position:'absolute',
				left:`${innerWidth/2}px`,
				top:`${innerHeight/2}px`,
				scale:.8,
				opacity:0,
			}
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				BUTTON
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			const button = async (...ids) => {
				for (let i = 0, id; i < ids.length; i++) {
					id = ID[ids[i]]
					_[id] = _.login.newChild('div')
					_[`${id}_icon`] = _[id].newChild('div')
					_[`${id}_text`] = _[id].newChild('div')
					_[id].css = {
						position:'absolute',
						width:'var(--width)',
						height:'var(--height)',
						left:`calc(var(--width)/-2)`,
						background:'var(--col_darker)',
						border:'1px solid var(--col_darker)',
						borderRadius:'calc(var(--height)/2)',
					}
					_[id].css = {
						top:`${(10+_[id].clientHeight)*(i-(ids.length/2))}px`,
					}
					_[`${id}_icon`].css = {
						'--radius':'calc(var(--height)/2)',
						position:'absolute',
						width:'var(--icon_size)',
						height:'var(--icon_size)',
						padding:'10px',
						left:'-1px', top:'-1px',
						fill:'var(--col_neutral)',
						background:'var(--col_darker)',
						border:'1px solid var(--col_darker)',
						borderRadius:'var(--radius) 0 0 var(--radius)',
					}
					_[`${id}_text`].css = {
						position:'relative',
						display: 'table-cell',
						verticalAlign:'middle',
						width:'calc(var(--width) - (var(--icon_size) + 40px))',
						height:'var(--height)',
						left:'calc(var(--icon_size) + 20px)',
						top:0,
						fontFamily:'Lilita One',
						fontSize:'22px',
						color:'var(--col_neutral)',
					}
					_[`${id}_icon`].innerHTML = await load(`icon/${id}.svg`)
					_[`${id}_text`].textContent = _id[id](BUTTON.TEXT|LANG[config.lang])
					_[id].addEventListener('click',_id[id](BUTTON.CLICK))
				}
			}
			await button(
				$.LOGIN.GOOGLE,
				$.LOGIN.APPLE,
				$.LOGIN.MICROSOFT,
				$.LOGIN.FACEBOOK,
				$.LOGIN.TWITTER,
				$.LOGIN.GITHUB,
				$.LOGIN.YAHOO,
				$.LOGIN.EMAIL,
				$.LOGIN.PHONE,
				$.LOGIN.SKIP,
			)
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				RESIZE EVENT
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			this.resize()
			addEventListener('resize', this.resize)
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				AUTH EVENT
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			await new Promise(solve => {
				app.auth().onAuthStateChanged(user => {
					user
					? (this.hide(), solve())
					: this.show()
				})
			})
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
			const logo = $.logo

			logo.show(logo.MODE.LOGIN, {en:'Sign In',id:'Masuk Akun'})
			
			_.login.enable
			this.resize()
		}
		/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
			HIDE
		━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
		hide = async () => {
			if (this.config.mode === this.MODE.HIDE) return
			else this.config.mode = this.MODE.HIDE

			const _ = this.el

			_.login.disable
			this.resize()
		}
		/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
			RESIZE
		━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
		resize = async () => {
			const _ = this.el

			switch(this.config.mode) {
				case this.MODE.SHOW:
					_.login.css = {
						scale:1,
						opacity:1,
						left:`${innerWidth/2}px`,
						top:`${innerHeight/2}px`,
					}
					break
				case this.MODE.HIDE:
					_.login.css = {
						scale:.8,
						opacity:0,
					}
					break
			}
		}
	}
})()