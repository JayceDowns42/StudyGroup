let order = document.getElementById('Order');
order.addEventListener("click", summary);

//var names have to be different than id if not a number!!! 
var nameVar = document.getElementById('name');
var phone = document.getElementById('phone');
var qty = document.getElementById('qty');
var tops = document.getElementById('top');

var sum = document.getElementById('summary');


function summary(){
    sum.innerHTML += `<h3>Name: ${nameVar.value}</h3>`;
    sum.innerHTML += `<h3>Phone: ${phone.value}</h3>`;
    sum.innerHTML += `<h3>Quantity: ${qty.value}</h3>`;
    sum.innerHTML += `<h3>Topping: ${tops.value}</h3>`;
  
}