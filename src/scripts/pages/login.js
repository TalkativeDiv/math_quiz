import localStorageInstance from '../lib/localstorage.js';
const local = new localStorageInstance(true);
const login = () => {
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    let name1 = document.getElementById('name1').value.toString().trim();
    let name2 = document.getElementById('name2').value.toString().trim();
    let names = [name1, name2];
    if (!name1 || !name2) {
      return;
    }
    names.forEach((name, index) => {
      local.set(`name${index + 1}`, name);
      console.log(name, index);
    });
  });
};

export default login;
