const [player1_name, player2_name, num1Input, num2Input, output]: [
	string,
	string,
	HTMLInputElement,
	HTMLInputElement,
	HTMLDivElement
] = [
	localStorage.getItem('abhis-math-quiz--name1'),
	localStorage.getItem('abhis-math-quiz--name2'),
	document.getElementById('number1') as HTMLInputElement,
	document.getElementById('number2') as HTMLInputElement,
	document.getElementById('output') as HTMLDivElement,
];
let [player1_score, player2_score, question_turn, answer_turn]: [
	number,
	number,
	string,
	string
] = [0, 0, 'player1', 'player2'];
let num1: number, num2: number, proper_answer: number;

document.getElementById('spanP1Name').innerText = player1_name;
document.getElementById('spanP2Name').innerText = player2_name;

document.getElementById('spanP1Score').innerHTML = player1_score.toString();
document.getElementById('spanP2Score').innerHTML = player2_score.toString();

document.getElementById('player_question').innerText = `Question Turn -  ${
	player1_name.toLowerCase().charAt(0).toUpperCase() + player1_name.slice(1)
}`;
document.getElementById('player_answer').innerHTML = `Answer Turn - ${
	player2_name.toLowerCase().charAt(0).toUpperCase() + player2_name.slice(1)
}`;
const check = () => {
	const plyr_Ans = parseInt(
		(<HTMLInputElement>document.getElementById('answer')).value
	);
	const plyr_AnsInput = document.getElementById('player_answer');
	if (plyr_Ans == proper_answer) {
		if (answer_turn == 'player1') {
			player1_score++;
			document.getElementById('spanP1Score').innerText = player1_score
				.toLocaleString('en-US')
				.toString();
		} else {
			player2_score++;
			document.getElementById('spanP2Score').innerText = player2_score
				.toLocaleString('en-US')
				.toString();
		}
	}
	if (question_turn == 'player1') {
		question_turn = 'player2';
		document.getElementById('player_question').innerText =
			'Question Turn - ' +
			player2_name.toLowerCase().charAt(0).toUpperCase() +
			player2_name.slice(1);
	} else {
		question_turn = 'player1';
		document.getElementById('player_question').innerText =
			'Question Turn - ' +
			player1_name.toLowerCase().charAt(0).toUpperCase() +
			player1_name.slice(1);
	}

	if (answer_turn == 'player1') {
		answer_turn = 'player2';
		plyr_AnsInput.innerText = `Answer Turn - ${
			player2_name.toLowerCase().charAt(0).toUpperCase() + player2_name.slice(1)
		}`;
	} else {
		answer_turn = 'player1';
		plyr_AnsInput.innerText = `Answer Turn - ${
			player1_name.toLowerCase().charAt(0).toUpperCase() + player1_name.slice(1)
		}`;
	}

	output.classList.add('hidden');
};

const send = () => {
	num1 = parseInt((num1Input as HTMLInputElement).value);
	num2 = parseInt((num2Input as HTMLInputElement).value);
	proper_answer = num1 * num2;
	output.classList.remove('hidden');
	// TODO: Remove .innerHTML for security
	output.innerHTML = `
  <h4 id="displayMulti" class="text-blue-700">${num1} &times; ${num2}</h4>
  <br />
  <div>
<label for="#answer" class="text-blue-700">Answer </label>
  <input type="number" id="answer" placeholder="Enter Your Answer"       required       class="bg-blue-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-none"
 />
  <br /><br />
  <button id="btnCheck"           class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
>Check!</button>
  </div>
  `;
	document.getElementById('btnCheck').addEventListener('click', () => check());
};

document.querySelector('#numForm').addEventListener('submit', (e) => {
	e.preventDefault();
	send();
});
//export default game;
export {};
