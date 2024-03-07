function addPoints(num1, num2){
    let sum = num1 + num2
    num1 = num1.toString()
    num2 = num2.toString()
    let a = num1.length - num1.indexOf(".") - 1
    let b = num2.length - num2.indexOf(".") - 1

    let max = a > b? a : b;
    return sum.toFixed(max)
}

//console.log(addPoints(0.21354, 0.1))

for(let i = 0; i < 1; i = i+0.1 ){
    console.log(i.toFixed(1))
}