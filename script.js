document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("movie-form");
  const result = document.getElementById("result");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const title = document.getElementById("movie-title").value;
    await fetchDetails(title);
  });

  async function fetchDetails(title) {
    const url =
      "https://movie-s1wifw.5sc6y6-2.usa-e2.cloudhub.io/fetchdetail";
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    };

    try {
      const response = await fetch(url, payload);
      const data = await response.json();

      if (data.status === "success") {
        // Save data to local storage and redirect to details.html
        localStorage.setItem("movieData", JSON.stringify(data));
        window.location.href = "details.html";
      } else {
        result.innerHTML = `<p>Error: ${"No data found!"}</p>`;
      }
    } catch (error) {
      result.innerHTML = `<p>Network error: ${error.message}</p>`;
    }
  }
});
