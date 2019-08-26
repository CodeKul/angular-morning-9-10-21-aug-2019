function fnPrm(fn) {
    fn()
}

function prm() {
    console.log(`This fn coming as parameter`)
}

fnPrm(prm)
fnPrm(function () {
    console.log(`Ano fn`)
})
fnPrm(() => console.log(`Lambda Prm`))