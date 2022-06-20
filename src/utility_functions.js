// import displayLikes from './index.js';displayLikes(data)

const requestedURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WkFvP51Hf4Tss5Nac1wI/likes/';
export const sendLikes = async (showID) => {
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

export const getLikes = async () => {
  const request = new Request(requestedURL);
  const response = await fetch(request);
  const result = await response.json();
  console.log(result);

  return result;
};