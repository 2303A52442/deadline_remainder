const currentUser = JSON.parse(
  localStorage.getItem("user")
);

if (!currentUser) {
  window.location.href = "login.html";
}

const welcomeUser =
  document.getElementById("welcomeUser");

if (welcomeUser) {
  welcomeUser.innerText =
    `Welcome, ${currentUser.name}`;
}

async function loadReminders() {
  try {
    const response = await fetch(
      `http://localhost:5000/api/reminders?userId=${currentUser._id}`
    );

    const reminders =
      await response.json();

    document.getElementById(
      "count"
    ).innerText = reminders.length;

    const container =
      document.getElementById(
        "reminderList"
      );

    container.innerHTML = "";

    if (reminders.length === 0) {
      container.innerHTML = `
        <div class="alert alert-info">
          No Reminders Found
        </div>
      `;
      return;
    }

    reminders.forEach((reminder) => {

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const deadlineDate =
        new Date(reminder.deadline);

      deadlineDate.setHours(
        0,
        0,
        0,
        0
      );

      const daysLeft = Math.ceil(
        (deadlineDate - today) /
        (1000 * 60 * 60 * 24)
      );

      let daysColor =
        "text-success";

      if (daysLeft <= 2) {
        daysColor =
          "text-danger";
      } else if (
        daysLeft <= 7
      ) {
        daysColor =
          "text-warning";
      }

      container.innerHTML += `
        <div class="col-md-4 mb-3">

          <div class="card shadow h-100">

            <div class="card-body">

              <h5 class="card-title">
                ${reminder.title}
              </h5>

              <p class="card-text">
                ${reminder.description}
              </p>

              <p>
                <strong>
                  Deadline:
                </strong>
                ${new Date(
                  reminder.deadline
                ).toLocaleDateString()}
              </p>

              <p class="${daysColor} fw-bold">
                ${daysLeft} Days Left
              </p>

              <button
                class="btn btn-warning me-2"
                onclick="editReminder('${reminder._id}')"
              >
                Edit
              </button>

              <button
                class="btn btn-danger"
                onclick="deleteReminder('${reminder._id}')"
              >
                Delete
              </button>

            </div>

          </div>

        </div>
      `;
    });

  } catch (error) {
    console.log(error);
  }
}

async function deleteReminder(id) {

  const confirmDelete =
    confirm(
      "Are you sure you want to delete this reminder?"
    );

  if (!confirmDelete) {
    return;
  }

  await fetch(
    `http://localhost:5000/api/reminders/${id}`,
    {
      method: "DELETE",
    }
  );

  loadReminders();
}

function editReminder(id) {

  localStorage.setItem(
    "editReminderId",
    id
  );

  window.location.href =
    "editReminder.html";
}

function logout() {

  localStorage.removeItem(
    "user"
  );

  window.location.href =
    "login.html";
}

loadReminders();