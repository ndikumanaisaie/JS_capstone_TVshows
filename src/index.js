/* eslint-disable no-use-before-define */
import './styles/style.css';
import './styles/bootstrap.min.css';
import './styles/bootstrap-grid.min.css';

const searchShow = async () => {
  const url = 'https://api.tvmaze.com/search/shows?q=girls';
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      // const result = data.map(element => element.show.url);
      renderResult(data);
      document.querySelector('.errorMessage').innerHTML = '';
    })
    .catch(() => {
      document.querySelector('.errorMessage').innerHTML = '<span class="text-danger">No such show available</span>';
      renderResult([]);
    });
};

function renderResult(results) {
  const resultList = document.querySelector('.shows');
  resultList.innerHTML = '';
  results.forEach((result) => {
    const element = document.createElement('div');
    element.classList.add('card');
    element.style.width = '20rem';
    element.innerHTML = `<img src="${result.show.image.medium}" class="card-img-top" alt="Image of the show">
    <div class="card-body">
      <h5 class="card-title">${result.show.name}</h5>
      <p class="card-text">${result.show.summary}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Language: ${result.show.language}</li>
      <li class="list-group-item">Run time: ${result.show.runtime}</li>
      <li class="list-group-item">Premiered: ${result.show.premiered}</li>
      <li class="list-group-item"><a href="${result.show.url}" class="card-link">Watch Here</a></li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Comments</a>
      <a href="#" class="card-link">Reservations</a>
    </div>`;
    resultList.appendChild(element);
  });
}

// let searchTimoutToken = 0;

// window.onload = () => {
//   searchShow();
// };

document.addEventListener('DOMContentLoaded', () => {
  searchShow();
});