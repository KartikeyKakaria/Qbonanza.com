document.querySelector("#btn").addEventListener('click', function() {
    const value = document.querySelector("#ok").value;
    let dat = {
        ok: value,
    };
    let data = JSON.stringify(dat);
    params = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch('back.php', params)
        .then(response => response.json())
        .then((data) => console.log(data))
        .catch(error => alert(error))
})