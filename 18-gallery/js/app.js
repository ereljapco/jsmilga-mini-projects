function getElement(select) {
  const element = document.querySelector(select);

  if (element) {
    return element;
  } else {
    throw new Error(
      `Pleas check "${select}" selector. No such element exists.`
    );
  }
}

function Gallery(element) {
  this.container = element;
  this.imgs = [...element.querySelectorAll('.gallery__img')];

  console.log(this.imgs);

  this.modal = getElement('.gallery__modal');
  this.modalMainImg = this.modal.querySelector('.gallery__modal-main-img');
  this.modalTitle = this.modal.querySelector('.gallery__modal-title');
  this.modalImgsContainer = this.modal.querySelector('.gallery__modal-imgs');

  this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);

  this.container.addEventListener(
    'click',
    function (e) {
      if (e.target.src) {
        this.openModal(e.target, this.imgs);
      }
    }.bind(this)
  );
}

Gallery.prototype.openModal = function (imgSelected, imgs) {
  console.log(imgs);
  console.log(imgSelected);
  this.modal.classList.add('gallery__modal--open');

  this.modalMainImg.src = imgSelected.src;
  this.modalTitle.textContent = imgSelected.title;

  this.modalImgsContainer.innerHTML = imgs
    .map(function (img) {
      if (imgSelected === img) {
        return `<img class="gallery__modal-img gallery__modal-img--selected" title="${img.title}" data-id="${img.dataset['id']}" src="${img.src}" alt="${img.alt}"/>`;
      }

      return `<img class="gallery__modal-img" title="${img.title}" data-id="${img.dataset['id']}" src="${img.src}" alt="${img.alt}"/>`;
    })
    .join('');

  this.closeBtn = this.modal.querySelector('.gallery__modal-close-btn');
  this.closeBtn.addEventListener('click', this.closeModal);
};

Gallery.prototype.closeModal = function () {
  this.modal.classList.remove('gallery__modal--open');
};

const montessori = new Gallery(getElement('.gallery__montessori'));
const home = new Gallery(getElement('.gallery__home'));
