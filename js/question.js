window.onload = () => {
    const user = localStorage.getItem('user');
    const href = window.location.href;
    const quesId = href[href.length - 1];
    id = {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
        },
        body: '{"quesid":' + quesId + '}'
    }
    fetch('php/partials/_getQuesDetails.php', id)
        .then(rep => rep.json())
        .then(data => console.log(data))

}