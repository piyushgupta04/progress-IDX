const printLine = () => {
    console.log(`----------------------------x----------------------------`)
    // no return coz I use this to print line
}
printLine()

// Arrow Fn
let sayMyName = (arguement) => {
    return `Your name is ${arguement}`
}

// sayMyName("Piyush")

let yourName = sayMyName("Piyush")
console.log(yourName);


console.log(`sabse pahle jaan lo ki callback fn kya hota ha`);

