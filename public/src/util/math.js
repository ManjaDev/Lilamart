/**
 * @author Miftachul Huda <miftachul.huda.makruf@gmail.com>
 * @copyright MANJA 2023
 * 
 * @name Math
 * @description Math Utilities
 * @param {
* 	Math.rand(<min>,<max>)
* }
 */
'use strict'
Math.rand = (min, max) => Math.trunc(Math.random() * (max - min + 1)) + min