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

const galleryList = document.querySelector('.gallery'); // встановлена змінна <ul class="gallery"></ul>
const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`;
  })
  .join(''); // створена змінна розмітки всередині ul class="gallery"

galleryList.insertAdjacentHTML('afterbegin', galleryMarkup); // розмітка поміщена всередині  ul class="gallery"

galleryList.addEventListener('click', openModal); //прослуховувач на кліку по картинці

function openModal(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) return;
  const instance = basicLightbox.create(`
    <img class = "gallery_image" src="${event.target.dataset.source}"/>
`);

  instance.show();

  document.addEventListener('keydown', closeModalEsc);
  function closeModalEsc(event) {
    if (event.code !== 'Escape') return;
    instance.close();
    document.removeEventListener('keydown');
  }
}
