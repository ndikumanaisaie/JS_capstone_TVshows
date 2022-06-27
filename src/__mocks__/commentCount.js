const commentCard = (commentObj) => {
  const element = `
      <li>
        <span class="comment-date">${commentObj} </span>
       
      </li>`;
  document.querySelector('.comments-container').insertAdjacentHTML('beforeend', element);
};

const getCommentCount = () => {
  const container = document.querySelector('.comments-container');
  const count = container.children.length;
  return count;
};
const updateCommentCount = () => {
  const commentCountEl = document.querySelector('.comment-count');
  commentCountEl.textContent = `(${getCommentCount()})`;
};

export { updateCommentCount, commentCard };