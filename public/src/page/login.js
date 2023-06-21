/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name login
 * @description login page
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
			this.MODE = {SHOW:Symbol(),HIDE:Symbol()}
			const GET = this.GET = {
				TEXT:{BUTTON:0},
				LANG:{en:1,id:2},
				ID:{
					google:'google',
					apple:'apple',
					microsoft:'microsoft',
					facebook:'facebook',
					twitter:'twitter',
					github:'github',
					yahoo:'yahoo',
					email:'email',
					phone:'phone',
					skip:'skip',
				}
			}
			this.ID = {
				google: get => {
					return (
						get === (GET.TEXT.BUTTON | GET.LANG.en) ? 'GOOGLE'
						: get === (GET.TEXT.BUTTON | GET.LANG.id) ? 'GOOGLE'
						: null
					)
				},
				apple: get => {
					return (
						get === (GET.TEXT.BUTTON | GET.LANG.en) ? 'APPLE'
						: get === (GET.TEXT.BUTTON | GET.LANG.id) ? 'APPLE'
						: null
					)
				},
				microsoft: get => {
					return (
						get === (GET.TEXT.BUTTON | GET.LANG.en) ? 'MICROSOFT'
						: get === (GET.TEXT.BUTTON | GET.LANG.id) ? 'MICROSOFT'
						: null
					)
				},
				facebook: get => {
					return (
						get === (GET.TEXT.BUTTON | GET.LANG.en) ? 'FACEBOOK'
						: get === (GET.TEXT.BUTTON | GET.LANG.id) ? 'FACEBOOK'
						: null
					)
				},
				twitter: get => {
					return (
						get === (GET.TEXT.BUTTON | GET.LANG.en) ? 'TWITTER'
						: get === (GET.TEXT.BUTTON | GET.LANG.id) ? 'TWITTER'
						: null
					)
				},
				github: get => {
					return (
						get === (GET.TEXT.BUTTON | GET.LANG.en) ? 'GITHUB'
						: get === (GET.TEXT.BUTTON | GET.LANG.id) ? 'GITHUB'
						: null
					)
				},
				yahoo: get => {
					return (
						get === (GET.TEXT.BUTTON | GET.LANG.en) ? 'YAHOO'
						: get === (GET.TEXT.BUTTON | GET.LANG.id) ? 'YAHOO'
						: null
					)
				},
				email: get => {
					return (
						get === (GET.TEXT.BUTTON | GET.LANG.en) ? 'EMAIL'
						: get === (GET.TEXT.BUTTON | GET.LANG.id) ? 'EMAIL'
						: null
					)
				},
				phone: get => {
					return (
						get === (GET.TEXT.BUTTON | GET.LANG.en) ? 'PHONE'
						: get === (GET.TEXT.BUTTON | GET.LANG.id) ? 'TELEPON'
						: null
					)
				},
				skip: get => {
					return (
						get === (GET.TEXT.BUTTON | GET.LANG.en) ? 'SKIP'
						: get === (GET.TEXT.BUTTON | GET.LANG.id) ? 'LEWATI'
						: null
					)
				},
			}
		}
		/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
			INIT
		━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
		init = async $ => {
			this.$ = $
			const _ = this.el
			const ID = this.ID
			const GET = this.GET
			const wait = $.wait
			const app = $.fire.app
			const auth = $.fire.auth
			const config = this.config
			config.lang = $.config.app.lang
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				LOGIN METHOD
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			const login_success = result => {
				console.info(result.credential.assessToken)
			}
			const login_error = error => {
				console.error(error.code,error.message)
			}
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				GOOGLE
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			const login_google = async () => {
				app.auth()
				.signInWithPopup(new app.auth.GoogleAuthProvider())
				.then(login_success)
				.catch(login_error)
			}
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				APPLE
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			const login_apple = async () => {
				console.log('ap')
			}
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				MICROSOFT
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			const login_microsoft = async () => {
				console.log('ms')
			}
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				FACEBOOK
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			const login_facebook = async () => {
				console.log('fb')
			}
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				TWITTER
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			const login_twitter = async () => {
				console.log('tw')
			}
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				GITHUB
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			const login_github = async () => {
				console.log('gh')
			}
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				YAHOO
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			const login_yahoo = async () => {
				console.log('yh')
			}
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				EMAIL
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			const login_email = async () => {
				console.log('ml')
			}
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				PHONE
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			const login_phone = async () => {
				console.log('tp')
			}
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				SKIP
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			const login_skip = async () => {
				app.auth()
				.signInAnonymously()
				.then(login_success)
				.catch(login_error)
			}
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				FONTS
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
				// scale:.8,
				// opacity:0,
				left:`${innerWidth/2}px`,
				top:`${innerHeight/2}px`,
			}
			/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
				BUTTON
			━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
			let create_button = async (...id) => {
				for (let i=0; i<id.length; i++) {
					_[id[i]] = _.login.newChild('div')
					_[`${id[i]}_icon`] = _[id[i]].newChild('div')
					_[`${id[i]}_text`] = _[id[i]].newChild('div')
					
					_[id[i]].css = {
						position:'absolute',
						width:'var(--width)',
						height:'var(--height)',
						left:`calc(var(--width)/-2)`,
						border:'1px solid var(--col_darker)',
						borderRadius:'calc(var(--height)/2)',
					}
					_[id[i]].css = {
						top:`${(10+_[id[i]].clientHeight)*(i-(id.length/2)+1)}px`,
					}
					_[`${id[i]}_icon`].css = {
						position:'absolute',
						width:'var(--icon_size)',
						height:'var(--icon_size)',
						padding:'10px',
						left:'-1px', top:'-1px',
						fill:'var(--col_neutral)',
						background:'var(--col_darker)',
						border:'1px solid var(--col_darker)',
						borderRadius:'calc(var(--height)/2)',
					}
					_[`${id[i]}_text`].css = {
						position:'relative',
						display: 'table-cell',
						verticalAlign:'middle',
						width:'calc(var(--width) - (var(--icon_size) + 40px))',
						height:'var(--height)',
						left:'calc(var(--icon_size) + 20px)',
						top:0,
						color:'var(--col_darker)',
						fontFamily:'Lilita One',
						fontSize:'22px',
					}
					_[`${id[i]}_icon`].innerHTML = await load(`icon/${id[i]}.svg`)
					_[`${id[i]}_text`].textContent = ID[id[i]](GET.TEXT.BUTTON | GET.LANG[config.lang])
					_[id[i]].addEventListener('click',eval(`login_${id[i]}`))
				}
			}
			await create_button(
				GET.ID.google,
				// GET.ID.apple,
				// GET.ID.microsoft,
				// GET.ID.facebook,
				// GET.ID.twitter,
				// GET.ID.github,
				// GET.ID.yahoo,
				GET.ID.email,
				GET.ID.phone,
				GET.ID.skip,
			)
			addEventListener('resize', this.resize)
			return this
		}
		show = async () => {
			const _ = this.el
			const logo = this.$.logo

			_.login.enable
			logo.show(logo.MODE.LOGIN, 'Login')
		}
		hide = async () => {
			const _ = this.el
			_.login.disable
		}
		resize = async e => {
			const _ = this.el
			switch(this.config.mode) {
				case this.MODE.SHOW:
					_.login.css = {
						scale:1,
						left:`${innerWidth/2}px`,
						top:`${innerHeight/2}px`,
					}
					break
				case this.MODE.HIDE:
					break
			}
		}
	}
})()