/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name config
 * @description initial config
 * @async @class
 */
(async () => { 'use strict'
	class config {
		constructor(){}
		init = async $ => {
			// client : chat, cart, shop, notification, setting
			// admin : dashboard, report, transaction, goods, chat, notification, setting
			$.PAGE = {
				LOGIN:0,
				CART:1,
				SHOP:1,
				CHAT:2,
				NOTIFICATION:3,
				SETTING:5,
				GOODS:4,
			}
			$.LOGIN_AS = {
				GUEST:0,
				ADMIN:1,
				CLIENT:2,
			}
			const config = {
				page:$.PAGE.LOGIN,
				login_as:$.LOGIN_AS.GUEST,
				app:{
					title:'Lilamart',
					description:'Lila Online Shop',
					keywords:['lilamart','online','shop','store','toko','lila','web','mart'],
					icon:'favicon.ico',
					lang:'id-ID',
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
			return config
		}
	}
	return config
})()