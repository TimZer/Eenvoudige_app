/*
SERVICE WORKER VOOR DE SLAAPTRACKER
Dit bestand zorgt ervoor dat de app ook werkt zonder internetverbinding.
Een service worker is een los script dat de browser op de achtergrond
draait, ook als de website niet open staat. Hij kan bestanden onderscheppen
en opslaan in een cache, zodat ze later zonder internet weer gebruikt
kunnen worden.
*/

/*
NAAM EN VERSIE VAN DE CACHE
*/
// Naam van de opslagruimte (cache) voor deze app
let cacheNaam = "slaaptracker-cache-v1";

// Als je later iets wijzigt aan de bestanden, verhoog dan het versienummer
// (bijvoorbeeld naar "slaaptracker-cache-v2"). Daardoor maakt de browser
// een nieuwe cache aan en gooit hij de oude, verouderde bestanden weg.

/*
LIJST MET BESTANDEN DIE OFFLINE BESCHIKBAAR MOETEN ZIJN
*/
// Dit is de "app shell": alle bestanden die de app nodig heeft om te
// kunnen draaien, ook zonder internet.
let bestandenVoorOfflineGebruik = [
    "./",
    "./index.html",
    "./manifest.json",
    "./opmaak/style.css",
    "./opmaak/icoon-192.png",
    "./opmaak/icoon-512.png",
    "./javascript/berekening.js",
    "./javascript/opslag.js",
    "./javascript/schermweergave.js",
    "./javascript/vertaling.js",
    "./javascript/hoofdprogramma.js"
];

/*
STAP 1: INSTALLEREN VAN DE SERVICE WORKER
*/
// Dit gebeurt één keer, de eerste keer dat de browser deze service worker
// tegenkomt. Hier vullen we de cache met alle bestanden uit de lijst.
self.addEventListener(

    "install",

    function (installGebeurtenis) {

        // Wacht tot alle bestanden zijn opgeslagen voordat we klaar zijn
        installGebeurtenis.waitUntil(

            caches.open(
                cacheNaam
            )
            .then(
                function (cache) {

                    // Voeg alle bestanden toe aan de cache
                    return cache.addAll(
                        bestandenVoorOfflineGebruik
                    );

                }
            )

        );

    }

);

/*
STAP 2: ACTIVEREN VAN DE SERVICE WORKER
*/
// Dit gebeurt nadat de service worker is geïnstalleerd. Hier ruimen we
// oude caches op, zodat er geen verouderde bestanden blijven liggen
// wanneer je het versienummer hierboven hebt verhoogd.
self.addEventListener(

    "activate",

    function (activeerGebeurtenis) {

        activeerGebeurtenis.waitUntil(

            caches.keys()
            .then(
                function (alleCacheNamen) {

                    // Doorloop alle bestaande caches
                    return Promise.all(

                        alleCacheNamen.map(

                            function (bestaandeCacheNaam) {

                                // Controleer of dit een oude cache is
                                if (
                                    bestaandeCacheNaam !== cacheNaam
                                ) {

                                    // Verwijder de oude cache
                                    return caches.delete(
                                        bestaandeCacheNaam
                                    );

                                }

                            }

                        )

                    );

                }
            )

        );

    }

);

/*
STAP 3: REAGEREN OP NETWERKVERZOEKEN (FETCH)
*/
// Iedere keer dat de app om een bestand vraagt (bijvoorbeeld een
// JavaScript-bestand of een afbeelding), gaat deze functie eerst kijken
// of dat bestand al in de cache ligt. Zo niet, dan wordt het bestand
// gewoon van het internet gehaald.
self.addEventListener(

    "fetch",

    function (fetchGebeurtenis) {

        fetchGebeurtenis.respondWith(

            caches.match(
                fetchGebeurtenis.request
            )
            .then(
                function (gevondenInCache) {

                    // Controleer of het bestand in de cache stond
                    if (
                        gevondenInCache
                    ) {

                        // Geef het bestand uit de cache terug (werkt offline)
                        return gevondenInCache;

                    } else {

                        // Bestand stond niet in de cache: haal het op via internet
                        return fetch(
                            fetchGebeurtenis.request
                        );

                    }

                }
            )

        );

    }

);