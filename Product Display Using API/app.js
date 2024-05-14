

url="https://fakestoreapi.com/products"
fetch(url).then(function(value){
    return value.json();
}).then(function(value){
    display(value)
});



function display(data){
let displaydata = data.map(function(value){

    return `  <a class="single-product" href="product.html?id=${value.id}&name=john&age=25">
    <img src="${value.image}" class="single-product-img img" alt="${value.title}" />
    <footer>
      <h5 class="name">${value.fields.price}</h5>
      <span class="price">${value.price}</span>
    </footer>
  </a>`
})

document.getElementById( "displayData" ).innerHTML = displaydata.join(" ");
}