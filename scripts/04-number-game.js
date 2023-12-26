// document.addEventListener('DOMContentLoaded', function () make sures the html is completely loaded before executing the JS code
document.addEventListener('DOMContentLoaded', function () {
  const randomNumber = generateRandomNumber();
  let attempts = 0;

  const userInput = document.getElementById('userInput');
  const submitBtn = document.getElementById('submitBtn');
  const feedback = document.getElementById('reply');

  submitBtn.addEventListener('click', function () {
      const userGuess = parseInt(userInput.value);

      if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
          feedback.textContent = 'Please enter a valid number between 1 and 100.';
      } else {
         attempts++;
          checkGuess(userGuess);
      }
  });

  function generateRandomNumber() {
      return Math.floor(Math.random() * 100) + 1;
  }

  function checkGuess(guess) {
      if (guess === randomNumber) {
          showFeedback(`"${randomNumber}" is correct, and it took you ${attempts} attempts, Good job!`, 'green');
          disableInputAndButton();
      } else if (guess < randomNumber) {
          showFeedback(`"${guess}" isn't correct, Go higher!`, 'red');
      } else {
          showFeedback(`"${guess}" isn't correct, Go lower!`, 'red');
      }
  }

  function showFeedback(message, color) {
      feedback.textContent = message;
      feedback.style.color = color;
  }

  function disableInputAndButton() {
      userInput.disabled = true;
      submitBtn.disabled = true;
  }
});
