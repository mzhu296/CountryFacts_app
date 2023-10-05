document.addEventListener("DOMContentLoaded", function () {
    // Get references to the search input and content block
    const searchCountry = document.getElementById("nameSearch");
    const searchCurrency = document.getElementById("currencySearch");
    const searchResults = document.createElement("div");
    searchResults.id = "searchResults";
    searchResults.style.display = "none";
    document.querySelector(".search-container").appendChild(searchResults);

    // Event listener for input changes in the name search box
    searchCountry.addEventListener("input", function () {
        const keyword = searchCountry.value.toLowerCase();
        updateSearchResults(keyword, "name");
    });

    // Event listener for input changes in the currency code search box
    searchCurrency.addEventListener("input", function () {
        const keyword = searchCurrency.value.toUpperCase(); // Convert input to uppercase
        updateSearchResults(keyword, "currency");
    });

    function updateSearchResults(keyword, searchType) {
        // Remove all child elements from the search results container
        while (searchResults.firstChild) {
            searchResults.removeChild(searchResults.firstChild);
        }

        // Hide the search results container if the search term is empty
        searchResults.style.display = keyword.trim() === "" ? "none" : "block";

        // Loop through the country list and add matching items to the search results
        const countries = document.querySelectorAll(".country");

        countries.forEach(function (country) {
            let textToSearch = "";
            if (searchType === "name") {
                textToSearch = country.querySelector("h2").textContent.toLowerCase();
            } else if (searchType === "currency") {
                textToSearch = country.querySelector("h3").textContent.toUpperCase();
            }

            if (textToSearch.includes(keyword)) {
                const clone = country.cloneNode(true);
                searchResults.appendChild(clone);
            }
        });
    }
});
