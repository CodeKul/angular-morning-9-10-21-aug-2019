function fnRtn() {

    console.log(`fnRtn Called`)
    function inFn() {
        console.log(`Inner Function`)
    }

    return inFn
}

let inFn = fnRtn()
console.log(inFn)
inFn()
fnRtn()()

function fnRtnLmb() {
    console.log(`fnRtnLmb`)
    return () => console.log(`Lambda Returned`)
}

let fnNm = () => () => console.log(`Lambda returning lambda`)
let fnAn = function() {
    return function() {
        
    }
}