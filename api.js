const rows=document.getElementById("rowsbody");
let productsarray;
const btns=document.querySelectorAll(".nav-link");
const loader=document.getElementById("loader");
async function products(prod="phone") {
   let data = await fetch(`https://dummyjson.com/products/search?q=${prod}`)
    let products = await data.json() 
    productsarray=products.products
    console.log(products);
    display();
    setTimeout(load,500);
    
}


function load(){
loader.classList.add("d-none");
}
function display(){
  let box="";
  for(let i=0;i<productsarray.length;i++){
    box+=`
     <div class="col-md-4 g-3 ">
        <div class="card h-100">
  <img src="${productsarray[i].images[0]}" class="card-img-top  " alt="...">
  <div class="card-body pos  ">
    <p class="card-text text-uppercase text-primary ">${productsarray[i].title}</p>
    <h5 class="text-warning">${productsarray[i].price} <i class="fa-solid fa-dollar-sign"></i> </h5>
  </div>
</div>
       </div>
    `
  }
  rows.innerHTML=box;
}
products();
let phones;
for(let i=0;i<btns.length;i++){
  btns[i].addEventListener("click",function(e){
    phones=e.target.dataset.type;
    products(phones);
  })
}

