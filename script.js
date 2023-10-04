document.addEventListener("DOMContentLoaded", function () {
  // Get references to the search input and content block
  const nameSearchInput = document.getElementById("nameSearch");
  const currencySearchInput = document.getElementById("currencySearch");
  const searchResults = document.createElement("div");
  searchResults.id = "searchResults";
  searchResults.style.display = "none";
  document.querySelector(".search-container").appendChild(searchResults);

  // Event listener for input changes in the name search box
  nameSearchInput.addEventListener("input", function () {
      const searchTerm = nameSearchInput.value.toLowerCase();
      updateSearchResults(searchTerm, "name");
  });

  // Event listener for input changes in the currency code search box
  currencySearchInput.addEventListener("input", function () {
      const searchTerm = currencySearchInput.value.toLowerCase(); // Convert input to uppercase
      updateSearchResults(searchTerm, "currency-code");
  });

  function updateSearchResults(searchTerm, searchType) {
      // Remove all child elements from the search results container
      while (searchResults.firstChild) {
          searchResults.removeChild(searchResults.firstChild);
      }

      // Hide the search results container if the search term is empty
      if (searchTerm.trim() === "") {
          searchResults.style.display = "none";
          return;
      }

      // Loop through the country list and add matching items to the search results
      const countries = document.querySelectorAll(".country");
      let hasResults = false; // Flag to check if there are any results

      countries.forEach(function (country) {
          let textToSearch = "";
          if (searchType === "name") {
              textToSearch = country.querySelector("h2").textContent.toLowerCase();
          } else if (searchType === "currency-code") {
              textToSearch = country.querySelector("h3").textContent.toLowerCase();
          }

          if (textToSearch.includes(searchTerm)) {
              const clone = country.cloneNode(true);
              searchResults.appendChild(clone);
              hasResults = true; // Set the flag to true if at least one result is found
          }
      });

      // Hide the search results container if there are no results
      if (!hasResults) {
          searchResults.style.display = "none";
      } else {
          searchResults.style.display = "block";
      }
  }
});
