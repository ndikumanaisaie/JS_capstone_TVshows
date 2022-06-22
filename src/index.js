import './styles/style.css';
import './styles/bootstrap.min.css';
import './styles/bootstrap-grid.min.css';
import './bootstrap.bundle.min.js';
import { renderShow, displayLikes } from './renderDom.js';

document.addEventListener('DOMContentLoaded', async () => {
  await renderShow();
  displayLikes();
});