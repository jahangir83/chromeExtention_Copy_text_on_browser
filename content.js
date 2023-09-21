

console.log("contentScript")
    //jahangir





let word = [];
let index = 0;

 
let buttonT = document.createElement("button")
buttonT.classList.add("copyText")
buttonT.id = "copy"
buttonT.setAttribute("onclick", "getText();")
buttonT.innerHTML = 'copyButton'
buttonT.style.backgroundColor = 'red'
buttonT.style.color = 'white'
buttonT.style. position= "fixed";
buttonT.style.top = "100px";
buttonT.style.right = "50px"
buttonT.style.width = "50px"
buttonT.style.height = "50px"

document.body.appendChild(buttonT)

let func = document.getElementById("copy")
function storeText(value){
    word.push(value)
}
func.onclick = function(){
    if(document.getSelection){
        let text = document.getSelection().toString()
        storeText(text)
        
        console.log(text);
    }
}


let store = document.createElement("button")
store.classList.add("storeText")
store.id = "store"
store.setAttribute("onclick", "store();")
store.innerHTML = 'Store'
store.style.backgroundColor = 'red'
store.style.color = 'white'
store.style. position= "fixed";
store.style.top = "100px";
store.style.left = "50px"
store.style.width = "50px"
store.style.height = "50px"


document.body.appendChild(store)

let s = document.getElementById("store")


s.onclick = function store(){
   
    console.log(word);

    window.localStorage.setItem('english_word', word)
}










