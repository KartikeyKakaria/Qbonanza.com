window.onload = () => {
    const query = window.location.href.split('=')[1];
    let ques = {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
        },
        body: '{"query":' + query + '}'

    }
    fetch('/Qbonanza.com/php/search.php', ques)
        .then(rep => rep.json())
        .then(result => console.log(result))
        // .catch(err => console.log(err))
}