var text01 = `Aoieu $100 55.5%`

var regex01 = /[a-zA-Z0-9]/g
var regex02 = /\w/g

var regex03 = /\d/g
var regex04 = /\s/g
var regex05 = /[^\w]/g
var regex06 = /[\W]/g

const loop = (targetText, reg) => {
  while((result = reg.exec(targetText)) !== null) {
    console.log(result)
  }
}
console.log('\nregex01:')
loop(text01, regex01)
console.log('\nregex02:')
loop(text01, regex02)
console.log('\nregex03:')
loop(text01, regex03)
console.log('\nregex04:')
loop(text01, regex04)
console.log('\nregex05:')
loop(text01, regex05)
console.log('\nregex06:')
loop(text01, regex06)



