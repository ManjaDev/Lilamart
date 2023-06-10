/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name Math
 * @description Math Utilities
 * @param {
* 	Math.rand(<min>,<max>)
* 	Math.wait(<duration>)
* }
 */
'use strict'
Math.rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
Math.wait = duration => new Promise(s => setTimeout(s,duration))