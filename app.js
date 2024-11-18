document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("searchForm");
    const queryInput = document.getElementById("query");
    const resultDiv = document.getElementById("result");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent form submission
  
      const query = queryInput.value.trim(); // Get the input value
      resultDiv.innerHTML = ""; // Clear previous results
  
      // Fetch data from the PHP file
      fetch(`http://localhost/info2180-lab4/superheroes.php?query=${encodeURIComponent(query)}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.text();
        })
        .then((data) => {
          // Display the response in the result div
          resultDiv.innerHTML = data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          resultDiv.innerHTML = "<p style='color: red;'>Failed to fetch superhero data.</p>";
        });
    });
  });
  