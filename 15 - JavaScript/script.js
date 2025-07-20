const usd_input = document.getElementById("usdInput");
const pkrH1Tag = document.getElementById("pkrH1Tag");
const pkr_pTag = document.getElementById("pkr_pTag");
const calculate_currencies_btn = document.getElementById(
    "calculate_currencies"
);

const API_KEY = "da73006cf8b0f1d2949e0294";
const BASE_CURRENCY = "USD";
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${BASE_CURRENCY}`;

let user_usd = 0;

usd_input.addEventListener("change", (e) => {
    user_usd = parseFloat(e.target.value);
});

calculate_currencies_btn.onclick = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        const rate = data.conversion_rates.PKR;
        const total_pkr = (user_usd * rate).toFixed(2);

        pkrH1Tag.innerText = total_pkr;

        pkr_pTag.innerText = rate.toFixed(2);
    } catch (error) {
        console.error("Error fetching exchange rate:", error);
    }
};
