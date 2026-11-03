# Ali's Website — Alteco layout

Een eenvoudige React-website met Bootstrap 5. De nadruk ligt op de indeling
voor desktop, tablet en mobiel. Ieder onderdeel heeft een eigen component en CSS.

## Starten

Open deze map in VS Code. Voer in de terminal uit:

```bash
npm install
npm run dev
```

Open de lokale URL uit de terminal. Node.js 24 LTS wordt aanbevolen.
node_modules wordt niet meegestuurd en wordt aangemaakt met npm install.

## Bestanden

- main.jsx: start React en importeert Bootstrap vóór de eigen CSS.
- App.jsx: zet de losse onderdelen samen.
- App.css: algemene kleuren, lettertype en scrollafstand.
- Topbar.jsx: contactgegevens en offerteknop bovenaan.
- Navbar1.jsx: Bootstrap-menu met hamburger en dropdown. De CSS in Navbar1.css
  maakt de navbar kleiner tijdens het scrollen; er is geen React-scrolllogica.
- Hero.jsx: eenvoudige Bootstrap-carousel met twee foto’s, tekst en knoppen.
- Offers.jsx: foto naast tekst en twee informatieblokken.
- Services.jsx: vier diensten met een responsive Bootstrap-grid.
- Footer.jsx: informatie, links en contactgegevens onderaan.
- BackToTop.jsx: eenvoudige link naar de bovenkant van de hero.

Elk onderdeel heeft een eigen CSS-bestand met de vormgeving.
Er is geen Reveal-component of zoeklogica.
Het vergrootglas is alleen decoratie, zoals in het ontwerp.

## Bootstrap-grid uitleg

Bootstrap verdeelt een rij in 12 kolommen.

- container: zet de inhoud gecentreerd op een maximale breedte.
- row: maakt een rij voor kolommen.
- col-12: neemt de volledige rij in op mobiel.
- col-md-6: neemt vanaf tablet de helft in (twee kolommen naast elkaar).
- col-lg-3: neemt vanaf desktop een kwart in (vier kolommen naast elkaar).
- col-lg-6: neemt vanaf desktop de helft in (foto en tekst naast elkaar).
- g-4 en g-5: ruimte tussen kolommen.

Het hamburgermenu en de dropdown gebruiken de standaard Bootstrap-JavaScript
via data-bs-attributen. Er is geen eigen menulogica nodig.

## Links

Home, About us, Services en Contact us verwijzen naar bestaande secties.
Pages bevat dezelfde sectielinks. Shop en Blog zijn zichtbaar maar uitgeschakeld:
deze pagina's vallen buiten de uitgewerkte layout en zijn nog niet gemaakt.
E-mail en telefoon zijn voorbeeldgegevens; vervang ze bij echt gebruik.

## Controle

```bash
npm run lint
npm run build
```

De opdracht vraagt ook wireframes, een ingevulde checklist en een repositorylink.
Die maak je zelf, zoals afgesproken. De slider is in de opdracht een extra.

## Zo kun je de code uitleggen

- Een component is een los onderdeel van de website, bijvoorbeeld de footer.
- import haalt een component of CSS-bestand op.
- return geeft aan welke JSX de component toont.
- className koppelt het element aan Bootstrap of mijn eigen CSS.
- De arrays offers en services bewaren de tekst van de blokken.
- .map() maakt voor ieder item in de array een blok op de pagina.
- key geeft ieder herhaald blok een unieke naam, zodat React ze kan herkennen.
- href="#services" springt naar het onderdeel met id="services".
- Bootstrap verzorgt de kolommen en het hamburgermenu.
- Mijn CSS verzorgt kleuren, ruimte, afbeeldingen en de navigatie-animatie.

In Navbar1.css volgt animation-timeline de scrollpositie. animation-range bepaalt
het bereik (0 tot 100 pixels). @keyframes beschrijft de grote en kleine navbar.
Op tablet en mobiel blijft het menu compact. In browsers zonder ondersteuning
voor deze CSS-scrollanimatie blijft de navbar gewoon groot en sticky.

## Bootstrap-carousel uitleg

De array slides bevat twee slides. .map() maakt voor elke slide de JSX.
De eerste slide krijgt de class active, zodat deze meteen zichtbaar is.
carousel-inner bevat de slides. carousel-item is één slide.
data-bs-target verwijst naar het id van de carousel.
data-bs-slide="prev" en "next" gaan naar de vorige en volgende slide.
data-bs-slide-to="0" en "1" kiezen een slide via de bolletjes.
Bootstrap verzorgt het wisselen en de fade. Er is geen eigen slider-JavaScript.
De carousel wisselt handmatig via de pijlen en bolletjes, niet automatisch.
Er staan geen comments in de code; deze uitleg staat alleen in dit bestand.
