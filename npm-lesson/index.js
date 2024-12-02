import cows from 'cows';
import oneLinerJoke from 'one-liner-joke';

const arrayOfCows = cows()
const randomIndex = Math.floor( Math.random() * arrayOfCows.length )
console.log(arrayOfCows[randomIndex])

const getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke)