const usd_input = document.getElementById("usdInput");
const pkrH1Tag = document.getElementById("pkrH1Tag");
const pkr_pTag = document.getElementById("pkr_pTag");
const baseCurrency_pTag = document.getElementById("baseCurrency_pTag");
const base_currency_label = document.getElementById("base_currency_label");
const calculate_currencies_btn = document.getElementById(
    "calculate_currencies"
);
const base_currency_select = document.getElementById("base_currency");

const API_KEY = "da73006cf8b0f1d2949e0294";

let BASE_CURRENCY = "AED";
let all_rates = {}; // store all conversion rates here
let user_usd = 0;

// Populate dropdown once
async function populateBaseCurrencies() {
    try {
        const response = await fetch(
            `https://v6.exchangerate-api.com/v6/${API_KEY}/codes`
        );
        const data = await response.json();

        if (data.result === "success") {
            base_currency_select.innerHTML = "";
            data.supported_codes.forEach(([code, name]) => {
                const option = document.createElement("option");
                option.value = code;
                option.textContent = `${name} (${code})`;
                if (code === BASE_CURRENCY) option.selected = true;
                base_currency_select.appendChild(option);
            });

            await fetchRates(BASE_CURRENCY); // fetch once initially
        }
    } catch (err) {
        console.error("Error populating currencies:", err);
    }
}

// Fetch and store exchange rates once per selected base currency
async function fetchRates(currency) {
    try {
        const response = await fetch(
            `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currency}`
        );
        const data = await response.json();

        if (data.result === "success") {
            all_rates = data.conversion_rates;
            BASE_CURRENCY = currency;
            baseCurrency_pTag.innerText = BASE_CURRENCY;
            base_currency_label.innerText = BASE_CURRENCY;
            pkr_pTag.innerText = all_rates.PKR.toFixed(2);
        }
    } catch (err) {
        console.error("Error fetching rates:", err);
    }
}

// Update base currency and fetch new rates once
base_currency_select.addEventListener("change", async (e) => {
    const selectedCurrency = e.target.value;
    await fetchRates(selectedCurrency);
});

// User input handler
usd_input.addEventListener("change", (e) => {
    user_usd = parseFloat(e.target.value);
});

// Convert button
calculate_currencies_btn.onclick = () => {
    if (!all_rates.PKR || isNaN(user_usd)) {
        alert("Please enter a valid amount and ensure rates are loaded.");
        return;
    }

    const total_pkr = (user_usd * all_rates.PKR).toFixed(2);
    pkrH1Tag.innerText = total_pkr;
    pkr_pTag.innerText = all_rates.PKR.toFixed(2);
};

// Initialize dropdown and fetch once
populateBaseCurrencies();
