
function hiddenPassword(Btn_hidden){
    const icon_btn = Btn_hidden.querySelector('i.bi');
    icon_btn.classList.toggle('bi-eye');
    icon_btn.classList.toggle('bi-eye-slash');
    const pass = document.getElementById('pass-sign-in');
    const pass_type = pass.getAttribute('type') === 'password' ? 'text' : 'password';
    pass.setAttribute('type',pass_type);
    console.log(pass_type);
}