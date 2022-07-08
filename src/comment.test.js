/**
 * @jest-environment jsdom
 */

import { commentCard, updateCommentCount } from './__mocks__/commentCount.js';

document.body.innerHTML = `
<div>
<h5>
  Comments <span class='comment-count'>(0)</span>
</h5>
<ul class="comments-container">

</ul>
</div>
`;

test('count on the UI', () => {
  // Arrange
  const comment = { comment: 'I love this movie' };
  const commentCountEl = document.querySelector('.comment-count');

  // Act
  commentCard(comment);
  commentCard(comment);
  updateCommentCount();
  // Assert
  expect(commentCountEl.textContent).toBe('(2)');
});

test('count comment container children', () => {
  // Arrange
  const comment = { comment: 'I love this movie' };
  const container = document.querySelector('.comments-container');
  // Act
  commentCard(comment);
  commentCard(comment);
  commentCard(comment);
  updateCommentCount();

  // Assert
  expect(container.childElementCount).toEqual(5);
});
