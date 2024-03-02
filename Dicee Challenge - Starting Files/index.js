var randomNumber1 = Math.random()
randomNumber1 *= 6
randomNumber1 += 1
randomNumber1 = Math.floor(randomNumber1)
console.log(randomNumber1)

var im1 = document.getElementsByClassName('img1')
// var path1 = `images/dice${randomNumber1}.png`
var path1 = 'images/dice' + randomNumber1 + '.png'
im1[0].setAttribute('src', path1)

var randomNumber2 = Math.random()
randomNumber2 *= 6
randomNumber2 += 1
randomNumber2 = Math.floor(randomNumber2)
console.log(randomNumber2)

var im2 = document.getElementsByClassName('img2')
var path2 = `images/dice${randomNumber2}.png`
im2[0].setAttribute('src', path2)

var h1text = document.getElementsByTagName('h1')[0]
if (randomNumber1 > randomNumber2) {
  h1text.innerHTML = '🚩Player 1 wins!'
} else if (randomNumber1 < randomNumber2) {
  h1text.innerHTML = 'Player 2 wins!🚩'
} else {
  h1text.innerHTML = 'Its a Draw!'
}
