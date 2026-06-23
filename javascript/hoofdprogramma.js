/*
APP STARTEN
*/
// Vernieuw het scherm zodra de pagina opent
vernieuwScherm();

/*
OPSLAAN KNOP OPZOEKEN
*/
// Zoek de opslaan knop
let opslaanKnop =
    document.getElementById(
        "opslaanKnop"
    );

/*
VERWIJDER KNOP OPZOEKEN
*/
// Zoek de verwijder knop
let verwijderKnop =
    document.getElementById(
        "verwijderKnop"
    );

/*
OPSLAAN KNOP KLIKKEN
*/
// Luister naar klik op opslaan knop
opslaanKnop.addEventListener(

    "click",

    function () {

        console.log("Opslaan knop werkt");

        // Lees de begintijd uit het formulier
        let gekozenBeginTijd =
            document.getElementById(
                "beginTijd"
            ).value;

        // Lees de eindtijd uit het formulier
        let gekozenEindTijd =
            document.getElementById(
                "eindTijd"
            ).value;

        // Controleer of begintijd leeg is
        if (
            gekozenBeginTijd === ""
        ) {

            // Toon foutmelding
            alert(
                "Vul een begintijd in."
            );

        }

        // Controleer of eindtijd leeg is
        else if (
            gekozenEindTijd === ""
        ) {

            // Toon foutmelding
            alert(
                "Vul een eindtijd in."
            );

        }

        // Beide velden zijn ingevuld
        else {

            // Bereken aantal uren slaap
            let aantalUrenSlaap =
                berekenAantalUrenSlaap(
                    gekozenBeginTijd,
                    gekozenEindTijd
                );

                // Maak nieuwe registratie
                let nieuwSlaapGegeven = {

                // Uniek nummer voor deze registratie
                identificatieNummer:
                    Date.now(),

                // Datum van vandaag
                datum:
                    new Date()
                    .toLocaleDateString(),

                // Begintijd
                beginTijd:
                    gekozenBeginTijd,

                // Eindtijd
                eindTijd:
                    gekozenEindTijd,

                // Aantal uren slaap
                aantalUrenSlaap:
                    aantalUrenSlaap

            };

            // Haal bestaande gegevens op
            let lijstMetSlaapGegevens =
                haalGegevensOp();

            // Voeg nieuwe registratie toe
            lijstMetSlaapGegevens.push(
                nieuwSlaapGegeven
            );

            // Sla alles opnieuw op
            slaGegevensOp(
                lijstMetSlaapGegevens
            );

            // Maak begintijd leeg
            document.getElementById(
                "beginTijd"
            ).value = "";

            // Maak eindtijd leeg
            document.getElementById(
                "eindTijd"
            ).value = "";

            // Vernieuw scherm
            vernieuwScherm();

            // Toon melding
            alert(
                "Slaapregistratie opgeslagen."
            );

        }

    }

);

/*
VERWIJDER KNOP KLIKKEN
*/
// Luister naar klik op verwijder knop
verwijderKnop.addEventListener(

    "click",

    function () {

        // Vraag bevestiging
        let gebruikerWilVerwijderen =
            confirm(
                "Weet je zeker dat je alles wilt verwijderen?"
            );

        // Controleer antwoord
        if (
            gebruikerWilVerwijderen === true
        ) {

            // Verwijder gegevens
            verwijderAlleGegevens();

            // Vernieuw scherm
            vernieuwScherm();

            // Toon melding
            alert(
                "Alle gegevens zijn verwijderd."
            );

        } else {

            // Gebruiker heeft geannuleerd
            alert(
                "Verwijderen geannuleerd."
            );

        }

    }

);

if ("serviceWorker" in navigator
) {
    navigator.serviceWorker.register(
        "service-worker.js"
    );
} 