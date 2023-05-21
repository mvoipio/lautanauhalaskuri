# Lautanauhalaskuri

Lautanauhalaskuri on JavaScriptillä ja jQueryllä toteteutettu pikkuohjelma, jolla voi laskea erilaisia asioita
lautanauhaloimea valmistellessaan: kuinka pitkä loimen pitää olla, että valmis nauha on x senttiä pitkä, kuinka monta
metriä nauhan eri värejä tarvitaan yhteensä nauhaloimeen, paljonko kudelankaa pitää olla, ja lopuksi sen, montako
grammaa lankaa tuo x metriä on.


## Loimen pituuden laskuri

Laskurille annetaan toivottu valmiin nauhan pituus ja laskuri lisää siihen kutistumisvaran sekä loimen
alkuun ja loppuun tarvittavat varat ("tutkaimet"). Pituuden oletetaan asettuvan välille 10-1500 cm,
hyvin harva haluaa ikinä tehdä yli 15-metristä lointa, yli viisimetrinenkin on harvinaisuus. Jos
haluaa tehdä samasta loimesta useita nauhoja tupsuilla tai muuten haluaa vähän ylimääräistä (kuten minä,
joka sössin joka nauhan alun jotenkin), voi loimelle asettaa 1-150 cm lisäpituutta.

Laskurin käytön jälkeen voi loimen mitan kopioida leikepöydälle. Laskurin voi myös tyhjentää ja aloittaa alusta.
Laskurin antamaa loimen pituutta käytetään seuraavassa vaiheessa, ellei käyttäjä itse muuta sitä.


## Eriväristen lankojen yhteispituuden laskuri

Laskurin tätä osuutta voi käyttää ykkösosaan koskematta, jos asettaa toivotun loimen pituuden käsin.

Riippumatta siitä, miten loimen pituus määritellään, seuraava vaihe toimii aina samoin. Taulukkoon kirjoitettavat
tiedot tulevat valitusta nauhamallista. Ensimmäiseen sarakkeeseen kirjoitetaan värin nimi juuri sillä tavalla kuin
käyttäjä haluaa. Toiseen sarakkeeseen kirjoitetaan sen värin lankojen määrä. Rivejä saa lisää Lisää rivi-painikkeella
ja lisätyn rivin saa poistettua rivin päässä olevalla poisto-painikkeella.

Kun värit ja lankalukumäärät on syötetty, lasketaan pituudet ja tehdään niistä taulukko. Taulukon alle tulostuu myös
muutamia yhteenvetotietoja, kuten laskelmiin käytetty loimen pituus ja lankojen kokonaismäärä sekä arvioitu kuteen määrä.
Taulukon ja sen alla olevat yhteenvetotiedot voi kätevästi tulostaa tulostuspainikkeella. Taulukkojen täytön
voi myös aloittaa alusta tyhjentämällä tiedot.


## Langan painon laskuri

Tyypillisesti neulontalankakerässä olevan langan määrä ilmoitetaan grammojen metrimäärinä, esim. 100 g / 400 m.
(Kankaan)kudontaan tarkoitettujen lankojen paksuus ja säikeiden määrä taas ilmoitetaan tex-luvulla, 1 TEX = 1 g/1000 m.
Jälkimmäinen numero taas kertoo säikeiden määrän, eli 125 tex x 2 tarkoittaa 125 g/1000 m * 2.

Koska meidän tapauksessamme käyttäjä tietää, että hän tarvitsee esimerkiksi 80 metriä sinistä lankaa, hän voi ottaa
juoksevuustiedot lankakerän kyljestä, syöttää ne loimen pituuden kanssa laskuriin ja vastauksena tulee suuntaa-antava
arvio siitä, kuinka monta grammaa lankaa loimeen tarvitaan. Koska langan paino voi vaihdella esimerkiksi ilmankosteuden
mukaan, kyse ei ole eksaktista tieteestä ja tulokset pyöristetäänkin ylöspäin lähimpään grammaan.


