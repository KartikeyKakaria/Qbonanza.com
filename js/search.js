const searchBtn = document.getElementById('searchbtn1');
const searchBtn2 = document.getElementById('searchbtn2');
const buttons = [searchBtn, searchBtn2];
buttons.forEach((element) => {
    element.addEventListener('click', e => {

        const query = document.querySelector("#search" + element.id[9]).value;
        window.location = "/Qbonanza.com/search.html?query=" + query;

    })
})