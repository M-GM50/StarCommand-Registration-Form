// Alert allergies

function _alert() {
  alert("Sorry, we cannot accept your application.");
}

const allergiesOn = document.querySelector(".allergiesOn");

allergiesOn.addEventListener("change", _alert);

//Calc. age

var todaysYear = 2022;
const showAge = document.querySelector(".showAge");
const popUp = document.querySelector(".pop-up");

function calcAge(e) {
  var value = e.currentTarget.value;
  var inputDoB = new Date(value);
  var inputYear = inputDoB.getFullYear();

  var x = todaysYear - inputYear;
  showAge.innerHTML = x;

  if (x < 18) {
    alert("Sorry, we cannot accept underage candidates.");
  }
}

const age = document.querySelector(".age");

age.addEventListener("change", calcAge);

//ThankU

const thankU = document.querySelector(".button");

function confirmBox(e) {
  e.preventDefault();
  var messageSubmit = confirm(
    "Are you sure that all given information are correct?"
  );

  if (messageSubmit === true) {
    alert("Your application has been submitted");
  }
}

thankU.addEventListener("click", confirmBox);
