const user_search_input = document.getElementById('query');
const input_clear_button = document.getElementById('int-clr-btn');
const input_search_button = document.getElementById('int-search-btn');

function search_icon_control() {
    if (user_search_input.value.trim() == '') {
        input_search_button.style.display = 'none';
        return;
    }
    input_search_button.style.display = 'inline-flex';
}

input_clear_button.addEventListener('click', () => {
    user_search_input.value = '';
    search_icon_control();
});

function search_handeler() {
    window.location = window.location.origin + '/404.html';
}

input_search_button.addEventListener('click', search_handeler)
user_search_input.addEventListener('keydown', (e) => { if (e.key == "Enter") { if (user_search_input.value.trim() == '') { return; } search_handeler(); } return; });
user_search_input.addEventListener('input', search_icon_control);

const country = document.getElementById('country');
const CountryFlagURLs = {};
const country_names = document.getElementsByName('country-name');
const country_select_activation_btn = document.getElementById('country-select-activation-btn');

for (let i = 0; i < country_names.length; i++) {
    country_names[i].addEventListener('click', changeCountry);
}

function changeCountry() {
    for (let i = 0; i < country_names.length; i++) {
        if (country_names[i].checked) {
            country.setAttribute('CountryName', country_names[i].value);
            let flagUrl = '';
            switch (country_names[i].value) {
                case "South Africa": flagUrl = "/assets/img/Flag_of_South_Africa.svg"; break;
                case "China": flagUrl = "/assets/img/Flag_of_the_Republic_of_China.svg"; break;
                case "Hong Kong, China": flagUrl = "/assets/img/Flag_of_Hong_Kong.svg"; break;
                case "India": flagUrl = "/assets/img/Flag_of_India.svg"; break;
                case "Japan": flagUrl = "/assets/img/Flag_of_Japan.svg"; break;
                case "Malaysia": flagUrl = "/assets/img/Flag_of_Malaysia.svg"; break;
                case "Philippines": flagUrl = "/assets/img/Flag_of_the_Philippines.svg"; break;
                case "Singapore": flagUrl = "/assets/img/Flag_of_Singapore.svg"; break;
                case "South Korea": flagUrl = "/assets/img/Flag_of_South_Korea.svg"; break;
                case "Taiwan": flagUrl = "/assets/img/Flag_of_the_Republic_of_China.svg"; break;
                case "Thailand": flagUrl = "/assets/img/Flag_of_Thailand.svg"; break;
                case "Vietnam": flagUrl = "/assets/img/Flag_of_Vietnam.svg"; break;
                case "Australia": flagUrl = "/assets/img/Flag_of_Australia.svg"; break;
                case "New Zealand": flagUrl = "/assets/img/Flag_of_New_Zealand.svg"; break;
                case "Austria": flagUrl = "/assets/img/Flag_of_Australia.svg"; break;
                case "Belgium": flagUrl = "/assets/img/Flag_of_Belgium.svg"; break;
                case "Bulgaria": flagUrl = "/assets/img/Flag_of_Bulgaria.svg"; break;
                case "Czech Republic": flagUrl = "/assets/img/Flag_of_the_Czech_Republic.svg"; break;
                case "Denmark": flagUrl = "/assets/img/Flag_of_Denmark.svg"; break;
                case "Estonia": flagUrl = "/assets/img/Flag_of_Estonia.svg"; break;
                case "Finland": flagUrl = "/assets/img/Flag_of_Finland.svg"; break;
                case "France": flagUrl = "/assets/img/Flag_of_France.svg"; break;
                case "Germany": flagUrl = "/assets/img/Flag_of_Germany.svg"; break;
                case "Greece": flagUrl = "/assets/img/Flag_of_Greece.svg"; break;
                case "Hungary": flagUrl = "/assets/img/Flag_of_Hungary.svg"; break;
                case "Ireland": flagUrl = "/assets/img/Flag_of_Ireland.svg"; break;
                case "Italy": flagUrl = "/assets/img/Flag_of_Italy.svg"; break;
                case "Latvia": flagUrl = "/assets/img/Flag_of_Latvia.svg"; break;
                case "Lithuania": flagUrl = "/assets/img/Flag_of_Lithuania.svg"; break;
                case "Luxembourg": flagUrl = "/assets/img/Flag_of_Luxembourg.svg"; break;
                case "Netherlands": flagUrl = "/assets/img/Flag_of_the_Netherlands.svg"; break;
                case "Norway": flagUrl = "/assets/img/Flag_of_Norway.svg"; break;
                case "Poland": flagUrl = "/assets/img/Flag_of_Poland.svg"; break;
                case "Portugal": flagUrl = "/assets/img/Flag_of_Portugal.svg"; break;
                case "Romania": flagUrl = "/assets/img/Flag_of_Romania.svg"; break;
                case "Slovakia": flagUrl = "/assets/img/Flag_of_Slovakia.svg"; break;
                case "Slovenia": flagUrl = "/assets/img/Flag_of_Slovenia.svg"; break;
                case "Spain": flagUrl = "/assets/img/Bandera_de_España.svg"; break;
                case "Sweden": flagUrl = "/assets/img/Flag_of_Sweden.svg"; break;
                case "Switzerland": flagUrl = "/assets/img/Flag_of_Switzerland.svg"; break;
                case "United Kingdom": flagUrl = "/assets/img/Flag_of_the_United_Kingdom.svg"; break;
                case "Israel": flagUrl = "/assets/img/Flag_of_Israel.svg"; break;
                case "Canada": flagUrl = "/assets/img/Flag_of_Canada.svg"; break;
                case "Mexico": flagUrl = "/assets/img/Flag_of_Mexico.svg"; break;
                case "United States": flagUrl = "/assets/img/Flag_of_the_United_States.svg"; break;
                case "Brazil": flagUrl = "/assets/img/Flag_of_Brazil.svg"; break;
            }
            country.src = flagUrl;
            country_select_activation_btn.checked = false;
        }
    }
}

if (country_names[3]) {
    country_names[3].click();
}

let themmeChangeBtn = document.getElementById('theme-change-btn');
let darkThemeIcon = document.getElementById('dark-theme');
let lightThemeIcon = document.getElementById('light-theme');

function getDeviceTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

let theme = getDeviceTheme();

if (theme === 'dark') {
    darkThemeIcon.classList.toggle('active');
    document.body.toggleAttribute('dark');
} else {
    lightThemeIcon.classList.toggle('active');
}

themmeChangeBtn.addEventListener('click', () => {
    document.body.toggleAttribute('dark');
    darkThemeIcon.classList.toggle('active');
    lightThemeIcon.classList.toggle('active');
});