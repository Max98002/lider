const openMenu = (triggerBtn, selectorMenu) => {
  const btn = document.querySelector(triggerBtn);
  const menu = document.querySelector(selectorMenu);

  btn.addEventListener('click', () => {
    btn.classList.toggle('button__menu_active');
    menu.classList.toggle('header-block__left_active')
  });
};

export default openMenu;