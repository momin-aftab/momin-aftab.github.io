function toggleBugForm() {
  const form = document.getElementById("bugForm");
  form.style.display = form.style.display === "none" || !form.style.display ? "block" : "none";
}

function submitBug(event) {
  event.preventDefault();

  const name = event.target.name.value;
  const bug = event.target.bug.value;
  console.log(`Bug from ${name}: ${bug}`);

  // Close the form
  const formContainer = document.getElementById("bugForm");
  formContainer.style.display = "none";

  // Change bug icon to tick and color to green
  const bugButton = document.getElementById("bugButton");
  const bugIcon = document.getElementById("bugIcon");

  bugIcon.textContent = "check_circle"; // change icon
  bugButton.classList.add("success"); // add green background and disable clicks

  // Reset after 1 second
  setTimeout(() => {
    bugIcon.textContent = "bug_report"; // revert icon
    bugButton.classList.remove("success"); // remove green style and re-enable clicks
  }, 1000);

  // Reset form inputs
  event.target.reset();
}
