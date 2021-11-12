let user = localStorage.getItem('user');

function updateHeader() {
    if (user == null) {
        document.querySelector('#nav').innerHTML = '<a class="mx-2" href="signup.html"><button type="button" class="btn btn-outline-success">Signup</button></a><a href="login.html"><button type="button" class="btn btn-outline-success">Login</button></a>';

    } else {
        let userDetails = JSON.parse(user);
        document.querySelector('#nav').innerHTML = '<a href="profile.html" class="mx-2"><button type="button" class="btn btn-success">' + userDetails.name + '</button></a><button type="button" class="btn btn-warning" id="logout">Logout</button>';
    }
}
updateHeader();