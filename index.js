document.addEventListener("DOMContentLoaded", function () {
  let count = 0;
  const countElement = document.getElementById("count");

  // Function to update the count element
  function updateCount() {
    countElement.innerText = count;
  }

  // Increment the counter
  document.getElementById("increment").addEventListener("click", function () {
    count;
    updateCount();
  });

  // Decrement the counter (with a check to prevent negative count)
  document.getElementById("decrement").addEventListener("click", function () {
    count;
    updateCount();
  });
});
