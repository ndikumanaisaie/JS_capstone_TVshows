/* eslint-disable import/no-cycle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/no-mutable-exports */
// import displayLikes from './renderDom.js';

// const requestedURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oPB8XtbITNjsLuKeiGRV/likes/';
// export const sendLikes = async (showID) => {
//   const data = {
//     method: 'POST',
//     body: JSON.stringify({
//       item_id: showID,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   };
//   const response = await fetch(requestedURL, data);
//   return response.json();
// };

// export const getLikes = async () => {
//   const request = new Request(requestedURL);
//   await fetch(request)
//     .then((response) => response.json())
//     .then((data) => {
//       displayLikes(data);
//       return data;
//     });
// };
