// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Game start</h1>`;

const roundChoises: Array<number> = [0, 0, 10, 56, 100];

const calculateWinningNumber = (choises: Array<number>) =>
  (choises.reduce((p, c) => p + c, 0) / choises.length) * 0.8;

appDiv.innerHTML += `<h6>Round 1</h6>`;
appDiv.innerHTML += `<p>Inputs ${roundChoises}</p>`;

const winningNumber = calculateWinningNumber(roundChoises);
appDiv.innerHTML += `<p>Winning Number ${winningNumber}</p>`;

const calculateWinnerScores = (choises: Array<number>, winningNumber: number) =>
  choises.map(
    (choise) => Math.round(Math.abs(winningNumber - choise) * 100) / 100
  );
const calculateWinnerIndex = calculateWinnerScores.index();
const winnerIndex = calculateWinnerIndex(roundChoises, winningNumber);
appDiv.innerHTML += `<p>Winning Number ${winnerIndex}</p>`;
