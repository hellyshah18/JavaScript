
// fatch api
// display api  data on the browser

fetch("https://course-api.com/javascript-store-products").then(function(value){
    return value.json();
}).then(function(value){
    console.log(value);
    display(value)
});


function display(data){
let displaydata = data.map(function(value){

    return `  <a class="single-product" href="product.html?id=${value.id}&name=john&age=25">
    <img src="${value.fields.image[0].url}" class="single-product-img img" alt="${value.title}" />
    <footer>
      <h5 class="name">${value.fields.price}</h5>
      <span class="price">${value.fields.name}</span>
    </footer>
  </a>`
})

document.getElementById( "displayData" ).innerHTML = displaydata.join(" ");
}