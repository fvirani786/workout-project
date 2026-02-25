const form = document.getElementById("workoutForm");
const workoutList = document.getElementById("workoutList");

// OPTIONAL sort controls (add these IDs in HTML if you want sorting UI)
const sortBy = document.getElementById("sortBy");      // select: date|duration|calories|type
const lastFive = document.getElementById("lastFive");  // checkbox

let workouts = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const date = document.getElementById("date").value;
  const duration = Number(document.getElementById("duration").value);
  const calories = Number(document.getElementById("calories").value);
  const type = document.getElementById("type").value;

  // Store workout in array (this is what enables sorting)
  workouts.push({ date, duration, calories, type });

  renderWorkouts();
  form.reset();
});

function renderWorkouts() {
  workoutList.innerHTML = "";

  // make a copy so sorting doesn’t permanently reorder unless you want it to
  let list = [...workouts];

  // If you added sort controls, use them; otherwise default to newest first
  const sortValue = sortBy ? sortBy.value : "date";

  list.sort((a, b) => {
    if (sortValue === "date") return new Date(b.date) - new Date(a.date); // newest first
    if (sortValue === "duration") return b.duration - a.duration;
    if (sortValue === "calories") return b.calories - a.calories;
    if (sortValue === "type") return a.type.localeCompare(b.type);
    return 0;
  });

  // show only last 5 if checkbox exists and is checked
  if (lastFive && lastFive.checked) {
    list = list.slice(0, 5);
  }

  list.forEach((workout) => {
    const workoutItem = document.createElement("div");
    workoutItem.classList.add("workout-item");

    workoutItem.innerHTML = `
      <strong>${workout.type}</strong><br>
      Date: ${workout.date}<br>
      Duration: ${workout.duration} minutes<br>
      Calories: ${workout.calories}
    `;

    workoutList.appendChild(workoutItem);
  });
}

// If sort controls exist, re-render whenever they change
if (sortBy) sortBy.addEventListener("change", renderWorkouts);
if (lastFive) lastFive.addEventListener("change", renderWorkouts);



