const initAccordeons = () => {
  const items = document.querySelectorAll('.accordion');

  items.forEach((accordion) => {
    const title = accordion.querySelector('.accordion__title');
    const activeCls = 'active';

    title.addEventListener('click', () => {
      if (accordion.classList.contains(activeCls)) {
        accordion.classList.remove(activeCls);
      } else {
        items.forEach((item) => item.classList.remove(activeCls));
        accordion.classList.add(activeCls);
      }
    });
  });
};

export {initAccordeons};
