const toggel = () => {

  const button = document.querySelector('.company__toggel');
  const p = document.querySelector('.company__content');

  button.addEventListener('click', handleClick, false);

  function handleClick() {
    p.classList.toggle('hidden');
  }

  button.addEventListener('click', function (event) {
    event.preventDefault();
    p.classList.toggle('js-readmore-show');
    this.textContent = this.textContent === 'Подробнее' ? 'Скрыть' : 'Подробнее';
  });
};

export {toggel};
