// Sample data (replace with your actual data)
const countriesData = [
    {name: "United States of America", currency: "USD",},
    {name: "People's Republic of China", currency: "CHY",},
    {name: "Canada", currency: "CAD",},   
    {name: "India", currency: "INR",},
    {name: "Japan", currency: "JPY",},
    {name: "France", currency: "EUR",},
    {name: "Germany", currency: "EUR",},
    {name: "Italy", currency: "EUR",},
    {name: "Spain", currency: "EUR",},
    {name: "Portugal", currency: "EUR",},
    {name: "Finland", currency: "EUR",},
    {name: "Ireland", currency: "EUR",},
    {name: "Vietnam", currency: "VND",},
    {name: "Switzerland", currency: "CHF",},
    {name: "Australia", currency: "AUD",},
    // Add data for other countries
];

document.getElementById('nameSearchBtn').addEventListener('click', searchByName);
document.getElementById('currencySearchBtn').addEventListener('click', searchByCurrency);

document.getElementById('nameSearch').addEventListener('keyup', function (event) {
    if (event.key === "Enter") {
        searchByName();
    }
});

document.getElementById('currencySearch').addEventListener('keyup', function (event) {
    if (event.key === "Enter") {
        searchByCurrency();
    }
});


function searchByName() {
    const nameSearchValue = document.getElementById('nameSearch').value.trim();
    if (nameSearchValue.length > 20 || /\d/.test(nameSearchValue)) {
        alert("Invalid input for Name search.");
        return;
    }
    displayResults(nameSearchValue.toLowerCase(), "name");
}

function searchByCurrency() {
    const currencySearchValue = document.getElementById('currencySearch').value.trim();
    if (!/^[A-Z]+$/.test(currencySearchValue)) {
        alert("Invalid input for Currency search. Please enter three uppercase letters (A-Z).");
        return;
    }
    displayResults(currencySearchValue, "currency");
}

function displayResults(query, type) {
    let matches = [];
    for (const country of countriesData) {
        if (type === "name" && country.name.toLowerCase().includes(query)) {
            matches.push(country);
        } else if (type === "currency" && country.currency.toUpperCase().includes(query)) {
            matches.push(country);
        }
        if (matches.length >= 5) {
            break;
        }
    }
    if (matches.length === 0) {
        alert("No matches found.");
    } else {
        let message = "Matches found:\n";
        for (const match of matches) {
            message += `- ${match.name} (${match.currency})\n`;
        }
        alert(message);
    }
}

function convertToUppercase(inputElement) {
    inputElement.value = inputElement.value.toUpperCase();
}