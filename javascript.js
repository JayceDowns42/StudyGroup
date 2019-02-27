let order = document.getElementById('Order');
order.addEventListener("click", summary);

var top = document.getElementById('top').option;
var sum = document.getElementById('summary');




function summary(){
    sum.innerHTML += `<h3>Name: ${top}</h3>`;
    // document.write(`<h3>Name: ${phone}</h3>`);
    // document.write(`<h3>Name: ${qty}</h3>`);
    // document.write(`<h3>Name: ${top}</h3>`);
}
document.get