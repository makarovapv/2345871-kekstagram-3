import {getRandomPositiveInteger, getRandomArrayElement} from './utils.js';

const DESCRIPTIONS = [
  'Это я в Дубае, я сейчас отдыхаю',
  'Я вообще делаю что хочу',
  'Мне платят за концерты, я читаю под фанеру',
  'Я подумаю потом, но скажу сразу - да',
  'Пусть не забывают, кто тут королева',
  'Эту сумку мне муж купил',
  'На мне норковая шуба',
  'Миллионы алых роз',
  'Твоя любовь это так красиво',
  'Болючая осень, холодный ноябрь',
  'Не тешат прогнозы',
  'Пятые сутки я не сплю',
  'Этот пейзаж меня будоражит',
  'Я в глазах твоих видел снег в океане',
  'Закат',
];

function createPublication() {
  const array = [];
  for (let i = 1; i <= 25; i++) {
    const publication = (j) => ({
      id: j,
      url: `photos/${j}.jpg`,
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRandomPositiveInteger(15,200),
      comments: getRandomPositiveInteger(0,200),
    });
    array.push(publication(i));
  }
  return array;
}

export {DESCRIPTIONS, createPublication};
