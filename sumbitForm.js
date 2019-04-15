var x;

function submitForm() {
  x = document.forms["myAddress"]["address"].value;
  if (x == "hi! this is my food delivery app. enter your address here to") {
    alert("Please enter an address you wish to deliver to.");
    return false;
  } else {
  window.localStorage.setItem('addressStorage', x);
  console.log(x);
  return true;
  }
}
