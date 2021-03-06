let form = document.getElementById('login-form')
let frontrooturl = 'file:///Users/hahnsang/Dropbox/c9/0.backend/django_auth_boilerplate/'
form.addEventListener('submit', (e) => {
    e.preventDefault()

    let formData = {
        'username': form.username.value,
        'password': form.password.value
    }

    fetch('http://127.0.0.1:8000/api/users/token/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            console.log('DATA:', data.access)
            if (data.access) {
                localStorage.setItem('token', data.access)
                // redirect
                window.location = frontrooturl + 'frontend/projects-list.html'
            } else {
                alert('Username OR password did not work')
            }
        })
})