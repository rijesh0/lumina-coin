document.addEventListener('DOMContentLoaded', function() {
  // Initialize user's LUMINA balance (starting at 0)
  let luminaBalance = 0;

  // Function to update the LUMINA count in the UI
  function updateLuminaCount() {
    document.getElementById('lumina-count').innerText = luminaBalance;
  }

  // Handle the 'Join' button clicks for tasks
  const joinButtons = document.querySelectorAll('.task-button');
  joinButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Open the external link in a new tab
      const url = this.getAttribute('data-url');
      window.open(url, '_blank');

      // Add 100 LUMINA reward for completing the task
      luminaBalance += 100;
      updateLuminaCount();
    });
  });

  // Coin flip logic
  const flipCoinButton = document.getElementById('flip-coin-btn');
  const coinFlipResult = document.getElementById('coin-flip-result');

  flipCoinButton.addEventListener('click', function() {
    // Get the amount the user wants to bet
    const betAmount = parseInt(document.getElementById('lumina-bet').value);
    
    // Check if the bet is valid (must be a number and less than or equal to the balance)
    if (isNaN(betAmount) || betAmount <= 0) {
      coinFlipResult.innerText = "Please enter a valid bet.";
      return;
    }

    if (betAmount > luminaBalance) {
      coinFlipResult.innerText = "You don't have enough LUMINA to place that bet.";
      return;
    }

    // Simulate the coin flip (50/50 chance)
    const coinFlip = Math.random() < 0.5 ? 'heads' : 'tails';
    
    // Randomly choose heads or tails for the outcome
    if (coinFlip === 'heads') {
      // User wins, double the bet amount
      luminaBalance += betAmount;
      coinFlipResult.innerText = `You won! Your bet of ${betAmount} LUMINA was doubled.`;
    } else {
      // User loses, subtract the bet amount
      luminaBalance -= betAmount;
      coinFlipResult.innerText = `You lost! You lost ${betAmount} LUMINA.`;
    }

    // Update the LUMINA count display
    updateLuminaCount();
  });

  // Initialize the LUMINA count display
  updateLuminaCount();
});

// coin flip info 

 // Get the modal element
 var modal = document.getElementById("gameModal");

 // Get the info icon and close button
 var infoIcon = document.getElementById("info-icon");
 var closeBtn = document.getElementsByClassName("close")[0];

 // Open the modal when the info icon is clicked
 infoIcon.onclick = function () {
   modal.style.display = "block";
 };

 // Close the modal when the close button is clicked
 closeBtn.onclick = function () {
   modal.style.display = "none";
 };

 // Close the modal when clicking outside of the modal content
 window.onclick = function (event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 };
