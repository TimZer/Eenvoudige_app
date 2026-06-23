/*
FUNCTIE: Toon alle gegevens op scherm
*/
    function toonGegevensOpScherm() {

        let overzichtVak =
        document.getElementById(
            "overzichtVak"
        );

        overzichtVak.innerHTML ="";



    // Haal alle gegevens op
    let lijstMetSlaapGegevens =
        haalGegevensOp();

        console.log(
    lijstMetSlaapGegevens
);

    // Controleer of er gegevens zijn
    if (
        lijstMetSlaapGegevens.length === 0
    ) {

        // Maak een melding
        let melding =
            document.createElement(
                "p"
            );

        // Zet tekst in de melding
        melding.textContent =
            "Er zijn nog geen slaapregistraties.";

        // Voeg melding toe aan scherm
        overzichtVak.appendChild(
            melding
        );

    } else {

        // Doorloop alle registraties
        for (
            let slaapGegeven of lijstMetSlaapGegevens
        ) {

            // Maak een nieuw blok
            let slaapRegel =
                document.createElement(
                    "div"
                );

            // Geef CSS klasse mee
            slaapRegel.className =
                "slaapRegel";

           // Toon gegevens
            slaapRegel.innerHTML =

            "<strong>Datum:</strong> " +
            slaapGegeven.datum +
            "<br>" +

            "<strong>Begintijd:</strong> " +
            slaapGegeven.beginTijd +
            "<br>" +

            "<strong>Eindtijd:</strong> " +
            slaapGegeven.eindTijd +
            "<br>" +

            "<strong>Aantal uren slaap:</strong> " +
            slaapGegeven.aantalUrenSlaap +
            " uur" +
            "<br><br>";

            // Maak verwijder knop
            let verwijderKnop =
                document.createElement(
                    "button"
                );

            // Tekst op knop
            verwijderKnop.textContent =
                "Verwijderen";

            // Luister naar klik
            verwijderKnop.addEventListener(

                "click",

                function () {

                    // Verwijder registratie
                    verwijderRegistratie(
                        slaapGegeven.identificatieNummer
                    );

                    // Vernieuw scherm
                    vernieuwScherm();

                }

            );

            // Voeg knop toe aan registratie
            slaapRegel.appendChild(
                verwijderKnop
            );


            // Voeg registratie toe aan overzicht
            overzichtVak.appendChild(
            slaapRegel
            );
        }

    }

}

/*
FUNCTIE: Toon statistieken
*/
function toonStatistiekenOpScherm() {

    // Haal alle gegevens op
    let lijstMetSlaapGegevens =
        haalGegevensOp();

    // Bereken gemiddelde slaap
    let gemiddeldeSlaap =
        berekenGemiddeldeSlaap(
            lijstMetSlaapGegevens
        );

    // Bereken minimum slaap
    let minimumSlaap =
        berekenMinimumSlaap(
            lijstMetSlaapGegevens
        );

    // Bereken maximum slaap
    let maximumSlaap =
        berekenMaximumSlaap(
            lijstMetSlaapGegevens
        );

    // Zoek vak voor gemiddelde
    let gemiddeldeSlaapVak =
        document.getElementById(
            "gemiddeldeSlaap"
        );

    // Zoek vak voor minimum
    let minimumSlaapVak =
        document.getElementById(
            "minimumSlaap"
        );

    // Zoek vak voor maximum
    let maximumSlaapVak =
        document.getElementById(
            "maximumSlaap"
        );

    // Toon gemiddelde slaap
    gemiddeldeSlaapVak.textContent =
        gemiddeldeSlaap;

    // Toon minimum slaap
    minimumSlaapVak.textContent =
        minimumSlaap;

    // Toon maximum slaap
    maximumSlaapVak.textContent =
        maximumSlaap;

}

/*
FUNCTIE: Vernieuw scherm
*/
function vernieuwScherm() {

    // Toon overzicht
    toonGegevensOpScherm();

    // Toon statistieken
    toonStatistiekenOpScherm();

}