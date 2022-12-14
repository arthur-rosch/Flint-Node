const title = document.querySelectorAll("#title");
const genre = document.querySelectorAll("#genre");
const note = document.querySelectorAll("#note");
const synopsis = document.querySelectorAll("#synopsis");

function handleSetInfoMovies(loop, data) {
  for (let index = 0; index < loop.length; index++) {
    title[index].textContent = `Titulo:${data[index].title}`;
    genre[index].textContent = `Gênero:${data[index].genre}`;
    note[index].textContent = `Nota:${data[index].vote_average}`;
    synopsis[index].textContent = `Sinopse:${data[index].overview}`;
  }
  console.log(loop.length);
}
fetch("https://apigenerator.dronahq.com/api/RavBVJez/ArthurFilmes")
  .then(function (response) {
    const body = response.json();
    return body;
  })
  .then(function (data) {
    if (data.length > title.length) {
      handleSetInfoMovies(title, date);
    } else {
      handleSetInfoMovies(data, data);
    }
  });
