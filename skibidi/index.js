const submit = document.getElementById("submit")
const input = document.getElementById("input")
const outputElement = document.getElementById("output")

var array = [
    'skibidi toilet ',
    'kai cenat ',
    'ice spice ',
    'looks maxxing ',
    'ohio ',
    'sigma ',
    'has a level 10000 gyatt.',
    'has a L gyatt',
    'you have GYATT to be kidding me!',
    'i GYATT something in my eye!',
    '(real)',
    'is the rizzler??? ',
    'fortnite ',
    'peter griffin ',
    'family guy ',
    '!!11!1!!1!',
    'One two buckle my shoe ',
    'W ',
    'fanum tax ',
    'mewing ',
    'mogging ',
    'rizz ',
    'baby gronk ',
    'livvy ',
    'but ',
    'and ',
    'however ',
    'sadly ',
]
submit.onclick = e => {
    if (input.value > 0) {
        let prev = "";
        var i = 1;
        var length = input.value;
        var output = "";
        while (i<=length) {
            var characterToAdd = array[Math.floor(Math.random()*array.length)]
            output += characterToAdd
            if (characterToAdd != prev){
                i++
                prev = characterToAdd
            }
        }
        outputElement.innerHTML = output;
    }
}
