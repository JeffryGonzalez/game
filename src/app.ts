import { getRandomInt } from './utils';

let squares: NodeListOf<HTMLDivElement>;
export function runApp() {
    // 1. Find the all the squares.
    squares = document.querySelectorAll('.square') as NodeListOf<HTMLDivElement>;
    const secret = getSecretNumber();

    squares.forEach((sq, index) => {
        if (index === secret) {
            sq.dataset.secret = 'true';
        }
        sq.addEventListener('click', handleClick);
    });
    // 2. Pick one as the secret square and "mark it".
    // 3. Make it so that when the player clicks the square...
}



function handleClick(e: any) {
    // console.log(e);
    const clickedSquare = this as HTMLDivElement;
    if (clickedSquare.dataset.secret === 'true') {
        clickedSquare.classList.add('winner');
        const message = document.getElementById('message') as HTMLElement;
        message.innerText = 'Woah! Awesome! You Found it! Wow!';
        squares.forEach(s => {
            if (s !== clickedSquare) {
                s.classList.add('loser');
            }
        });
    } else {
        clickedSquare.classList.add('loser');
    }
}


function getSecretNumber() {
    return getRandomInt(0, 5);
}
