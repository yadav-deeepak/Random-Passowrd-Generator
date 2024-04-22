const passwordBox = document.getElementById("password");
const btn = document.querySelector("button");
const length = 12;

const uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase ="abcdefghijklmnopqrstuvwxyz";
const number = "01234565789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = uppercase + lowercase + number + symbol;



btn.addEventListener("click",() => {
    let password = "";
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];
    while (length > password.length){
         password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value = password;
});

function copyPassword(){
    passwordBox.select(); //this will select the value of the input box
    document.execCommand("copy");// this will copy the value selected .
}

