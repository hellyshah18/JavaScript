let items= [];
let ind=-1;
function AddItems(){
    const item= document.getElementById("grocery").value
    if(ind<0){
        items.push(item);
        }else{
            items[ind]= item
        }
    display()
}
 function display(){
    let display=items.map(function(value,index){
        return `<div class="grocery-item">${value}
        <button class= "edit-btn" onclick="EditItems(${index})"> Edit</button>
        <button class="delete-btn" onclick="removeItems(${index})"> Delete</button>
        </div>`
    });
    document.getElementById("items").innerHTML= display.join(" ");
 }
 function removeItems(index){
    items.splice(index,1);
    display();
 }     
 function EditItems(index){
    document.getElementById("grocery").value=items[index];
    ind= index;
 }
 function ClearItems(){
    items.splice(0)
    display();
 }