## Toteutustapa

Aloitin puhtaasta html-sivusta, jolla oli vain css-tyylitiedosto. Aloitin JavaScriptin kirjoittamisen sivun alusta ja
pyrin käyttämään jQueryä aina kuin mahdollista. Leikepöydälle kopioinnin ja tulostusmuotoilujen suhteen oli helpompaa
käyttää puhdasta JavaScriptiä, muu on tehty jQueryn avulla.

### Lähteet

En ole lahjakas ohjelmoija, joten Google on paras ystäväni. Tässä apuna käyttämäni verkkosivut siinä järjestyksessä,
kun niitä tarvitsin.


* Adding jQuery to Your Web Pages: https://www.w3schools.com/jquery/jquery_get_started.asp

* Google Hosted Libraries: https://developers.google.com/speed/libraries

* Calculation with Jquery: https://codereview.stackexchange.com/questions/192317/calculation-with-jquery

* How to force addition instead of concatenation in javascript: https://stackoverflow.com/questions/13953939/how-to-force-addition-instead-of-concatenation-in-javascript

* jQuery, .val(): http://api.jquery.com/val/

* How to Check If an Input Field is Empty Using jQuery: https://www.tutorialrepublic.com/faq/how-to-check-if-an-input-field-is-empty-using-jquery.php

* How to set value of variable in Html element with jquery?: https://stackoverflow.com/questions/51041561/how-to-set-value-of-variable-in-html-element-with-jquery

* How to Copy to Clipboard in JavaScript with the Clipboard API: https://stackabuse.com/how-to-copy-to-clipboard-in-javascript-with-the-clipboard-api/

* How to empty input field with jQuery: https://stackoverflow.com/questions/9236332/how-to-empty-input-field-with-jquery

* jQuery empty() Method: https://www.w3schools.com/jquery/html_empty.asp

* How to Dynamically Add/Remove Table Rows using jQuery?: https://www.geeksforgeeks.org/how-to-dynamically-add-remove-table-rows-using-jquery/

* How do i declare a global variable in jquery?: https://forum.jquery.com/topic/how-do-i-declare-a-global-variable-in-jquery

* How to Check Empty, Null, and Undefined Variables in Javascript / jQuery?: https://dev.to/codeanddeploy/how-to-check-empty-null-and-undefined-variables-in-javascript-jquery-5agl

* Chrome violation: [Violation] Handler took 83ms of runtime: https://stackoverflow.com/questions/42218699/chrome-violation-violation-handler-took-83ms-of-runtime
(It only shows when console is set to "Verbose", can be hidden.)

* How to get data from a table and move to another table in jquery: https://stackoverflow.com/questions/54421758/how-to-get-data-from-a-table-and-move-to-another-table-in-jquery

* Select inputs with number type through jQuery: https://stackoverflow.com/questions/4887085/select-inputs-with-number-type-through-jquery

* What is the best way to remove a table row with jQuery?: https://stackoverflow.com/questions/170997/what-is-the-best-way-to-remove-a-table-row-with-jquery

* How to scroll up or down the page to an anchor using jQuery?: https://stackoverflow.com/questions/8579643/how-to-scroll-up-or-down-the-page-to-an-anchor-using-jquery

* Round up final output in jquery: https://stackoverflow.com/questions/13644341/round-up-final-output-in-jquery


#### Näitä katsoin, mutten sitten kuitenkaan käyttänyt:

* Color picker is by Victor Maestri, I found it at https://www.jqueryscript.net/other/pick-color-predefined-palette.html.
(Tämän saatan vielä ottaa käyttöön, pohdin sitä myöhemmin.)

* Tooltip message on hover: https://stackoverflow.com/questions/1333546/how-can-i-display-a-tooltip-message-on-hover-using-jquery
(Jos tekisi live-validaation, tämä voisi olla hyvä lisä. Ehkä jossain tilanteissa muutenkin.)

* PrintThis plugin: https://github.com/jasonday/printThis
(Vanha viritys osoittautui minun käyttööni sopivammaksi)

