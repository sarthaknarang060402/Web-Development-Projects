// var generateName = require('sillyname')
import generateName from 'sillyName' // to use this , add type:module in package.json
var sillyName = generateName()

console.log(`My name is ${sillyName}`)

// const superheroes = require('superheroes');
import superheroes from 'superheroes'

superheroes.all
//=> ['3-D Man', 'A-Bomb', …]

console.log(superheroes.random())
//=> 'Spider-Ham'
