import { generateShows, resultElement } from './renderDom.js';

const renderNavbar = async () => {
  const myshows = await generateShows();
  const shows = myshows.filter((s) => s.show.id !== 5451);
  const resultList = resultElement();
  resultList.innerHTML = '';
  // Creating navigation bar
  const navBar = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-5">
      <a class="navbar-brand" href="#">TV Shows</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Movies(${shows.length})<span class="sr-only">(current)</span></a>
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
};

export default renderNavbar;