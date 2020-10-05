
let moviesList = document.getElementById("moviesList")

let request = new XMLHttpRequest()

request.addEventListener('readystatechange', function() {

    let result = JSON.parse(this.responseText)
        let moviesDetails = result.all.map((details) => {
            return `<li>
            <label>$(fact.text)</label>
            ${details.user ? details.user.title.year : ''}
            ${details.user ? details.user.title.year: ''}
            </li>`
        })

    batmanFactsUL.insertAdjacentHTML('beforeend', factItems.join(''))


})




request.open('GET','http://www.omdbapi.com/?s=batman&apikey=c81c1cc2')

request.send()