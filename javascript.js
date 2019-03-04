let order = document.getElementById('Order');
order.addEventListener("click", summary);

//var names have to be different than id if not a number!!! 
var nameVar = document.getElementById('name');
var phone = document.getElementById('phone');
var qty = document.getElementById('qty');
var tops = document.getElementById('top');
var price = 9.99;
var tax = .076;
var total = 1.076;
var pizzaImg = document.getElementById('pizzaPics');

var sum = document.getElementById('summary');
toppings = ["Cheese", "Sausage", "Pepperoni", "Supreme", "Meat Lovers"];

function summary(){
    sum.innerHTML = "";
    sum.innerHTML += `<h2>Order Summary:</h2>`;
    sum.innerHTML += `<h3>Name: ${nameVar.value}</h3>`;
    sum.innerHTML += `<h3>Phone: ${phone.value}</h3>`;
    sum.innerHTML += `<h3>Quantity: ${qty.value}</h3>`;
    sum.innerHTML += `<h3>Topping: ${toppings[tops.value]}</h3>`;
    sum.innerHTML += `<h3>Subtotal: $${qty.value*price}</h3>`;
    sum.innerHTML += `<h3>Tax: $${(qty.value*price*tax).toFixed(2)}</h3>`;
    sum.innerHTML += `<h3>Total: $${(qty.value*price*total).toFixed(2)}</h3>`;
    sum.innerHTML += `<img src="hooray.jpg" id="hooray">`;
    sum.innerHTML += `<h2>One Step Closer to Pizza!</h2>`;
    pizzaImgs(); 
    pizzaPics.style.border = `3px dotted red`;
}

function pizzaImgs(){
    let pizzaPic = ["cheese.jpg", "sausage.jpg", "pepperoni.jpg", "supreme.jpg", "meatLovers.jpg"];
    pizzaImg.innerHTML = "";
    for (i=1; i <= qty.value; i++)
    {
        pizzaImg.innerHTML += `<img src="${pizzaPic[tops.value]}" class="pizzaPictures">`;
    }
    

}
