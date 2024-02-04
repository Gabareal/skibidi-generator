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
    'gyatt ',
    'is the rizzler??? ',
    'goon ',
    'W ',
    'edging ',
    'fanum tax ',
    'penis ',
    'mewing ',
    'mogging ',
    'rizz ',
    'baby gronk ',
    'livvy ',
    'XQC ',
    'BTS ',
    'but ',
    'and ',
    'however ',
    'sadly ',
]
submit.onclick = e => {
    if (input.value > 0) {
        var i = 1;
        var length = input.value;
        var output = "";
        while (i<=length) {
            var characterToAdd = array[Math.floor(Math.random()*array.length)]
            output += characterToAdd
            console.log(output)
            i++
        }
        outputElement.innerHTML = output;
    }
}