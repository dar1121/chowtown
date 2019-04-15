var x;

function submitForm() {
  x = document.forms["myAddress"]["address"].value;
  if (x == "") {
    alert("Please enter an address you wish to deliver to.");
    return false;
  } else {
	localStorage && (localStorage.address = x.value);
	console.log(x);
	return true;
  }
}

if (localStorage && 'address' in localStorage) {
    x.value = localStorage.address;
  }