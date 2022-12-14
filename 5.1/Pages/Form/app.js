const title = document.querySelector("#title");
const genre = document.querySelector("#genre");
const note = document.querySelector("#note");
const synopsis = document.querySelector("#synopsis");
const submit = document.querySelector("#submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const resetValue = "";
  const newMovie = {
    title: title.value,
    overview: synopsis.value,
    genre: [genre.value],
    vote_average: note.value,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMovie),
  };
  fetch("https://apigenerator.dronahq.com/api/RavBVJez/ArthurFilmes", options)
    .then((data) => {
      if (!data.ok) {
        throw Error(data.status);
      }
      return data.json();
    })
    .then((update) => {
      console.log(update);
    })
    .catch((e) => {
      console.log(e);
    });
  title.value = resetValue;
  synopsis.value = resetValue;
  genre.value = resetValue;
  note.value = resetValue;
});
