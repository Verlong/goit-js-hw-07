import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Завдання 1 - галерея зображень
// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного
// зображення у модальному вікні.Подивися демо відео роботи галереї.
// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на ul.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.Використовуй CDN сервіс jsdelivr
// і додай у проект посилання на мініфіковані(.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям.Використовуй готову розмітку
// модального вікна із зображенням з прикладів бібліотеки basicLightbox.

const galleryList = document.querySelector('.gallery');
const galleryLiItem = galleryItems
  .map(({ preview, original, description }) => {
    return `<li><img src=${preview} data-src=${original} alt=${description} class="gallery-img" width="360" /></li>`;
  })
  .join('');
galleryList.insertAdjacentHTML('afterbegin', galleryLiItem);

// galleryList.addEventListener('click', e => {
//   if (e.target.nodeName === 'IMG') {
//     console.log(e.target);
//   }
// });

// galleryLiItem.forEach(img => { img.addEventListener('click', openModal); });

// function openModal()