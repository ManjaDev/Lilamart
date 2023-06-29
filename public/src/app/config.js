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
		init = async () => {
			$.PAGE = {
				CART:Symbol(),
				SHOP:Symbol(),
				CHAT:Symbol(),
				LOGIN:Symbol(),
				STOCK:Symbol(),
				REPORT:Symbol(),
				ACCOUNT:Symbol(),
				SETTING:Symbol(),
				DASHBOARD:Symbol(),
				TRANSACTION:Symbol(),
				NOTIFICATION:Symbol(),
			}
			$.LOGIN = {
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
			$.LOGIN_AS = {
				ADMIN:Symbol(),
				CLIENT:Symbol(),
				ANONYM:Symbol(),
			}
			return {
				page:$.PAGE.LOGIN,
				login_as:$.LOGIN_AS.GUEST,
				app:{
					title:'Lilamart',
					description:'Lila Online Shop',
					keywords:['lilamart','online','shop','store','toko','lila','web','mart'],
					icon:'favicon.ico',
					lang:'id',
					charset:'utf-8',
					viewport:{
						width:'device-width',
						height:'device-height',
						'user-scalable':'no',
						'initial-scale':1,
						'minimum-scale':1,
						'maximum-scale':1,
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