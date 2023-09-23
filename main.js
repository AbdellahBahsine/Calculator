const result = document.querySelector("#result");
const resultButton = document.querySelector("#button");
const clearButton = document.querySelector("#clear");

const numbers = document.querySelectorAll("#numbers");

console.log(numbers.length)
for (let i = 0; i < numbers.length; i++)
{
	numbers[i].addEventListener("click", () => {
		if ((numbers[i].textContent == '+' || numbers[i].textContent == '-'
		|| numbers[i].textContent == '*') && result.value == '')
			return ;
		result.value += numbers[i].textContent;
	});
}

resultButton.addEventListener("click", () => {
	if (result.value == '')
		return ;
	result.value = eval(result.value.replace(/[^0-9\+\-\*\/]/g, ''));
});

clearButton.addEventListener("click", () => {
	result.value = '';
});