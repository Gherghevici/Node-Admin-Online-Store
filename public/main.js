//sections 
const displayData = document.getElementById("displayData");
const modalSection = document.getElementById("modalSection");

//inputs
const title = document.getElementById("title");
const description = document.getElementById("description");
const price = document.getElementById("price");
const quantity = document.getElementById("quantity");

//buttons
const addNewProduct = document.getElementById("addNewProduct");
const sendInfoBtn = document.getElementById("sendInfoBtn");

//get or post data
const getData = async()=>{
   const res = await fetch('http://localhost:3000/data')
    const data = await res.json();
    return data
}




const sendData= ()=>{
    const newData={
        title:title.value,
        description:description.value,
        price:price.value,
        quantity:quantity.value
    }
    fetch("http://localhost:3000/data",{
        method: "POST",
        body: JSON.stringify(newData),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}


//data handeling
const creatingDataUI = async()=>{
    const line =document.createElement("div");
    line.classList.add("line")
    const t = document.createElement("div");
    const d = document.createElement("div");
    const p = document.createElement("div");
    const q = document.createElement("div");
    
    const data = await getData()
    if(data){
        data.forEach(value => {
            t.innerText=value.title;
            d.innerText=value.description;
            p.innerText=value.price;
            q.innerText=value.quantity;
            line.append(t,d,p,q)
            displayData.appendChild(line);
        });
        
        
    
    }
    
}


//event listeners
addNewProduct.addEventListener("click",(e)=>{
    modalSection.classList.toggle("hidden")
})

sendInfoBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    sendData();
    creatingDataUI();
})
