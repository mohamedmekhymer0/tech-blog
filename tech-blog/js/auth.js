
registerForm?.addEventListener("submit",e=>{

e.preventDefault();

const user = {

name:name.value,
email:email.value,
password:password.value

};

localStorage.setItem(
"user",
JSON.stringify(user)
);

alert("Registered Successfully");

window.location="login.html";

});

loginForm?.addEventListener("submit",e=>{

e.preventDefault();

const user =
JSON.parse(localStorage.getItem("user"));

if(
email.value===user.email &&
password.value===user.password
){

window.location="dashboard.html";

}else{

alert("Invalid Credentials");

}

});