    const Table = document.getElementById("table")
    const Num = document.getElementById('number')
    const btn = document.getElementById('btn')
    console.log(btn);
    

function gettable(){
    const table = Table.value
    const num = Num.value

if(!table && !num){
    alert('Fields are missing')
    return
}

        // Create all clear Button
    let btnclear = document.createElement('button')
    let btncleartext = document.createTextNode('Clear all')
    btnclear.appendChild(btncleartext)
    document.getElementById('btnparent').appendChild(btnclear)
   btnclear.setAttribute('class','text-purple-900 w-[100%]  border border-gray-600  font-semibold   mt-3 mb-3 rounded-lg hover:bg-purple-900 hover:text-white p-1') 
    btnclear.setAttribute('onclick', 'clearAll(this)')
    console.log(btnclear);
    
    
    // create table condition
   for (let i=1; i<=num ;i++){

    let result = ` ${table} X  ${i} = ${table*i}`
    
    let div = document.createElement('div')
    let txt = document.createTextNode(result)
    div.appendChild(txt)
    document.getElementById('parent').appendChild(div)
   }
btn.style.display = 'none'
Table.value = ''
Num.value = ''
}

function clearAll(text){
    console.log(text.parentNode.parentNode.children[4]);
    const clearDiv = text.parentNode.parentNode.children[4]
    clearDiv.remove()
    // btn.style.display = 'block'
    window.location.reload()
    
}

