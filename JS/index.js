function showPassword() {
const eye = document.getElementById('eye');
const eyeSlash = document.getElementById('eyeslash');
const fieldPassword = document.getElementById('fiel-password');

if(eye.style.display === 'none') {
eye.style.display = 'block';
eyeSlash.style.display = 'none';
fieldPassword.type = 'text';
}
else {
eye.style.display = 'none';
eyeSlash.style.display = 'block';
fieldPassword.type = 'password';
}
};
  
