document.addEventListener("DOMContentLoaded", function () {
    // Get references to the search input and content block
    const nameSearchInput = document.getElementById("nameSearch");
    const searchResults = document.createElement("div");
    searchResults.id = "searchResults";
    document.querySelector(".search-container").appendChild(searchResults);
  
    // Event listener for input changes in the name search box
    nameSearchInput.addEventListener("input", function () {
      const searchTerm = nameSearchInput.value.toLowerCase();
      updateSearchResults(searchTerm);
    });
  
    function updateSearchResults(searchTerm) {
       // Remove all child elements from the search results container
       while (searchResults.firstChild) {
        searchResults.removeChild(searchResults.firstChild);
       }
      // Loop through the country list and add matching items to the search results
      const countries = document.querySelectorAll(".country")
  
      countries.forEach(function (country) {
        const countryName = country.querySelector("h2").textContent.toLowerCase();
        if (countryName.includes(searchTerm)) {
          const clone = country.cloneNode(true);
          searchResults.appendChild(clone);
        }
      });
    }
  });
  