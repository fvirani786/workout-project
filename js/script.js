const form = document.getElementById("workoutForm");
  const workoutList = document.getElementById("workoutList");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const date = document.getElementById("date").value;
    const duration = document.getElementById("duration").value;
    const calories = document.getElementById("calories").value;
    const type = document.getElementById("type").value;

    const workoutItem = document.createElement("div");
    workoutItem.classList.add("workout-item");

    workoutItem.innerHTML = `
      <strong>${type}</strong><br>
      Date: ${date}<br>
      Duration: ${duration} minutes<br>
      Calories: ${calories}
    `;

    workoutList.appendChild(workoutItem);

    form.reset();
  });





