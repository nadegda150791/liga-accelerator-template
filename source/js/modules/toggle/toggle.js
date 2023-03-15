const initCompanyTogglers = () => {

  const companyElements = document.querySelectorAll('.company');

  companyElements.forEach((element) => {
    const button = element.querySelector('.company__toggle');
    const content = element.querySelector('.company__content');

    button.addEventListener('click', function (event) {
      event.preventDefault();
      content.classList.toggle('hidden');
      event.currentTarget.textContent = event.currentTarget.textContent === 'Подробнее' ? 'Скрыть' : 'Подробнее';
    });
  });
};

export {initCompanyTogglers};
