order = document.getElementById('Order');
order.addEventListener("click", summary);

function summary(){
    document.write(`<h3>Name: ${name}</h3>`);
    document.write(`<h3>Name: ${phone}</h3>`);
    document.write(`<h3>Name: ${qty}</h3>`);
    document.write(`<h3>Name: ${top}</h3>`);
}