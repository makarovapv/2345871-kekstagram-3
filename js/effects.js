const imageForm = document.querySelector('.img-upload__form');
const imagePreview = imageForm.querySelector('.img-upload__preview img');
const radioButtons = document.querySelectorAll('.effects__radio');

const changeFilter = (e) => {
  const element = e.target;
  e.preventDefault();
  imagePreview.classList = [];
  imagePreview.classList.add(`effects__preview--${element.value}`);
};

const removeFilter = (e) => {
  e.preventDefault();
  imagePreview.classList = [];
};

const addListener = (element) => {
  if (element.value === 'none') {
    element.addEventListener('click', removeFilter);
  } else {
    element.addEventListener('click', changeFilter);
  }
};

const makeListener = () => {
  radioButtons.forEach((element) => addListener(element));
};

const removeListener = () => {
  radioButtons.forEach((element) => {
    if (element.value === 'none') {
      element.removeEventListener('click', removeFilter);
    } else {
      element.removeEventListener('click', changeFilter);
    }
  });
};

export {makeListener, removeListener};
