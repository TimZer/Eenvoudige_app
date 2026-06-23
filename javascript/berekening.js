/*
FUNCTIE: Bereken aantal uren slaap
*/
function berekenAantalUrenSlaap(
    beginTijd,
    eindTijd
) {

    // Maak een datum van de begintijd
    let slaapBeginMoment =
        new Date(
            "2026-01-01T" +
            beginTijd
        );

    // Maak een datum van de eindtijd
    let slaapEindMoment =
        new Date(
            "2026-01-01T" +
            eindTijd
        );

    // Bereken het verschil tussen begin en eind
    let verschilInMilliseconden =
        slaapEindMoment -
        slaapBeginMoment;

    // Controleer of de gebruiker over middernacht heeft geslapen
    if (
        verschilInMilliseconden < 0
    ) {

        // Voeg 24 uur toe
        verschilInMilliseconden =
            verschilInMilliseconden +
            (
                24 *
                60 *
                60 *
                1000
            );

    } else {

        // Er hoeft niets aangepast te worden
        verschilInMilliseconden =
            verschilInMilliseconden;

    }

    // Zet milliseconden om naar uren
    let aantalUrenSlaap =
        verschilInMilliseconden /
        (
            1000 *
            60 *
            60
        );

    // Rond af op 1 cijfer achter de komma
    aantalUrenSlaap =
        Number(
            aantalUrenSlaap.toFixed(1)
        );

    // Geef resultaat terug
    return aantalUrenSlaap;

}

/*
FUNCTIE: Bereken gemiddelde slaap
*/
function berekenGemiddeldeSlaap(
    lijstMetSlaapGegevens
) {

    // Controleer of de lijst leeg is
    if (
        lijstMetSlaapGegevens.length === 0
    ) {

        // Geef 0 terug
        return 0;

    } else {

        // Variabele voor totaal aantal uren
        let totaalAantalUren = 0;

        // Doorloop alle registraties
        for (
            let slaapGegeven of lijstMetSlaapGegevens
        ) {

            // Voeg uren toe aan totaal
            totaalAantalUren =
                totaalAantalUren +
                Number(
                    slaapGegeven.aantalUrenSlaap
                );

        }

        // Bereken gemiddelde
        let gemiddeldeSlaap =
            totaalAantalUren /
            lijstMetSlaapGegevens.length;

        // Rond af
        gemiddeldeSlaap =
            Number(
                gemiddeldeSlaap.toFixed(1)
            );

        // Geef resultaat terug
        return gemiddeldeSlaap;

    }

}

/*
FUNCTIE: Bereken minimum slaap
*/
function berekenMinimumSlaap(
    lijstMetSlaapGegevens
) {

    // Controleer of lijst leeg is
    if (
        lijstMetSlaapGegevens.length === 0
    ) {

        // Geef 0 terug
        return 0;

    } else {

        // Neem eerste registratie als beginwaarde
        let minimumSlaap =
            Number(
                lijstMetSlaapGegevens[0]
                .aantalUrenSlaap
            );

        // Doorloop alle registraties
        for (
            let slaapGegeven of lijstMetSlaapGegevens
        ) {

            // Huidige waarde
            let huidigeSlaap =
                Number(
                    slaapGegeven.aantalUrenSlaap
                );

            // Controleer of huidige waarde kleiner is
            if (
                huidigeSlaap <
                minimumSlaap
            ) {

                // Nieuwe minimumwaarde
                minimumSlaap =
                    huidigeSlaap;

            } else {

                // Geen wijziging nodig
                minimumSlaap =
                    minimumSlaap;

            }

        }

        // Geef resultaat terug
        return minimumSlaap;

    }

}
    
/*
FUNCTIE: Bereken maximum slaap
*/
function berekenMaximumSlaap(
    lijstMetSlaapGegevens
) {

    // Controleer of lijst leeg is
    if (
        lijstMetSlaapGegevens.length === 0
    ) {

        // Geef 0 terug
        return 0;

    } else {

        // Neem eerste registratie als beginwaarde
        let maximumSlaap =
            Number(
                lijstMetSlaapGegevens[0]
                .aantalUrenSlaap
            );

        // Doorloop alle registraties
        for (
            let slaapGegeven of lijstMetSlaapGegevens
        ) {

            // Huidige waarde
            let huidigeSlaap =
                Number(
                    slaapGegeven.aantalUrenSlaap
                );

            // Controleer of huidige waarde groter is
            if (
                huidigeSlaap >
                maximumSlaap
            ) {

                // Nieuwe maximumwaarde
                maximumSlaap =
                    huidigeSlaap;

            } else {

                // Geen wijziging nodig
                maximumSlaap =
                    maximumSlaap;

            }

        }

        // Geef resultaat terug
        return maximumSlaap;

    }

}