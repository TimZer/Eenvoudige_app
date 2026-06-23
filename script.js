let lang = "nl";   // huidige taal (start: Nederlands)
let data = {    };     // hier komt de JSON taaldata in

//Laad een taalbestand (nl.json of en.json)
function loadLang(newLang) {
    lang = newLang; // onthoud welke taal actief is

    //haal JSON bestand op van /lang map
    fetch("./lang/" + lang + ".json")
        .then(res => res.json()) // zet response om naar JSON
        .then(json => {
            data = json; // sla vertalingen op in variabele
            apply();     // pas ze toe op de pagina
        });
}

//Zet teksten in de HTML op basis van data-key
function apply() {
    document.title = data.title; // verander titel van tabblad

    // zoek alle elementen met data-key attribuut
    document.querySelectorAll("[data-key]").forEach(el => {
        let key = el.getAttribute("data-key"); // pak bijv. "welcome"

        // vervang tekst met juiste vertaling uit JSON
        el.innerText = data[key];
    });
}

//Knop om taal te wisselen
function switchLang() {
    // als huidige taal NL is → ga naar EN, anders terug naar NL
    loadLang(lang === "nl" ? "en" : "nl");
}

//start de app met standaard taal
loadLang(lang);