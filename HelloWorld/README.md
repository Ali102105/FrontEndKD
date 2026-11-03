# Ali's Website — Alteco

React-website met Bootstrap 5 en losse componenten.

## Starten

Open deze map (de map met package.json) in VS Code en voer uit:

```bash
npm install
npm run dev
```

Open daarna de lokale URL uit de terminal. `npm install` is nodig na het uitpakken: node_modules wordt niet meegestuurd. Hiermee wordt ook Vite geïnstalleerd.

Gebruik een recente Node.js LTS-versie (Node 24 aanbevolen).

## Controleren

```bash
npm run lint
npm run build
```

## Onderdelen

- Topbar: contactgegevens en offerteknop.
- Navbar1: Bootstrap-navigatie, dropdown en mobiel hamburgermenu.
- Search: zoeken tussen de bestaande onderdelen van de pagina.
- Hero, Offers, Services en Footer: inhoud met responsive Bootstrap-grid.
- BackToTop: omhoogknop met CSS-pijl, zonder emoji.

HOME, ABOUT US, SERVICES en CONTACT US verwijzen naar bestaande secties.
PAGES bevat links naar diezelfde secties. SHOP en BLOG blijven zichtbaar voor
het ontwerp, maar zijn uitgeschakeld omdat deze pagina's nog niet bestaan.
De e-mail en het telefoonnummer zijn voorbeeldgegevens uit het ontwerp;
vervang ze door je eigen contactgegevens voordat je de site echt gebruikt.

Bootstrap wordt vóór de eigen CSS geladen. Afbeeldingen staan in src/assets.
De achtergrondafbeeldingen worden vanuit Hero.css en Offers.css ingeladen.
