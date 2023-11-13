const startBtn = document.querySelector('#heroBtn');
const hero = document.querySelector('.main-container ');
const form = document.querySelector('.quiz-container');

startBtn.addEventListener('click', () => {
	hero.classList.add('hide');
	form.classList.add('show');
});

//  Start Quiz
let currentStep = 1;

function nextStep(e) {
	e.preventDefault();
	const currentStepElement = document.getElementById(`step${currentStep}`);
	currentStepElement.style.display = 'none';

	currentStep++;
	const nextStepElement = document.getElementById(`step${currentStep}`);
	if (nextStepElement) {
		nextStepElement.style.display = 'block';
	} else {
		alert('End of quiz');
	}
}

function submitQuiz(e) {
	e.preventDefault();

	//  Get selected values from quiz
	const dressCode = getSelectedValue('brands');
	const prefferedBrand = getSelectedValue('brands');
	const budgetRange = getSelectedValue('budgetRange');

	//  Determine specific route based on selected value
	let route = '';
	if (dressCode === 'option1') {
		route = 'shop.html#cardTwo';
	} else if (dressCode === 'option2') {
		route = 'shop.html#cardThree';
	} else if (dressCode === 'option3') {
		route = 'shop.html#cardTwo';
	}

	if (dressCode === null) {
		alert('Nothing was selected. Please try again!');
	}

	window.location.href = route;
}

function getSelectedValue(name) {
	const radioButtons = document.getElementsByName(name);
	for (const radioButton of radioButtons) {
		if (radioButton.checked) {
			return radioButton.value;
		}
	}
	return null;
}
