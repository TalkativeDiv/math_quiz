const game = () => {
  const setActive = (target, bool) => {
    if (bool) {
      target.classList.remove('text-indigo-700');
      target.classList.add('text-yellow-500');
    } else {
      target.classList.remove('text-yellow-500');
      target.classList.add('text-indigo-700');
    }
  };
  // btw yellow means question turn and indigo means answer turn
  setActive(document.querySelector('#name1'), true);
  setTimeout(() => {
    setActive(document.querySelector('#name1'), false);
  }, 1000);
};

export default game;
