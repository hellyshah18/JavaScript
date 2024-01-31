const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];


function display(mydata)
{
  let mynewmenu = mydata.map(function(v,i) {


    return ` <article class="menu-item">
    <img src="${v.img}" alt="menu item" class="photo" />
    <div class="item-info">
      <header>
        <h4>${v.title}</h4>
        <h4 class="price">${v.price}</h4>
      </header>
      <p class="item-text">
       ${v.desc}
      </p>
    </div>
  </article>`
  
  })

  document.getElementById("menu").innerHTML = mynewmenu.join("");

}


display(menu);

function searchValue()
{
  let searchTerm = document.getElementById("searchTerm").
  value.toLowerCase();

  let  p = menu.filter(function(v) {

   return  v.title.toLowerCase().includes(searchTerm);
  });

  display(p);

  console.log(p);
}
display(menu);

let categories = menu.reduce(function(pre,v){
  if(pre.includes(v.category)== false){
    pre.push(v.category);
  }
  return pre;
},[])
categories.push("All");

let mybutton = menu.map(function(v,i) {
  return `  <button type="button" class="filter-btn" data-id="all" onclick="filterByCategory('${v.category}')">${v.category}</button>`
})
console.log('first', mybutton);
document.getElementById("btn").innerHTML = mybutton.join("");


function filterByCategory(category)
{
  let categoryfilters = menu.filter(function(v) {

   return v.category == category;
  })

  display(categoryfilters);
}
function AddtoCart(index){
  const selectedProduct =menu[index];
  let productexist =cartitems.find(function(v){
    return v.iem.id==selectedProduct.id;
  })
  if(!productexist){
    cartitems.push({item : selectedProduct, count:1});
  }
  
  document.getElementById("count").innerHTML= cartitems.length
}
 function sortdata(props,order)
 {
  
   menu.sort(function(a,b) {

     if(order == "DEC" )
     return b[props] - a[props];
     else
    
     return a[props] - b[props];
    

   })

   display(menu);

 }