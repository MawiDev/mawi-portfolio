# MawiDev / Portfolio

Portfolio di Riccardo Savio, con contenuti allineati al [profilo GitHub MawiDev](https://github.com/MawiDev) e al suo [README](https://github.com/MawiDev/MawiDev). React 19, Vite 8 e CSS; bento grid minimale, colori pastello e font sans serif della versione originale.

## Sviluppo

Usare Node.js 24 (`.nvmrc`); è supportato anche Node 22 dalla versione 22.12.

```bash
nvm use
npm ci
npm run dev
```

Il server di sviluppo è disponibile su `http://localhost:5173`. `npm start` è un alias compatibile.

## Verifiche

```bash
npm run audit
npx playwright install chromium
npm test
```

I test costruiscono e avviano la versione di produzione. Verificano desktop (1440 px), tablet (900 px), mobile (Pixel 7) e schermi da 320 px: navigazione da tastiera, skip link, immagini, collegamenti, assenza di overflow, metadati, policy di sicurezza e controlli automatici WCAG 2.2 AA tramite axe. I controlli automatici non sostituiscono una valutazione manuale con tecnologie assistive.

Per usare Chrome già installato su Linux:

```bash
PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/google-chrome npm test
```

Report HTML in `playwright-report/`; screenshot e tracce in `test-results/`. `npm run test:ui` apre l’interfaccia di Playwright. I test simulano esclusivamente lo script di Vercel Analytics, disponibile sull’hosting Vercel; il servizio di raccolta dati non è verificato in locale.

GitHub Actions esegue installazione pulita, audit e test a ogni push e pull request. Dependabot propone aggiornamenti settimanali, raggruppando React con React DOM e Vite con il relativo plugin.

## Contenuti

Aggiornare [src/data/portfolio.js](src/data/portfolio.js) per bio, link, progetto corrente, tecnologie e lavori. È una fotografia verificata del profilo al 17 ottobre 2026: non richiede chiamate alle API GitHub durante la visita e non dichiara livelli di competenza non presenti nel profilo.

La bento grid usa card di dimensioni diverse e si adatta a una o due colonne su tablet e mobile. Il fondo grigio chiaro, le card bianche e antracite e i colori pastello riprendono la palette originale. La pagina non contiene navbar o footer. Le card **Tech stack** e **Backend stack** riprendono voci e icone del README GitHub; le icone SVG sono locali in `src/icons/stack/`, con etichette testuali sempre visibili.

Python e GitHub sono esclusi dalla card Tech stack su richiesta del proprietario. I titoli generali delle sezioni sono visibili solo ai lettori di schermo; restano visibili i titoli delle singole card.

Tenkaichi Beerpong resta il primo lavoro, su una riga dedicata. Futsukayoi e Contasiga sono affiancati su desktop e tablet e consecutivi su mobile. Contasiga è una PWA per tracciare le sigarette, realizzata con Astro e Anime.js; `src/images/contasiga.png` mostra la schermata iniziale a 1440 × 900 px, con contatori vuoti e il solo pannello di configurazione nascosto durante la cattura nel browser temporaneo.

La card Education riporta il diploma di perito informatico presso l’ITIS “Ettore Majorana” di Grugliasco (TO), 10095, dichiarato dal proprietario. I dati sono in `education` nello stesso file dei contenuti; il collegamento rimanda al sito ufficiale della scuola.

Tenkaichi Beerpong è il primo lavoro, in evidenza, con Laravel e Livewire confermati dal proprietario del portfolio. L’immagine `src/images/tenkaichi.png` è uno screenshot reale della home pubblica, acquisito a 1440 × 960 px il 17 ottobre 2026, in tema scuro e dopo aver chiuso le preferenze senza salvarle. Il flag `featured` nei dati seleziona il layout della card.

Le anteprime di Chiara Bertoldo e Paolo Ponga sono state aggiornate dalle home pubbliche il 17 ottobre 2026, a larghezza 1440 px. La prima è ritagliata sopra il banner dei cookie; la seconda mostra la home a 1440 × 900 px. Lo stack di Paolo Ponga è React e Tailwind CSS, come confermato dal proprietario del portfolio.

Macraman è conservato come progetto archiviato perché il dominio non è più risolvibile. Avatar e immagini sono locali; le anteprime dei progetti si caricano solo quando necessarie. `public/social-card.svg` è il sorgente della scheda PNG per le anteprime social.

## Build e hosting

```bash
npm run build
npm run preview
```

La build resta in `build/`, come nella versione precedente. `vercel.json` imposta il framework Vite, il comando di build, la directory e gli header di sicurezza, inclusa una Content Security Policy limitata alle risorse locali. Il server di anteprima usa gli stessi header per verificarli nei test.

La URL canonica è `https://mawi-portfolio.vercel.app/`, indicata dal profilo GitHub. Se cambia il dominio, aggiornare canonical e Open Graph in `index.html`. Vercel Analytics è attivo solo nelle build di produzione.

Dettagli della review e limiti delle verifiche: [docs/review-2026-10-17.md](docs/review-2026-10-17.md).
