window.onload = () => {
    const user = localStorage.getItem('user');
    const href = window.location.href;
    const quesId = href[href.length - 1];
    console.log(quesId)
    id = {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
        },
        body: '{"quesid":' + quesId + '}'
    }
    fetch('php/partials/_getQuesDetails.php', id)
        .then(rep => rep.json())
        .then(question => {
            getusername(question.user_id)
                .then(name => {
                    document.querySelector("#question").innerHTML = `<div class="jumbotron">
                    <h1 class="display-4"> ${question.title}</h1>
                    <p class="lead">${question.description}</p>
                    <hr class="my-4">
                    <p>Posted by <b>${name}</b> on ${question.date}</p>
                </div>`
                })
        })

    function displayComments(ques_id) {
        id = {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
            },
            body: '{"quesid":' + ques_id + '}'

        }
        fetch('php/comments.php', id)
            .then(rep => rep.json())
            .then(data => console.log(data))
    }

}