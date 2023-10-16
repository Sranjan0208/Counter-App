document.addEventListener("DOMContentLoaded", function () {
  let count = 0;
  const countElement = document.getElementById("count");


  function updateCount() {
    countElement.innerText = count;
  }


  document.getElementById("increment").addEventListener("click", function () {
    count;
    updateCount();
  });


  document.getElementById("decrement").addEventListener("click", function () {
    count;
    updateCount();
  });
});
