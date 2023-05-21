/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name crypt
 * @description encrypt & decrypt data
 * @param { new crypt(<key>) | crypt.convert = <data> }
 */
'use strict'
// ENCRYPTION
const crypt = class {
	constructor(key) {
		this.BIT = Math.sqrt(0xFF+1)
		this.HEX = new Uint8Array(new ArrayBuffer(this.BIT))
		this.hex = key
	}
	set hex(key) {
		for (let i = 0; i < key.length; i++) {
			this.HEX[i+i+1] = key[i]%this.BIT
			this.HEX[i+i] = (key[i]-this.HEX[i+i+1])/this.BIT
		}
	}
	set convert(data) {
		for (let ii = 0; ii < data.length; ii++) {
			let tmp = []
			for ( let i = 0; true; i++ ) {
				if ( i > 0 ) data[ ii ] = ( data[ ii ] - tmp[ tmp.length - 1 ] ) / this.BIT
				if ( data[ ii ] >= this.BIT ) tmp.push( data[ ii ] % this.BIT )
				else {
					tmp.push( data[ ii ] )
					data[ ii ] = 0
					break
				}
			}
			if (tmp.length == 1) tmp.push(0)
			for (let i = 0; i < tmp.length; i++ )
			data[ii] += this.HEX[tmp[i]] * Math.pow(this.BIT, i)
		}
	}
}
self.crypt = crypt