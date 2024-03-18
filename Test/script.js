
const url = "https://api.storerestapi.com/products";
fetch(url).then(function(res){
        return res.json();
    }).then(function(res){
        data = res.data;
        displayData(data);
    })
    
    let data = [];
 

function displayData(data) {
    let d = data.map(function(v) {
        return `<tr><td>${v._id}</td><td>${v.title}</td><td>${v.price}</td><td>${v.name}</td></tr>`;
    });
    document.getElementById("table").innerHTML = d.join(" ");
}


function searchItem() {
    let s = document.getElementById("searchterm").value.toLowerCase();
    let p = data.filter(function(item) {
        return item.title.toLowerCase().includes(s);
    });
    displayData(p);
}

