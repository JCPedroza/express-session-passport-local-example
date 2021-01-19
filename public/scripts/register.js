const seepw = document.getElementById('seepw')
const password = document.getElementById('password')

function switchSeePw () {
  if (password.type === 'password') {
    password.type = 'text'
  } else {
    password.type = 'password'
  }
}

seepw.onclick = switchSeePw
