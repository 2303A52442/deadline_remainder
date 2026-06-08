const reminderId =
localStorage.getItem(
  "editReminderId"
);

const form =
document.getElementById(
  "editForm"
);

form.addEventListener(
  "submit",
  async (e) => {
    e.preventDefault();

    const title =
    document.getElementById(
      "title"
    ).value;

    const description =
    document.getElementById(
      "description"
    ).value;

    const deadline =
    document.getElementById(
      "deadline"
    ).value;

    await fetch(
      `http://localhost:5000/api/reminders/${reminderId}`,
      {
        method: "PUT",

        headers: {
          "Content-Type":
          "application/json",
        },

        body: JSON.stringify({
          title,
          description,
          deadline,
        }),
      }
    );

    alert(
      "Reminder Updated"
    );

    window.location.href =
      "dashboard.html";
  }
);