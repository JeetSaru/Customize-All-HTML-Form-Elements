let msg = $('.msg');
let password_field = $('.input_field-password');
let icon_eye = $('.icon-eye');
let password_toggle_btn = $('#password_visibility + label');

//  Check Caps Lock If On

password_field.addEventListener('keyup', (e) => {
    if (e.getModifierState('CapsLock')) {
        msg.innerText = 'Caps Lock is on.';
    } else {
        msg.innerText = '';
    }
})

// Password Visibility

icon_eye.addEventListener('click', togglePassword);

password_toggle_btn.addEventListener('click', togglePassword);

function togglePassword() {
    if (password_field.type === 'password') {
        password_field.type = 'text';
        icon_eye.src = 'images/eye-slash.svg';
        password_toggle_btn.innerText = 'Hide password';
    } else {
        password_field.type = 'password';
        icon_eye.src = 'images/eye.svg';
        password_toggle_btn.innerText = 'Show password';
    }
}

// USER FUNCTION

function $(el) {
    return document.querySelector(`${el}`);
};