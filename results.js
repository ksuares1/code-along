// Function to navigate to the next step of the quiz
function nextStep(event) {
	event.preventDefault(); // Prevents the default button behavior

	const currentStep = event.target.closest('.quiz-step');
	const nextStep = currentStep.nextElementSibling;

	if (nextStep) {
		currentStep.classList.remove('show');
		nextStep.classList.add('show');
	}
}

// Function to handle the final form submission
function submitQuiz(event) {
	event.preventDefault(); // Prevents the default form submission behavior

	// Get selected values from the form
	const dressCode = getSelectedValue('dressCode');
	const preferredBrand = getSelectedValue('preferredBrand');
	const workplaceClimate = getSelectedValue('workplaceClimate');
	const itemsLookingFor = getSelectedValue('itemsLookingFor');
	const budgetRange = getSelectedValue('budgetRange');

	// Determine the route based on quiz answers
	let route = '';
	if (dressCode === 'option1') {
		route = 'shop.html#first-card';
	} else if (dressCode === 'option2') {
		route = 'shop.html#second-card';
	}
	// Add more conditions for other possible routes based on quiz answers

	// Redirect to the determined route
	window.location.href = route;
}

// Function to get the selected value from a group of radio buttons
function getSelectedValue(name) {
	const radioButtons = document.getElementsByName(name);
	for (const radioButton of radioButtons) {
		if (radioButton.checked) {
			return radioButton.value;
		}
	}
	return null; // Return null if no option is selected
}
