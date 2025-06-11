let b1 = document.querySelector(".b1")
let inp1 = document.querySelector(".inp1")
let add1 = document.querySelector(".add1")
let main = document.querySelector("main")
main.style.cssText=`
display:flex;
flex-flow:row wrap;
gap:20px
`
b1.addEventListener("click", () => {
    inp1.style.display = "block"
    add1.style.display = "block"
    inp1.focus()
})

if(localStorage.length != 0){
    console.log(localStorage[localStorage.key(0)])
  inp1.addEventListener("keypress",(e)=>{
    if(e.key == "Enter"){
        add1.click()
    }
  })
  add1.addEventListener("click", createGroup)
}else{
  inp1.addEventListener("keypress",(e)=>{
    if(e.key == "Enter"){
        add1.click()
    }
  })
  add1.addEventListener("click", createGroup)
}

inp1.addEventListener("keypress",(e)=>{
    if(e.key == "Enter"){
        add1.click()
    }
})

add1.addEventListener("click", createGroup)

function createGroup (){
    let group = document.createElement("div")
    group.className = "group"

    let header = document.createElement("div")
    header.className = "header"
    header.style.cssText = `
    display:flex;
    justify-content:space-between;
    padding: 10px 5px;
    `

    if(inp1.value.length > 0){
        let h1 = document.createElement("h3")
        h1.appendChild(document.createTextNode(inp1.value))

        let bkgr = document.createElement("ul")
        let arr = ["var(--c2)", "var(--c4)", "var(--c5)", "var(--c6)", "var(--c7)"]
        let arr2 = ["w", "r", "b", "o", "g"]
        for (let i = 0; i < 5; i++) {
            let color = document.createElement("li")
            color.className = arr2[i]
            color.style.cssText = `
            width:20px ;height:20px;
            background-color:${arr[i]};
            border: 1.5px solid black;
            `

            bkgr.appendChild(color)
            bkgr.style.cssText = `
            list-style: none;
            display:flex;
            flex-flow:row nowrap;
            gap:2px;
            `
        }

        let del1 = document.createElement("button")
        del1.innerHTML = `<i class="fa-solid fa-x"></i>`
        del1.style.cssText = `
        width:24px; height:20px;
        background-color: var(--c2);
        border: 1.5px solid black;
        `
        bkgr.appendChild(del1)

        header.appendChild(h1)
        header.appendChild(bkgr)

        let b2 = document.createElement("button")
        b2.className = "b1"
        b2.classList.add("b2")
        b2.textContent = "list item"

        group.appendChild(header)
        group.appendChild(b2)
        group.style.cssText = `
        flex:400px;
        min-height:300px;
        border:1px solid black;
        padding:10px;
        border-radius: 4px;
        margin-bottom:10px ;
        background-color:${arr[0]};
        transition: 0.3s;
        `

        main.appendChild(group)
        inp1.value = ""
        inp1.style.display = "none"
        add1.style.display = "none"

        // Attach color change logic to the newly added group
        
        color(group)
        Del1(group,del1)
        createItem(group,b2)
        let num = 1
        localStorage[`group${num}`] = group
        num++

    }else{
        inp1.placeholder = `you must write group name`
        inp1.style.borderColor = "red"
    }
}

function color(group) {
    let arr = ["var(--c2)", "var(--c4)", "var(--c5)", "var(--c6)", "var(--c7)"]
    let white = group.querySelector(".w")
    let red = group.querySelector(".r")
    let blue = group.querySelector(".b")
    let orange = group.querySelector(".o")
    let green = group.querySelector(".g")

    white.onclick = () => {
        group.style.backgroundColor = `${arr[0]}`
        group.style.color = "black"
    }
    red.onclick = () => {
        group.style.backgroundColor = `${arr[1]}`
        group.style.color = "var(--c1)"
    }
    blue.onclick = () => {
        group.style.backgroundColor = `${arr[2]}`
        group.style.color = "var(--c1)"
    }
    orange.onclick = () => {
        group.style.backgroundColor = `${arr[3]}`
        group.style.color = "var(--c1)"
    }
    green.onclick = () => {
        group.style.backgroundColor = `${arr[4]}`
        group.style.color = "var(--c1)"
    }
}

function Del1(group,del1){
    del1.onclick = ()=>{
        group.remove()
    }
}

function createItem(group,b2){
    let header2 = document.createElement("div")
    header2.className = "header2"
    header2.style.cssText = `
    display: flex;
    gap: 0.5%;
    margin-bottom: 10px;
    `

    let inp2 = document.createElement("input")
    inp2.type = "Text"
    inp2.className = "inp2"
    inp2.placeholder = "item name"

    let add2 = document.createElement("button")
    add2.className = "add2"
    add2.innerHTML = `<i class="fa-solid fa-plus"></i>`

    header2.appendChild(inp2)
    header2.appendChild(add2)
    group.appendChild(header2)

    b2.onclick = ()=> {
        inp2.style.display = "block"
        add2.style.display = "block"
        inp2.focus()
    }

    inp2.addEventListener("keypress",(e)=>{
        if(e.key == "Enter"){
            add2.click()
        }
    })

    add2.addEventListener("click",()=>{
        if(inp2.value.length > 0){
            let item = document.createElement("div")
            item.className = "item"
            item.style.cssText=`
            display:flex;
            justify-content:space-between;
            align-items: center;
            width: 100%;
            height: 50px;
            font-size: 20px;
            border-radius: 4px;
            border: 2px solid black;
            transition: 0.3s;
            margin-bottom:10px ;
            padding:0 10px;
            background-color:transparent;
            `

            let done = document.createElement("button")
            done.style.cssText = `
            width:25px; height:25px;
            border:2px solid black;
            backgrond-color:transparent;
            border-radius: 50%;
            font-size:13px
            `

            let itemName = document.createElement("p")
            itemName.textContent = inp2.value
            itemName.style.cssText = `
            width:75%;
            `

            let del2 = document.createElement("button")
            del2.innerHTML = `<i class="fa-solid fa-x"></i>`
            del2.style.cssText = `
            backgrond-color:transparent;
            border: 2px solid black;
            `

            item.appendChild(done)
            item.appendChild(itemName)
            item.appendChild(del2)
            group.appendChild(item)
            inp2.style.display = "none"
            inp2.value = ""
            add2.style.display = "none"

            Done(done,itemName)
            Del2(item,del2)

        }else{
            inp2.placeholder = `you must write item name`
            inp2.style.borderColor = "red"
            }
    })
}

function Done(done,itemName){
    done.onclick = ()=>{
        if(done.style.backgroundColor === "greenyellow"){
            done.innerHTML=""
            done.style.backgroundColor = "var(--c1)"
            itemName.style.textDecoration = "none"
        }else{
            done.innerHTML=`<i class="fa-solid fa-check"></i>`
            done.style.backgroundColor = "greenyellow"
            itemName.style.textDecoration = "line-through"
        }
    }
}
function Del2(item,del2){
    del2.onclick = ()=>{
        item.remove()
    }
}

//==================================================================================

let arr2 = [
    "Simplify Your Tasks.",
    "Boost Productivity.",
    "Tailor Your To-Do List.",
    "Stay Motivated.",
    "Stay Focused.",
    "Organize Your Life."
]
let tit = document.querySelector(".title")
tit.style.cssText = `
text-decoration:underline var(--c4);
`
let conter = 0
setInterval(()=>{
    if(conter == 6){
        conter = 0
    }
    tit.innerHTML = arr2[conter]
    conter++
},1500)

//==================================================================================

