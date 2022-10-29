const login = () => {
	document.querySelector('#loginForm').addEventListener('submit', (e) => {
		e.preventDefault();
		localStorage.setItem(
			'abhis-math-quiz--name1',
			(<HTMLInputElement>document.getElementById('exampleInputName1')).value
		);
		localStorage.setItem(
			'abhis-math-quiz--name2',
			(<HTMLInputElement>document.getElementById('exampleInputName2')).value
		);
		window.location.href = '/game.html';
	});
};
login();
//export default login;
export {};
