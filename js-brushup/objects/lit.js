let obj = {
    cnt: 45,
    rec: true,
    fn: () => console.log(`Fn`),
    inObj: {
        col: 'red'
    }
}

obj.fn()
obj.inObj.col = 'blue'

function calc() {
    return {
        age: 78
    }
}

calc().age = 74