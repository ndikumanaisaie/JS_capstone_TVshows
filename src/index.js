import './styles/style.css';
import './styles/bootstrap.min.css';
import './styles/bootstrap-grid.min.css';
import renderNavbar from './navbar.js';
import addEventToCommentBtn from './comment.js';
import { renderShow, displayLikes } from './renderDOM.js';

document.addEventListener('DOMContentLoaded', async () => {
  await renderNavbar();
  await renderShow();
  await addEventToCommentBtn();
  displayLikes();
});
