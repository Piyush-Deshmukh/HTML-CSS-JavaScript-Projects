let query = document.querySelector('.query');
let searchBtn = document.querySelector('.searchBtn');

searchBtn.onclick = () => {
    let url = 'https://www.google.com/search?q=' + query.value;
    window.open(url, '_self');
}