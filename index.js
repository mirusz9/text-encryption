// What are you looking for here?
// Maybe you're at the right place

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let message = 'EXAMPLEMESSAGE';
const number1 = 0;
const number2 = 1;

const add = (text, n) => {
	const letters = text.toUpperCase().split('');
	return letters
		.map((l) => {
			const index = alphabet.indexOf(l);

			// Increment each letter by n
			const newIndex = (index + n) % 26;

			return alphabet[newIndex];
		})
		.join('');
};

const multiply = (text, n) => {
	const letters = text.toUpperCase().split('');
	return letters
		.map((l) => {
			const index = alphabet.indexOf(l) + 1;

			// Multiply each letter by n
			const newIndex = (index * n - 1) % 26;

			return alphabet[newIndex];
		})
		.join('');
};

// The magic happens here
message = add(message, number1);
message = multiply(message, number2);

console.log(message);
