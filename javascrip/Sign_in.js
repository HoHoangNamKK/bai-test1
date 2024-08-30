
function hiddenPassword(Btn_hidden){
    const icon_btn = Btn_hidden.querySelector('i.bi');
    icon_btn.classList.toggle('bi-eye');
    icon_btn.classList.toggle('bi-eye-slash');
    const pass = document.getElementById('pass-sign-in');
    const pass_type = pass.getAttribute('type') === 'password' ? 'text' : 'password';
    pass.setAttribute('type',pass_type);
    console.log(pass_type);
}


function Checkinvalid(value_input){
    // console.log(value_input);
    value_input.value = value_input.value.trim();
    if(value_input.value.trim() === ""){
        value_input.parentElement.classList.add("invalid-tooltip");
        value_input.parentElement.parentElement.getElementsByClassName("mess-error")[0].classList.remove("d-none");
    }
}

function resetinvalid(value_input){
    // console.log(value_input);
    value_input.parentElement.classList.remove("invalid-tooltip");
    value_input.parentElement.parentElement.getElementsByClassName("mess-error")[0].classList.add("d-none");
    // console.log(mess_error);
}