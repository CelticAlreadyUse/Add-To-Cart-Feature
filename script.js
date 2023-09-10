let list = document.querySelector('.list')
let body = document.body
const menuBar= document.getElementById('cartMenu')
let total = document.querySelector('.total')
let jumlahCart = document.querySelector('.jumlahCart')
let listCard = document.querySelector('.listCard')
const input = document.getElementById('searchInput')
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
    { id:1,Name:'complete tool package', Img:'abstract-minimal-kitchen-objects-cutlery_23-2148835349.avif',Price:23000},
    { id:2,Name:'Bottle', Img:'front-view-hand-with-surgical-glove-using-disinfectant.jpg',Price:23000},
    { id:3,Name:'nice flower vase', Img:'green-marinated-olives-black-cup-with-lemon-aside-high-quality-photo.jpg',Price:23000},
    { id:4,Name:'Honey glass', Img:'top-view-cup-tea-honey-bowl-lemon-slices-blue-table-free-space.jpg',Price:23000},
    { id:4,Name:'Product Name', Img:'abstract-minimal-kitchen-objects-cutlery_23-2148835349.avif',Price:23000},
    { id:4,Name:'Honey glass', Img:'top-view-cup-tea-honey-bowl-lemon-slices-blue-table-free-space.jpg',Price:23000},
    { id:4,Name:'Make-up kit', Img:'high-angle-foundation-containers-arrangement.jpg',Price:23000},
    { id:4,Name:'Honey glass', Img:'top-view-cup-tea-honey-bowl-lemon-slices-blue-table-free-space.jpg',Price:23000},
    { id:4,Name:'Make-up kit', Img:'high-angle-foundation-containers-arrangement.jpg',Price:23000},
    { id:4,Name:'Honey glass', Img:'top-view-cup-tea-honey-bowl-lemon-slices-blue-table-free-space.jpg',Price:23000},
];
let lists = [];
function initApp(){
    products.forEach((nilai,isi)=>{
        let NewDiv = document.createElement('div');
        NewDiv.classList.add('item')
        NewDiv.innerHTML = `
        <img class="imgCard" src="img/${nilai.Img}">
        <div class="productName">${nilai.Name}</div>
        <div class="productPrice">${nilai.Price.toLocaleString()}</div>
        <button onclick="addToCard(${isi})">Add To Cart<?button>
        `;
        listCard.appendChild(NewDiv);
    })
}
initApp();

function addToCard(isi){
    if(list[isi]== null){
        lists[isi] = JSON.parse(JSON.stringify(products[isi]));
        lists[isi].jumlahCart =1;
    }
    reloadCard();
}
function reloadCard(){
    list.innerHTML ='';
    let count = 0;
    let hargaTotal = 0;
    lists.forEach((nilai, isi)=>{
        hargaTotal = hargaTotal +nilai.Price;
        count = count + nilai.jumlahCart;
        if(nilai != null){
            let NewDiv =document.createElement('li');
            NewDiv.innerHTML =`
            <div class="card-wrapper">
            <div><img src="img/${nilai.Img}"></img></div>
            <div class="cartName">${nilai.Name}</div>
            <div >${nilai.Price.toLocaleString()}</div>
            <div class="gantiCount">  
            <button onclick ="removeItem(${isi})">X</button>
            <button onclick ="gantiJumlahCart(${isi},${nilai.jumlahCart -1})">-</button>
            <div class="count">${nilai.jumlahCart}</div>
            <button onclick ="gantiJumlahCart(${isi},${nilai.jumlahCart+1})">+</button>
            </div>
            </div>
            `;
            list.appendChild(NewDiv)
        }
        
    })
    total.innerText = hargaTotal.toLocaleString();
    jumlahCart.innerText = count;
}
function removeItem(isi){
    delete lists[isi];
    reloadCard()
}
function gantiJumlahCart(isi , jumlahCart){
    if(jumlahCart == 0){
        delete lists[isi];
    }else{
        lists[isi].jumlahCart = jumlahCart;
        lists[isi].Price = jumlahCart * products[isi].Price
    }
    reloadCard()
}

input.addEventListener("keyup",(nilai , trigger) =>{
    const searchTearm = trigger.target.value
})