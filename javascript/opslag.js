/*FUNCTIE: Gegevens opslaan*/
function slaGegevensOp(
    lijstMetSlaapGegevens
) {

    // Zet de lijst om naar tekst
    let gegevensAlsTekst =
        JSON.stringify(
            lijstMetSlaapGegevens
        );

    // Sla de tekst op in LocalStorage
    localStorage.setItem(
        "opgeslagenSlaapGegevens",
        gegevensAlsTekst
    );

}

/*FUNCTIE: Gegevens ophalen*/
function haalGegevensOp() {

    // Haal gegevens op uit LocalStorage
    let opgeslagenGegevens =
        localStorage.getItem(
            "opgeslagenSlaapGegevens"
        );

    // Controleer of er gegevens bestaan
    if (
        opgeslagenGegevens === null
    ) {

        // Geef lege lijst terug
        return [];

    } else {

        // Zet tekst terug naar een lijst
        let lijstMetSlaapGegevens =
            JSON.parse(
                opgeslagenGegevens
            );

        // Geef lijst terug
        return lijstMetSlaapGegevens;

    }

}

/*FUNCTIE: Verwijder alle gegevens*/
function verwijderAlleGegevens() {

    // Verwijder gegevens uit LocalStorage
    localStorage.removeItem(
        "opgeslagenSlaapGegevens"
    );

}

/*FUNCTIE: Controleer of gegevens bestaan*/
function controleerOfGegevensBestaan() {

    // Haal gegevens op uit opslag
    let opgeslagenGegevens =
        localStorage.getItem(
            "opgeslagenSlaapGegevens"
        );

    // Controleer of gegevens aanwezig zijn
    if (
        opgeslagenGegevens === null
    ) {

        // Er zijn geen gegevens
        return false;

    } else {

        // Er zijn wel gegevens
        return true;

    }

}

/*FUNCTIE: Verwijder één registratie*/
function verwijderRegistratie(
    identificatieNummer
) {

    // Haal alle gegevens op
    let lijstMetSlaapGegevens =
        haalGegevensOp();

    // Nieuwe lege lijst
    let nieuweLijstMetSlaapGegevens =
        [];

    // Doorloop alle registraties
    for (
        let slaapGegeven
        of lijstMetSlaapGegevens
    ) {

        // Controleer of dit NIET de registratie is
        if (
            slaapGegeven.identificatieNummer !==
            identificatieNummer
        ) {

            // Bewaar registratie
            nieuweLijstMetSlaapGegevens.push(
                slaapGegeven
            );

        }

    }

    // Sla nieuwe lijst op
    slaGegevensOp(
        nieuweLijstMetSlaapGegevens
    );

}