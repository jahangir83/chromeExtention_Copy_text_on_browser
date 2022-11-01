// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});


changeColor.addEventListener('click', async () => {
    let [tab] =  await chorme.tabs.query({active: true, currentWindow: true});


    chrome.scripting.executeScript({

        target: {tabId: tab.id},
        func: setPageBackgroundColor,
    });
});


//the body of this function will be executed as a content script inside the current page
function setPageBackgroundColor(){
    chrome.storage.sync.get("color", ({color}) => {
        document.body.style.backgroundColor = color;
    })
}








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

func.onclick = function(){
    if(document.getSelection){
        let text = document.getSelection().toString()
        storeText(text)
        
        console.log(text);
    }
}

function storeText(value){
    word.push(value)
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