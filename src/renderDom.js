/* eslint-disable import/prefer-default-export */
/* eslint-disable no-use-before-define */

// import { getLikes, sendLikes } from './utility_functions.js';

const TVmazeURL = 'https://api.tvmaze.com/search/shows?q=girls';
const requestedURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Gk2LHbamyoGODOj6Ra8F/likes/';

// eslint-disable-next-line import/prefer-default-export
// export const searchShow = async () => {
//   await fetch(TVmazeURL)
//     .then((response) => response.json())
//     .then((data) => {
//       renderResult(data);
//       document.querySelector('.errorMessage').innerHTML = '';
//       return data;
//     })
//     .catch((e) => {
//  document.querySelector('.errorMessage').innerHTML =
// `<span class="text-danger">${e}No such show available</span>`;
//       renderResult([]);
//     });
// };

const renderShow = async () => {
  const shows = await generateShows();
  const resultList = document.querySelector('.shows');
  resultList.innerHTML = '';

  // Creating navigation bar
  const navBar = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">TVShows logo</a>
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
  const myLikes = await getLikes();
  // Inserting tv shows
  shows.forEach((result) => {
    const likeObject = myLikes
      .filter((like) => typeof like.item_id === 'string')
      .filter((like) => like.item_id === `${result.show.id}`)[0];
    const element = document.createElement('div');
    element.classList.add('card');
    element.style.width = '20rem';
    element.innerHTML = `
    <img src="${result.show.image.original}" class="card-img-top w-100" alt="Image of the show">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <h5 class="card-title">${result.show.name}</h5>
        <i class="bi bi-suit-heart like-button" id="${result.show.id}"></i>
      </div>
      <div class="d-flex justify-content-end d-like" id="${result.show.id + 1}">
        <span>${likeObject ? likeObject.likes : 0} Likes</span>
      </div>
    </div>
    <div class="card-body">
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${result.show.id}" >
        Comments
      </button>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${result.show.id}" >
        Reservations
      </button>
  
    <!-- Modal -->
    <div class="modal fade" id="exampleModal${result.show.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="${result.show.image.original}" class="card-img-top" alt="Image of the show">
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
                <form class="d-flex flex-column gap-3 form1">
                  <div class="col-md-6">
                    <label for="name" class="form-label text-dark">Name</label>
                    <input type="text" class="form-control name" id="name" required maxlength="32">
                  </div>
                  <div class="col-md-6">
                    <label for="comment" class="form-label text-dark">Comment</label>
                    <textarea class="form-control" aria-label="With textarea" id="comment" required maxlength="32"></textarea>
                  </div>
                  <div class="col-6 mt-3 d-flex justify-content-start">
                    <button type="submit" class="btn btn-primary bg-dark shadow submit">Submit</button>
                  </div>
                </form>
              </div>
              </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
        </div>
    </div>
    </div>`;
    resultList.appendChild(element);
  });
};

const sendLikes = async (showID) => {
  const data = {
    method: 'POST',
    body: JSON.stringify({
      item_id: showID,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  const response = await fetch(requestedURL, data);
  return response;
};

const getLikes = async () => {
  const request = new Request(requestedURL);

  const response = await fetch(request);
  const result = await response.json();

  return result;
};

const generateShows = async () => {
  const request = new Request(TVmazeURL);

  const response = await fetch(request);
  const result = await response.json();

  return result;
};

const displayLikes = () => {
  const likeButtons = document.querySelectorAll('.like-button');

  likeButtons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const currentBtnId = btn.getAttribute('id');
      await sendLikes(currentBtnId);
      const btnParent = btn.parentElement;
      const likeEment = btnParent.nextElementSibling.firstElementChild;
      const likes = await getLikes();
      const like = likes
        .filter((like) => typeof like.item_id === 'string')
        .filter((like) => like.item_id === currentBtnId)[0];
      likeEment.textContent = `${like.likes} Likes`;
    });
  });
};

export { renderShow, displayLikes };