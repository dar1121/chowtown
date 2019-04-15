

window.onload = function(){

}

var menuArray = [];
console.log(menuArray);
var mLen = menuArray.length;

function myTaco() {
        menuArray.push("Taco");
        console.log(menuArray);
    }

function myBurrito() {
        menuArray.push("Burrito");
        console.log(menuArray);
    }

function myQuesadilla() {
        menuArray.push("Quesadilla");
        console.log(menuArray);
    }

function submitOrder(){
	window.localStorage.setItem('menuStorage', menuArray);
}


