const openMenu = (triggerBtn, selectorMenu) => {
  const btn = document.querySelector(triggerBtn);
  const menu = document.querySelector(selectorMenu);

  btn.addEventListener('click', () => {
    btn.classList.toggle('button__menu_active');
    menu.classList.toggle('header-block__left_active');
  });

  const itemsMenu = menu.querySelectorAll('.header-nav .header-nav__link');

  itemsMenu.forEach(item => {
    item.addEventListener('click', () => {
      if (btn.classList.contains('button__menu_active')) {
        btn.classList.toggle('button__menu_active');
        menu.classList.toggle('header-block__left_active');
      }
    });
  });
};

export default openMenu;