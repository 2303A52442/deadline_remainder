const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const response = await fetch(
    "https://deadline-remainder.onrender.com/api/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  const data = await response.json();

  if (response.ok) {
    localStorage.setItem(
      "user",
      JSON.stringify(data)
    );

    alert("Login Successful");

    window.location.href = "dashboard.html";
  } else {
    alert(data.message);
  }
});