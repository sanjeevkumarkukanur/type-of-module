

const readline = require('readline')

// readline.question(`give any number?`, numOne =>{
//     readline.question("another number", numTwo => {
//         console.log(Number(numOne) + Number(numTwo))
//         readline.close()
//     })
// })
function takeInput(){
    let rd = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    return new Promise((resolve, reject)=>{
        rd.question("enter number", number=>{
            rd.close()
            resolve(Number(number))
            
        })
    })
}

async function main(){
    num1 = await takeInput()
    num2 = await takeInput()
    console.log(num1 + num2)

}
main()
console.log("hello")