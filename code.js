const form = document.getElementById("myForm")
const input_field = document.getElementById("movie-field")
const jumbotron = document.getElementById("information")

id = ""

form.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log("Form has been submitted")

    const movie = input_field.value.replaceAll(" ", "%20")
    console.log(movie)
    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${movie}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "4eaac68e63msh1a69184862c738cp11f22ajsn778dd39f5789"
	}
})
.then(response => {
	response.json().then(data => id = data.d[0].id);
})
.catch(err => {
	console.error(err);
});
  
fetch(`https://imdb8.p.rapidapi.com/title/get-ratings?tconst=${id}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "4eaac68e63msh1a69184862c738cp11f22ajsn778dd39f5789"
	}
})
.then(response => {
	response.json().then(data => {
    jumbotron.innerText = data.rating
  })
})
.catch(err => {
	console.error(err);
});  
})



