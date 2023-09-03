let list = document.querySelector('.list')
let body = document.body
const menuBar= document.getElementById('cartMenu')
let total = document.querySelector('.total')
let jumlahCart = document.querySelector('.jumlahCart')
let listCard = document.querySelector('.listCard')
menuBar.style.display ="none";
function openCart(){
    if(menuBar.style.display == "none"){
        menuBar.style.display ='block'
    }else{
        menuBar.style.display='none'
    }
}
function closeCart(){
    if (menuBar.style.display == 'block' ){
        menuBar.style.display ='none'
    }else{
        menuBar.style.display ='block'
    }
}

products = [
    { id:1,Name:'Product Name', Img:'abstract-minimal-kitchen-objects-cutlery_23-2148835349.avif',Price:23000},
    { id:2,Name:'Product Name', Img:'abstract-minimal-kitchen-objects-cutlery_23-2148835349.avif',Price:23000},
    { id:3,Name:'Product Name', Img:'abstract-minimal-kitchen-objects-cutlery_23-2148835349.avif',Price:23000},
    { id:4,Name:'Product Name', Img:'abstract-minimal-kitchen-objects-cutlery_23-2148835349.avif',Price:23000},
    { id:4,Name:'Product Name', Img:'abstract-minimal-kitchen-objects-cutlery_23-2148835349.avif',Price:23000},
    { id:4,Name:'Product Name', Img:'abstract-minimal-kitchen-objects-cutlery_23-2148835349.avif',Price:23000},
];
let lists = [];
function initApp(){
    products.forEach((value,key)=>{
        let NewDiv = document.createElement('div');
        NewDiv.classList.add('item')
        NewDiv.innerHTML = `
        <img src="img/${value.Img}">
        <div class="productName">${value.Name}</div>
        <div class="productPrice">${value.Price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add To Cart<?button>
        `;
        listCard.appendChild(NewDiv);
    })
}
initApp();

function addToCard(key){
    if(list[key]== null){
        lists[key] = JSON.parse(JSON.stringify(products[key]));
        lists[key].jumlahCart =1;
    }
    reloadCard();
}
function reloadCard(){
    list.innerHTML ='';
    let count = 0;
    let hargaTotal = 0;
    lists.forEach((value, key)=>{
        hargaTotal = hargaTotal +value.Price;
        count = count + value.jumlahCart;
        if(value != null){
            let NewDiv =document.createElement('li');
            NewDiv.innerHTML =`
            <div><img src="img/${value.Img}"></img></div>
            <div class="cartName">${value.Name}</div>
            <div >${value.Price.toLocaleString()}</div>
            <div class="gantiCount">  
            <button onclick ="gantiJumlahCart(${key},${value.jumlahCart-1})">-</button>
            <div class="count">${value.jumlahCart}</div>
            <button onclick ="gantiJumlahCart(${key},${value.jumlahCart+1})">+</button>
            </div>
            `;
            list.appendChild(NewDiv)
        }
    })
    total.innerText = hargaTotal.toLocaleString();
    jumlahCart.innerText = count;
}

function gantiJumlahCart(key , jumlahCart){
    if(jumlahCart == 0){
        delete lists[key];
    }else{
        lists[key].jumlahCart = jumlahCart;
        lists[key].Price = jumlahCart * products[key].Price
    }
    reloadCard()
}
