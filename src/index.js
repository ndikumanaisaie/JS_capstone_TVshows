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
    .catch((e) => {
      document.querySelector('.errorMessage').innerHTML = `<span class="text-danger">${e}No such show available</span>`;
      renderResult([]);
    });
};

function renderResult(results) {
  const resultList = document.querySelector('.shows');
  resultList.innerHTML = '';
  const navBar = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">TVShows logo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Movies(${results.length})<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">TV shows</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Films</a>
      </li>
    </ul>
  </div>
</nav> `;
  resultList.insertAdjacentHTML('beforebegin', navBar);
  results.forEach((result) => {
    const element = document.createElement('div');
    element.classList.add('card');
    element.style.width = '20rem';
    element.innerHTML = `
    <img src="${result.show.image.medium}" class="card-img-top" alt="Image of the show">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <h5 class="card-title">${result.show.name}</h5>
        <i class="bi bi-suit-heart"></i>
      </div>
      <div class="d-flex justify-content-end">
        <span class="text-dark">${5} likes</span>
      </div>
    </div>
    <div class="card-body">
      <button type="button" class="btn btn-secondary">Comments</button>
      <button type="button" class="btn btn-secondary">Reservations</button>
    </div>`;
    resultList.appendChild(element);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  searchShow();
});