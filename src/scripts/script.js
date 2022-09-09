import login from './pages/login.js';
import game from './pages/game.js';
const path = window.location.pathname;
console.log(path);
if (path == '/') {
  login();
}
switch (path) {
  case '/':
    login();
  case '/game':
    game();
}
