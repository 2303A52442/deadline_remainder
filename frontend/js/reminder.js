const form = document.getElementById("reminderForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const title = document.getElementById("title").value;
  const description =
    document.getElementById("description").value;
  const deadline =
    document.getElementById("deadline").value;

  const response = await fetch(
    "https://deadline-remainder.onrender.com/api/reminders/add",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user._id,
        title,
        description,
        deadline,
      }),
    }
  );

  const data = await response.json();

  alert("Reminder Added Successfully");

  window.location.href = "dashboard.html";
});