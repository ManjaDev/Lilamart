/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name config
 * @description initial config
 * @async @class
 */
(async () => { 'use strict'
	return new class {
		constructor() {
			const PAGE = {
				CART:Symbol(),
				CHAT:Symbol(),
				LOGO:Symbol(),
				SHOP:Symbol(),
				LOGIN:Symbol(),
				STOCK:Symbol(),
				NAVBAR:Symbol(),
				REPORT:Symbol(),
				ACCOUNT:Symbol(),
				SETTING:Symbol(),
				DASHBOARD:Symbol(),
				TRANSACTION:Symbol(),
				NOTIFICATION:Symbol(),
			}
			const LOGIN = {
				SKIP:Symbol(),
				APPLE:Symbol(),
				YAHOO:Symbol(),
				EMAIL:Symbol(),
				PHONE:Symbol(),
				GOOGLE:Symbol(),
				GITHUB:Symbol(),
				TWITTER:Symbol(),
				FACEBOOK:Symbol(),
				MICROSOFT:Symbol(),
			}
			const LOGIN_AS = {
				ADMIN:Symbol(),
				CLIENT:Symbol(),
				ANONYM:Symbol(),
			}
			const USER_AGENT = {
				DESKTOP:Symbol(),
				MOBILE:Symbol(),
			}
			Object.defineProperties($,{
			  WIDTH:{get:()=>720},
			  SCALE:{get:()=>(innerWidth/720)},
			  PAGE:{value:PAGE},
			  LOGIN:{value:LOGIN},
			  LOGIN_AS:{value:LOGIN_AS},
			  USER_AGENT:{value:USER_AGENT},
			})
		}
		init = async () => {
			return {
				page:$.PAGE.LOGIN,
				login_as:$.LOGIN_AS.ANONYM,
				user_agent:(navigator.userAgent.search('Mobile') === -1
					? $.USER_AGENT.DESKTOP
					: $.USER_AGENT.MOBILE),
				app:{
					title:'Lilamart',
					description:'Lila Online Shop',
					keywords:['lilamart','online','shop','store','toko','lila','web','mart'],
					icon:'favicon.ico',
					lang:'id',
					charset:'utf-8',
					viewport:{
						width:'device-width',
						'user-scalable':'yes',
						'initial-scale':'1',
				    'minimum-scale':'1',
					},
				},
				color:{
					white:'#FFF',
					black:'#222',
					gold:'#FA1',
					green:'#5A8',
					coral:'#E65',
					pink:'#B48',
					lighter:'#FEF3DC',
					light:'#FDCD6D',
					neutral:'#FBA90A',
					dark:'#9C6902',
					darker:'#342609',
				},
			}
		}
	}
})()