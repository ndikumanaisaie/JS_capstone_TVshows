import { resultElement, generateShows } from './renderDom.js';
import getDate from './date.js';

const commentsURL = (id = 0) => {
  if (id === 0) {
    return 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Gk2LHbamyoGODOj6Ra8F/comments';
  }
  return `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Gk2LHbamyoGODOj6Ra8F/comments?item_id=${id}`;
};

const commentCard = (commentObj) => {
  const element = `
    <li>
      <span class="comment-date">${commentObj.creation_date} ${commentObj.username}: ${commentObj.comment} </span>
     
    </li>`;
  document.querySelector('.comments-container').insertAdjacentHTML('beforeend', element);
};

const getComment = async (id) => {
  const url = commentsURL(id);
  const response = await fetch(url);
  return response.json();
};

const postComment = async (data) => {
  const url = commentsURL();
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response;
};

const insertModal = ({ show }) => {
  const resultList = resultElement();
  const markUp = `
    <div class="app-modal" tabindex="-1" aria-hidden="true">
    <div class="app-modal-content shadow p-3 mb-5 bg-body rounded border border-secondary">
        <div class="app-modal-head">
            <img src="${show.image.original}" class="comment-image" alt="Image of the show">
            <div class="show-title">
                <h5>${show.name}</h5>
                <p>${show.summary}</p>
            </div>
            <button type="button" class="btn-close comment-close" data-comment-close='close'></button>
        </div>
        <ul class="show-description">
            <li >Language: ${show.language}</li>
            <li >Run time: ${show.runtime}</li>
            <li >Premiered: ${show.premiered}</li>
            <li ><a href="${show.url}" class="card-link">Watch Here</a></li>
        </ul>
        <div>
          <h5>
            Comments <span class='comment-count'>(0)</span>
          </h5>
          <ul class="comments-container">
  
          </ul>
        </div>
        <div class="comment-form-wrapper">
            <form class="comment-form">
                <h5>Add a comment</h5>
            <div>
                <label for="name" class="form-label text-dark"></label>
                <input type="text" class="form-control name" id="name" required maxlength="32" placeholder="Your name">
            </div>
            <div>
                <label for="comment" class="form-label text-dark"></label>
                <textarea class="form-control insight-text" aria-label="With textarea" id="comment" required maxlength="32" placeholder="Your insights"></textarea>
            </div>                      
                <button type="submit" class="btn btn-primary bg-dark shadow">Comment</button>                    
            </form>
        </div> 
    </div> 
  </div>`;

  resultList.insertAdjacentHTML('beforebegin', markUp);
};

const addEventToCommentBtn = async () => {
  const myshows = await generateShows();
  const shows = myshows.filter((s) => s.show.id !== 5451);
  const showEl = resultElement();
  showEl.addEventListener('click', (e) => {
    const targetEl = e.target;
    const recipientId = targetEl.getAttribute('data-modal-id');

    // FInd the right show and insert modal with data
    const show = shows.find((item) => item.show.id === Number(recipientId));
    insertModal(show);

    // Display comment count function
    const getCommentCount = () => {
      const container = document.querySelector('.comments-container');
      const count = container.children.length;
      return count;
    };
    const updateCommentCount = () => {
      const commentCountEl = document.querySelector('.comment-count');
      commentCountEl.textContent = `(${getCommentCount()})`;
    };

    // Display comment from API
    getComment(show.show.id)
      .then((comments) => {
        comments.forEach((element) => {
          commentCard(element);
        });
        return comments;
      }).then(() => {
        updateCommentCount(); // Call comment count update function
      });

    // Add/post comment
    const formContainer = document.querySelector('.comment-form');
    formContainer.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.querySelector('#name').value;
      const comment = document.querySelector('#comment').value;
      const data = {};

      if (name === '' && comment === '') {
        return '';
      }
      data.item_id = show.show.id;
      data.username = name;
      data.comment = comment;
      postComment(data).then((response) => {
        if (response.status === 201) {
          data.creation_date = getDate();
          commentCard(data);
          updateCommentCount();
        }
      });
      document.querySelector('#name').value = '';
      document.querySelector('#comment').value = '';
      return '';
    });
    // Display pop up modal
    const appModal = document.querySelector('.app-modal');
    appModal.classList.add('appear');

    // Add close event to close icon
    const closeIcon = document.querySelector('.comment-close');
    closeIcon.addEventListener('click', () => {
      appModal.remove();
    });
  });
};

export default addEventToCommentBtn;