let a = prompt("enter a  first number")

let b = prompt("enter a second number")
if (isNaN (a)|| isNaN(b)){
    throw SyntaxError("sorry this is not allowed")
}

let sum = parseInt(a) + parseInt (b)

let x = 1
try {
    
    console.log("the sum is ", sum*x)

} catch (error) {
    console.log("error aa gya bhai")
    
}
finally{
    console.log("flies are being closed db connection is being closed")
}