* jQuery Validation plugin: https://jqueryvalidation.org/documentation/,
https://webdesign.tutsplus.com/tutorials/easy-form-validation-with-jquery--cms-33096,
https://www.sitepoint.com/basic-jquery-form-validation-tutorial/
(Katsoin, kokeilin, totesin, ettei oikein sopinut minun tarkoituksiini ja annoin olla. Jos pitäisi tarkistaa esimerkiksi
sähköpostiosoitteita, tämä olisi erinomainen siihen.)
 
## META

Readmen muotoilussa auttoi pikainen markdown-kertaus: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet ja https://www.markdownguide.org/basic-syntax/.

Tein töitä pomodoro-tekniikalla eli 25 min töitä, 5 min taukoa. Aina en muistanut käynnistää laskuria uudelleen, mutta siitä kun aloitin vanhan html-sivun ja tyylitiedoston kanssa siihen, kun minulla oli virheittä toimiva tuote meni noin 10-12 tuntia. Sen jälkeen käytin viilaukseen (mm. validointi, lukujen muuntaminen ja pyöristys, muutaman "ominaisuuden" poisto), koodin siivoamiseen dokumentointiin meni vielä 2-3 tuntia. Testaamiselle ei tarvittu erillistä aikaa, koska kaikki testattiin koodausvaiheessa, tosin raja-arvotestaus olisi voinut olla tehokkaampaa. Esittelyvideon kuvaamiseen ja editointiin tuhrautuu vielä ainakin tunti, joten kokonaistyöaika näyttäisi olevan minimissään 13 tuntia, todennäköisemmin vähintään 15 tuntia. Aikaa säästyi jonkin verran sen takia, että sivupohjan, tyylitiedoston ja suurimmaksi osaksi sivun rakenteen sai edellisestä työstäni (https://loimilaskuri.netlify.app/). Kaikkea piti viilata vähän, mutta suurin työ oli jo tehty.


## Mitä seuraavaksi?

Suunnitteluohjelma [https://jamespbarrett.github.io/tabletweave/] (Tablet Weaving Draft Designer), jota käytän aika paljon, tallentaa haluttaessa suunnitelmat helposti luettavaan tekstimuotoon. Teoriassa pitäisi olla mahdollista lukea .tdd-tiedoston pujotuskaavio-osuudesta, montako lankaa mitäkin väriä tarvitaan, minkä jälkeen tiedon voisi tuupata automaattisesti laskuriin. Värit on merkitty tiedostoon värikoodeilla, joten ne olisi suhteellisen helppo muuntaa värineliöiksi taulukkoon.

Myös 20 vuotta vanha, mutta yhä joiltakin osin paras suunnitteluohjelma GTT tallentaa kaaviot käyttäjän koneelle. Tiedostomuodon spesifikaatio on (vielä toistaiseksi) netissä, joten on ihan mahdollista, että lankamäärät ja värit voisi onkia myös .gtt-tiedostoista.

Loput käyttämäni suunnitteluohjelmat käyttävät vain nettigallerioita eivät tallenna käyttäjän koneelle, joten niiden kanssa voi olla vaikeampaa.

Opiskelin tässä äskettäin testiautomaatiota RobotFrameworksilla. Vähän harkitsen, jaksaisinko tehdä testipatterin tälle ja vanhemmalle pirtanauhalaskurille. Näiden raja-arvotestaus vie paljon aikaa ja aion kuitenkin kääntää laskurit englanniksin, jolloin testattavana olisi joka kerta 2+2 laskuria. En myöskään ole tehnyt selaintestausta kovin laajasti, olen käyttänyt laskuria vain Chromella ja Firefoxilla, en Edgellä (enkä Safarilla). Sivujen html-koodi on sen verran yksinkertaista, että tämän ei pitäisi olla ongelma, mutta ei testaaminen haitaksi olisi. Automaatiolla testien ajaminen eri selaimissa olisi nopeaa ja helppoa.