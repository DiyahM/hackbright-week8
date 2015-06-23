function generatePassword (length) {
  var charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  charset += charset.toLowerCase();
  charset += '0123456789';
  charset += '!$';
  var password = '';
  for (var i=0; i<length; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }

  return password;
}
