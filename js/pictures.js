const pictureTemplate = document.querySelector('#picture').content;
const pictures = document.querySelector('.pictures');

const createPicture = function (data) {
  const template = pictureTemplate.cloneNode(true);

  const img = template.querySelector('.picture__img');
  img.src = data.url;

  const comments = template.querySelector('.picture__comments');
  comments.textContent = data.comments;

  const likes = template.querySelector('.picture__likes');
  likes.textContent = data.likes;

  return template;
};

export const drawPictures = function (data) {
  const picturesFrag = new DocumentFragment();
  picturesFrag.append(...data.map((object) => createPicture(object)));
  pictures.appendChild(picturesFrag);
};
