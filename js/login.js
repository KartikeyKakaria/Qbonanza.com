window.onload = () => {
    document.querySelector("#login").addEventListener('click', (e) => {
        e.preventDefault();
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#passowrd").value;
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
            .then(response => response.json())
            .then((data) => {
                if (data.login) {
                    console.log(data.message);
                    user = JSON.stringify(data);
                    localStorage.setItem('user', user);
                    updateHeader();
                } else {
                    console.log(data.message);
                }
                // console.log(JSON.parse(data));
            })
            .catch(error => console.log(error))
    })
}