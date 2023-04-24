const imageForm = document.querySelector('.img-upload__form');
const imageOverlay = imageForm.querySelector('.img-upload__overlay');
const closeButton = imageForm.querySelector('#upload-cancel');

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeWindow();
});

const closeOnButton = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeWindow();
  }
};

function closeWindow() {
  imageOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeOnButton);
  cleanForm();
}

function openWindow() {
  imageOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeOnButton);
}

imageForm.addEventListener('change', (evt) => {
  evt.preventDefault();
  openWindow();
});

function cleanForm() {
  document.querySelector('#upload-file').value = '';
  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
}
