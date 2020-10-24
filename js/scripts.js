/**
 * Dom Manipulation
 * 
 * $ or jQuery or window.jQuery
 * 
 * document.getElementById('someID') => $('#someID')
 * document.getElementByClassName('someClass') => $('.someClass')
 * document.getElementByTagName('someTag') => $('someTag')
 * document.createElement('div').innerText = 'test'; => el =  $('<div>test</div>')
 * el.innerText => $(')
 * 
 * wrap code in this function to make sure the $ sign refers to jQuery:
 * (function($){
 * })(window.jQuery) 
 */


var registeredUsers = ["Hoang", "Maija", "Anne", "Jarmo"]; // this array stores valid usernames until the next pageload

if (registeredUsers.length > 5) {
  registeredUsers.shift();
}

function validateForm(e) {
  e.preventDefault(); // stop the submit button from refreshing the page
  console.log("validating....");

  console.log("user name: " + validateUsername());
  console.log("email: " + validateEmail());
  console.log("password: " + validatePassword());

  if (validateUsername() && validateEmail() && validatePassword()) {
    var _newUser = getUserName();
    // add code to update registeredUsers array with new user call render function
    // TODO
    return registeredUsers.push(_newUser);
    if (registeredUsers.length > 5) {
      registeredUsers.shift();
    }
    //call render function
    //document.getElementById("registered-user").innerHTML = "";
    $("#registered-user").empty();
    renderRegisteredUsers();

    document.registration.reset(); // reset form input fields
  }
}

function renderRegisteredUsers() {
  /*registeredUsers.forEach(function (registeredUser)*/
  $each(registeredUsers, function(registeredUser) {
    $('<li>' + registerUser + '</li>').appendTo('#registered-users')
    //var _newUser = document.createElement("li");
    //_newUser.innerHTML = registeredUser;
    //document.getElementById("registered-users").appendChild(_newUser);
  });
}

/**
 * this function supposely validates submitted username
 * @returns [Boolean] true when valid, false otherwise
 */
function validateUsername() {
  var _userName = getUserName();

  return !checkSpace(_userName);
}

/**
 * this function supposely validates submitted email
 * @returns [Boolean] true when valid, false otherwise
 */
function validateEmail() {
  var _email = getEmail();

  if (checkSpace(_email) === true) {
    return false;
  }

  // check for @
  var atSymbol = _email.indexOf("@");
  if (atSymbol < 1) {
    return false;
  }

  // check if there is a dot located less than 2 symbols away from the @ sign
  var dot = _email.indexOf(".");
  if (dot <= atSymbol + 2) {
    return false;
  }

  // check that the dot is not at the end
  if (dot === _email.length - 1) {
    return false;
  }

  return true;
}

/**
 * this function supposely validates submitted password
 * if password and confirmPassword do not match, return false
 *
 * @returns [Boolean] true when valid, false otherwise
 */
function validatePassword() {
  var _password = getPassword();
  var _confirmPassword = getConfirmPassword();

  if (_password !== _confirmPassword) {
    return false;
  }

  return true;
}

/**
 * this function supposely checks whether the sample is an empty string
 * or there is space within it
 * @param [String] sample text to be evaluated
 * @returns [Boolean] true when valid, false otherwise
 */
function checkSpace(sample) {
  return sample === "" || sample.indexOf(" ") > -1;
}

/**
 * this function looks under the form with name "registration"
 * look under the "username" input field and returns the value of it
 * returns nothing if no value is found
 *
 * @returns [Boolean] true when valid, false otherwise
 */
function getUserName() {
  /*if (typeof document.registration.username === "undefined") {
    return "";
  } else {
    return document.registration.username.value;
  }*/

  return $('[name="username"]').val();
}

/**
 * this function looks under the form with name "registration"
 * look under the "email" input field and returns the value of it
 * returns nothing if no value is found
 *
 * @returns [Boolean] true when valid, false otherwise
 */

function getEmail() {
  // TODO
  /*if (typeof document.registration.email === "undefined") {
    return "";
  } else {
    return document.registration.email.value;
  }*/
  return $('[name="email"]').val();
}

/**
 * this function looks under the form with name "registration"
 * look under the "Password" input field and returns the value of it
 * returns nothing if no value is found
 *
 * @returns [Boolean] true when valid, false otherwise
 */
function getPassword() {
  // TODO
  /*if (typeof document.registration.password === "undefined") {
    return "";
  } else {
    return document.registration.password.value;
  }*/
  return $('[name="password"]').val();
}

/**
 * this function looks under the form with name "registration"
 * look under the "ConfirmPassword" input field and returns the value of it
 * returns nothing if no value is found
 *
 * @returns [Boolean] true when valid, false otherwise
 */

function getConfirmPassword() {
  // TODO
  /*if (typeof document.registration.password_confirm === "undefined") {
    return "";
  } else {
    return document.registration.password_confirm.value;
  }*/
  return $('[name="password_confirm"]').val();
}

var sliderEl = document.createElement('section');
sliderEl.classList.add('lazy', 'slider');
sliderEl.setAttribute('data-sizes','50vw');
document.body.appendChild(sliderEl);

function addSlide(imgUrl){
  var firstSlide = document.createElement('div');
var firstSlideImage = document.createElement('img');
firstSlideImage.setAttribute('data-lazy', imgUrl);
firstSlideImage.setAttribute('data-srcset', imgUrl);
firstSlideImage.setAttribute('data-sizes','100vw');
firstSlide.appendChild(firstSlideImage);

sliderEl.appendChild(firstSlide);
}

var imgUrl = '//source.unsplash.com/600x400/?cloth,dresses'

addSlide(imgUrl);
addSlide(imgUrl);
addSlide(imgUrl);
addSlide(imgUrl);
addSlide(imgUrl);
addSlide(imgUrl);
