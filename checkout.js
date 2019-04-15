

window.onload = function(){
	createBag();

}

var delivery = 5.00; 
var bagItems = window.localStorage.getItem('menuStorage').split(',');
function createBag(){

for (var c in bagItems) {
    var newElement = document.createElement('div');
    newElement.id = bagItems[c]; 
    newElement.className = "orderItem";
    newElement.innerHTML = bagItems[c];
    document.getElementById('orderstuff').appendChild(newElement);

    var newPrice = document.createElement('p');
    newPrice.id = bagItems[c]; 
    newPrice.className = "price";
    newPrice.innerHTML = "$12.00";
    document.getElementById(bagItems[c]).appendChild(newPrice);

    
} 
	document.getElementById("deliveryprice").innerHTML = "$"+delivery+".00";
	var totalPrice = 12 * bagItems.length + delivery ;
	document.getElementById("totalPrice").innerHTML = "$"+totalPrice+".00";
	console.log(bagItems.length);
	

}


function subtract() {
        delivery= delivery - 1;
       	document.getElementById("deliveryprice").innerHTML = "$"+delivery+".00";
 		var totalPrice = 12 * bagItems.length + delivery;
        document.getElementById("totalPrice").innerHTML = "$"+totalPrice+".00";
        console.log(totalPrice);

    }

