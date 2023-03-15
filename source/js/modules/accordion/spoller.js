const initAccordeons = () => {
  const items = document.querySelectorAll('.accordion');

  items.forEach((item) => {
    const title = item.querySelector('.accordion__title');
    const activeCls = 'active';

    title.addEventListener('click', () => {
      if (item.classList.contains(activeCls)) {
        item.classList.remove(activeCls);
      } else {
        items.forEach((item) => item.classList.remove(activeCls));
        item.classList.add(activeCls);
      }
    });
  });
};

export {initAccordeons};
