const cartBar =document.getElementById('shopCart');
const btnCart =document.getElementById(`cart`);
const xCart =document.getElementById(`xCart`);
const navBar = document.getElementById('navBar')
const h1Title = document.getElementById(`h1Title`)
let body =document.body;
let listWrap =document.getElementById('listcard')
let listCard = document.querySelector('.listCard')
let list = document.querySelector('.list');
let quantity = document.querySelector('.quantity')

window.onscroll=function() {scrollNav()};
function scrollNav(){
    if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
       navBar.style.paddingTop ='32px';
       h1Title.style.fontSize =`32px`;
    }else{
       navBar.style.paddingTop =`80px`;
       h1Title.style.fontSize=`5rem`;
    }
};
cartBar.style.display ='none';
function openCart(){
    if(cartBar.style.display === 'none'){
        cartBar.style.display = 'block'
    }else{
        cartBar.style.display ='none'
    }
};
function cartOf(){
    if(cartBar.style.display === 'block'){
        cartBar.style.display = 'none'
    }
};

let products =[
    {
        id:1,
        Name:'Tailored Jeans',
        Image:'abstract-minimal-kitchen-objects-cutlery_23-2148835349.avif',
        Price:21000
    },
    
    {
        id:2,
        Name:'Tailored Jeans',
        Image:'abstract-minimal-kitchen-objects-cutlery_23-2148835349.avif',
        Price:15000
    },
    
    {
        id:3,
        Name:'Tailored Jeans',
        Image:'abstract-minimal-kitchen-objects-cutlery_23-2148835349.avif',
        Price:30000
    },
    
    {
        id:4,
        Name:'Tailored Jeans',
        Image:'abstract-minimal-kitchen-objects-cutlery_23-2148835349.avif',
        Price:50000
    },
    
    {
        id:5,
        Name:'Tailored Jeans',
        Image:'abstract-minimal-kitchen-objects-cutlery_23-2148835349.avif',
        Price:90000
    },
    
    {
        id:6,
        Name:'Wooden plates and cups',
        Image:'abstract-minimal-kitchen-objects-cutlery_23-2148835349.avif',
        Price:20000
    },
    
    {
        id:7,
        Name:'Wooden plates and cups',
        Image:'abstract-minimal-kitchen-objects-cutlery_23-2148835349.avif',
        Price:200000
    },
];  

listCard=[];
function initApp(){
    products.forEach((value, key)=> {
        let newDiv = document.createElement('div');
        newDiv.classList.add('items')
        newDiv.innerHTML = ` 
        <img src="img/${value.Image}"/>
        <div class="productsTitle">${value.Name}</div>
        <div class="productsPrice">Rp ${value.Price.toLocaleString()}</div>
        <button id='addCard' class="addCard" onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv)
    })
};
initApp();
function addToCard(key){
    if(listCard[key] == null){
        listCard[key] = products[key];
        listCard[key].quantity = 1;
    }
    reloadCard();
}    
let total = document.querySelector('.total')
function reloadCard(){
    listWrap.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCard.forEach((value, key)=>{
        totalPrice =totalPrice + value.Price;
        count =count + value.quantity;

        if(value !=  null){
            let newDiv =document.createElement('li');
            newDiv.innerHTML =`
            <div class="contentWraper">
            <div><img class="addcartImg" src="img/${value.Image}"></div>
            <p class="addName">${value.Name}</p>
            </div>
            <div>Rp ${value.Price.toLocaleString()}</div>
            <div class="count" style="display:flex; align-items:center;">    ${value.quantity}</div>
            <div class="btnChange">
            <button  onclik="changeQuantity(${key}, ${value.quantity - 1})">-</button>
            <button onclik="changeQuantity(${key}, ${value.quantity + 1})">+</button>
            </div>
            `;    
            listWrap.appendChild(newDiv)
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText =count;
    
}
function changeQuantity(key,quantity){
    if(quantity == 0){
        delete listCard[key];
    }else{
        listCard[key].quantity=quantity;
        listCard[key].Price =quantity * products[key].Price;
    }
    reloadCard();
}















