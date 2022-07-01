
function Generate(){
    for(let i = 0; i < 10 ; i++){
        document.getElementsByClassName("passGenerated").item(i).textContent = random()
    }
    
}
        

function random(){
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz" + "0123456789" + "!@#$%^&*()"
    let rand = ""
    for(let i = 0; i < 14 ; i++){
        rand += str[Math.floor(Math.random() * str.length)]
    }
    return rand
}
console.log(random())
