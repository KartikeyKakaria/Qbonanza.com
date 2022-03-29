window.onload = () => {
    const query = window.location.href.split('=')[1];
    data = {
        query: query
    }
    let ques = {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data)

    }
    fetch('/Qbonanza.com/php/search.php', ques)
        .then(rep => rep.json())
        .then(result => console.log(result))
        // .catch(err => console.log(err))
}