window.onload = () => {
    document.querySelector("#login").addEventListener('click', (e) => {
        e.preventDefault();
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;
        let data1 = {
            email: email,
            password: password,
        }
        let data = JSON.stringify(data1);
        let parameters = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        }
        fetch("/Qbonanza.com/php/login.php", parameters)
            .then(response => response.json().data)
            .then((data) => {
                if (data.login) {
                    console.log(data.message);
                    user = JSON.stringify(data.login);
                    localStorage.setItem('user', user);
                } else {
                    console.log(data.message);
                }
            }).catch(error => console.log(error))
    })
}