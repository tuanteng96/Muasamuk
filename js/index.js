const date = $(".js-date");
const timer = setInterval(changeDate, 1000);

function changeDate() {
    date.html(new Date().toLocaleString('en-GB'));
}

var userPhone = document.querySelector('#numberPhone');
if (userPhone) {
    userPhone.addEventListener('input', restrictNumber);
}

function restrictNumber(e) {
    var newValue = this.value.replace(new RegExp(/[^\d]/, 'ig'), "");
    this.value = newValue;
}

document.getElementById("js-menu").addEventListener("click", function() {
    var elementBoxMenu = document.getElementById("box-menu");
    elementBoxMenu.classList.toggle("show");
});