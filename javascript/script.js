function sendInn() {
    console.log("hello world!")
    let email;
    let password;
    let password2;

email = document.getElementById("email").value;
password = document.getElementById("passord").value;
password2 = document.getElementById("gjentapassord").value;
console.log(email, password, password2);

if (password === password2){
    console.log("this is correct, save to local storage");
    localStorage.setItem("passord", password);
    localStorage.setItem("email", email);
    window.location.href="http://127.0.0.1:5500/index.html"
}else {
    console.log("password are not the same");
    
    console.log(email, password);
    
}
}

function loggIn() {

    console.log("logger in")

    let email = document.getElementById("email").value;
    let password = document.getElementById("passord").value;

    console.log(email, password);
    let localStorageemail = localStorage.getItem("email");
    let localStoragepassword = localStorage.getItem("passord");
    console.log (email, password,localStorageemail, localStoragepassword);

    if (email === localStorageemail && password === localStoragepassword){
        window.location.href="http://127.0.0.1:5500/html/velkommen.html"
    }
}




