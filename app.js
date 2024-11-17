document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!");

    // Get the search button by its ID
    const button = document.getElementById("searchButton");

    // Add an event listener to handle clicks
    button.addEventListener("click", function () {
        console.log("Search button clicked!");

        // Perform a fetch request to get the superheroes data
        fetch('http://localhost/info2180-lab4/superheroes.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                console.log("Data fetched successfully:", data);
                // Show the data in an alert
                alert(`${data}`);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                alert("Failed to fetch superhero data.");
            });
    });
});