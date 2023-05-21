// Skriptissä on käytetty jQueryä aina kun mahdollista

var lpituus; // loimen pituus (joka lasketaan/asetetaan myöhemmin) on globaali muuttuja

// Pituuslaskuri (sivun ensimmäinen osa)


$(document).ready(function(){
$('#laskepituus').click(function () {
    var alkuPituus = parseInt($('#tpituus').val());

        // Tarkistetaan, että perusmitta on annettu ja se on välissä 10-1500
        if(alkuPituus==null || alkuPituus==""){
            alert("Valmiin nauhan pituus tarvitaan");
            return false;
        } else if (alkuPituus < 10 || alkuPituus > 1500){
            alert("Syötäthän nauhan toivotun pituuden välillä 10-1500");
            return false;  
        }


    if(!$('#lpituus').val()){ // if input is empty, .val returns "undefined", so empty must be given value 0
        var lisaPituus = 0;
    } else {
        var lisaPituus = parseInt($('#lpituus').val());
    }


    if(lisaPituus < 0 || lisaPituus > 150){
        alert("Syötäthän lisäpituuden väliltä 1-150");
        return false;
    } 

    lpituus = parseInt(alkuPituus * 1.3 + 50 + lisaPituus) ;


    $('#vpituus').text(lpituus);

    $('#laskutulos').show();

    $('#apituus').text(lpituus); // toistaa pituuden seuraavassa osassa - tämän voisi ehkä hoitaa fiksumminkin

    $('#toistapituus').show(); // näyttää seuraavan osan alussa tekstin, jossa kerrotaan, mikä laskelmiin käytetty pituus on

    $('#kopioipituus').show(); // näyttää kopiointinapin
    $('#tyhjennaloimi').show(); // näyttää tyhjennysnapin
});
});


// Kopioi loimen pituuden leikepöydälle
// document.execCommand() on vanhentunut, täytyy käyttää Clipboard APIa

function kopioiPituus() {
    var copyText = $('#vpituus').text();
    navigator.clipboard.writeText(copyText).then(() => {
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!
        alert('Kopioitu: ' + copyText);
    });
  }

  // resetoi laskurin ja tulokset

  $(document).ready(function(){
  $('#tyhjennaloimi').click(function () {

    $('#pituuslaskuri')[0].reset(); // tyhjentää laskurin
    $('#vpituus').empty(); // ylempi laskutulos pois
    $('#apituus').empty(); // alempi laskutulos pois
    $('#laskutulos').hide(); // piilottaa tulosrivin 
    $('#toistapituus').hide(); // piilottaa myös kakkososan alussa olevan tiedon loimen pituudesta
    $('#kopioipituus').hide(); // piilottaa kopiointinapin
    $('#tyhjennaloimi').hide(); // piilottaa tyhjennysnapin
  
  });
});


// Langan menekin laskuri alkaa tästä


// vaihtaa loimen pituuden ja nollaa vanhan

$(document).ready(function(){
    $('#vaihdapituus').click(function () {
        lpituus = parseFloat($('#upituus').val());
        
        $('#fpituus').text(lpituus);
    
        $('#naytauusipituus').show();

        $('#toistapituus').hide(); // piilottaa edellisestä pituudesta kertovan rivin/kappaleen
    
    });
    });


// Dynaaminen taulukko
// Suurin osa koodista täältä: https://www.geeksforgeeks.org/how-to-dynamically-add-remove-table-rows-using-jquery/    

// Rivien kokonaismäärä
var rowIdx = 0;
  
// Rivin lisääminen
$(document).ready(function(){
$('#lisaarivi').on('click', function () {
  
    // Uusi rivi tbodyn sisään
    $('#varitaulukko').append(`<tr id="R${++rowIdx}">
          <td><input type="text"></td>
           <td><input class="number" type="number"></td>
           <td class="trashcan"><button class="trash"><i class="fa-solid fa-trash-can"></i></button></td>
           </tr>`);
});
});


// Rivin poistaminen
$(document).ready(function(){
$('#varitaulukko').on('click', '.trash', function () {
  
    // Getting all the rows next to the 
    // row containing the clicked button
    var child = $(this).closest('tr').nextAll();
  
    // Iterating across all the rows 
    // obtained to change the index
    child.each(function () {
          
        // Getting <tr> id.
        var id = $(this).attr('id');
  
        // Getting the <p> inside the .row-index class.
        var idx = $(this).children('.row-index').children('p');
  
        // Gets the row number from <tr> id.
        var dig = parseInt(id.substring(1));
  
        // Modifying row index.
        idx.html(`Row ${dig - 1}`);
  
        // Modifying row id.
        $(this).attr('id', `R${dig - 1}`);
    });
  
    // Removing the current row.
    $(this).closest('tr').remove();
  
    // Decreasing the total number of rows by 1.
    rowIdx--;
});

});



$(document).ready(function(){
    $("#laskelangat").click(function(){  

    $("#loputtulokset").empty(); // Poistaa tulostaulukosta dynaamiset rivit, muuten append aiheuttaa ongelmia

    // tarkistetaan, että loimen pituudelle on annettu joku arvo joko laskurilla tai käsin
    if (typeof lpituus == "undefined"){
        alert('Loimen pituutta ei ole määritetty, aseta tai laske loimen pituus'); 
        return false;
    }


    //TODO: Kaikki mitat muutettava metreiksi!

    var ekamaara = parseInt($('#lmaara1').val());
    if (ekamaara > 0 && ekamaara < 81){ //tarkistaa, että lankojen lukumäärä on annettu
        ekamaara = ekamaara;   
    } else {
        alert('Anna ensimmäisen rivin lankojen määrä väliltä 1-80');
        return false;
    }

    var ekapituus = parseInt(ekamaara * lpituus) ;
    ekapituus = Math.ceil(ekapituus / 100) ; // muutetaan pituus metreiksi ja pyöristetään ylös lähimpään metriin
    

    $('#vari1tulos').text($('#vari1').val());  //kopioi kirjoitetun tekstin suoraan uuteen soluun
    $('#lanka1tulos').text(ekamaara);
    $('#lanka1pituus').text(ekapituus + " m");

    var kmaara = 0;
    var kpituus = 0;



    $("table #varitaulukko tr").each(function(){
            
          var lvari=$(this).find('input[type=text]').val(); //saattaa purra, jos ykkösruutuun tuleekin väripalkki
          var lmaara=parseInt($(this).find('input[type=number]').val()); //täytyy lukea numeroksi
          if (lmaara > 0 && lmaara < 81){ //tarkistaa, että lankojen lukumäärä on annettu
            lmaara = lmaara;   
        } else {
            alert('Joltakin lisätyltä riviltä puuttuu lankojen määrä tai se ei ole väliltä 1-80');           
            return false;
        }

        var loppituus = Math.ceil(lmaara * lpituus / 100); // muutetaan metreiksi ja pyöristetään ylöspäin
           $("#loputtulokset").append("<tr><td>"+ lvari +"</td><td>" + lmaara + "</td><td>" + loppituus + " m</td></tr>")

           kmaara += lmaara;
           kpituus += loppituus;
         
        });

        kmaara = kmaara + ekamaara; // täytyy muistaa lisätä ensimmäisen solun lankojen määrä
        kpituus = kpituus + ekapituus; // täytyy muistaa lisätä ensimmäisen solun lankojen pituus
        kude = kpituus / 10; // kuteen määrä on noin 10 % loimen lankojen yhteispituudesta, muutetaan metreiksi

        // Näytetään edellä koottu taulukko

        $('#pituustaulukko').show();

 
        // Lisätään kokonaismäärät ja näytetään ne
        $('#pituusf').text(lpituus); // käytetty loimen (ei loimilankojen) kokonaispituus, sama kuin aiemmin
        $('#lankamaara').text(kmaara); // lankojen yhteismäärä (hyvä tarkistusluku)
        $('#langatyht').show(); // näytetään em. tiedot

        $('#kude').text(kude); // kuteen pituus lisätään sivulle
        $('#kudelaskelma').show(); // näytetään kudelaskelma

        $('#tulostataulukko').show(); // näyttää tulostusnapin
        $('#tyhjennaloimet').show(); // näyttää tyhjennysnapin

    });

});



// Tulostus olikin sitten helpompi hoitaa vanhaan tapaan pelkällä JavaScriptillä
// PrintThis-plugin olisi kyllä tarjolla: https://github.com/jasonday/printThis

// Tulostaa annetun (yhden) elementin sisällön CSS-tyylitiedostoa käyttäen
// Koodi lähes suoraan StackExchangestä: https://stackoverflow.com/questions/21379605/printing-div-content-with-css-applied
function tulosta(){

    var mywindow = window.open('', 'PRINT', 'height=400,width=600');

    mywindow.document.write('<html><head>');
    mywindow.document.write("<link rel=\"stylesheet\" link href=\"../css/print.css\"> <link rel=\"stylesheet\" link href=\".css/layout.css\">");
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h1>Lautanauhan loimilaskuri</h1>')
    mywindow.document.write(document.getElementById('tulostettava').innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/


    setTimeout(function () {
    mywindow.print();
    mywindow.close();
    }, 1000)
    return true;
}


// Laskurin tyhjentäminen (ei tyhjennä loimen pituuden arvoa lpituus)
$(document).ready(function(){
    $('#tyhjennaloimet').click(function () {

      $('#lankalaskuri')[0].reset(); // Tyhjentää laskuritaulukon näkyviin jäävän osan
      $("#varitaulukko").empty(); // Poistaa laskuritaulukkoon myöhemmin lisätyt rivit
      $('#pituustaulukko').hide(); //piilotetaan pituuslaskelmataulukko kokonaan
      $('#langatyht').hide(); // piilotetaan lankamäärä ja käytetty loimen mitta
      $('#kudelaskelma').hide(); // piilotetaan kudelaskelma
      $('#tulostataulukko').hide(); // piilottaa tulostusnapin
      $('#tyhjennaloimet').hide(); // piilottaa tyhjennysnapin

      // Tyhjentäminen tekee pahoja sivun pituudelle, joten lopuksi mennään laskurin alkuun
        var tag = $("#lankalaskurialue");
        $('html,body').animate({scrollTop: tag.offset().top},'slow');
    
    });
  });
  


 // Painolaskuri alkaa tästä 

$(document).ready(function(){
    $('#laskegrammatmetreista').click(function () {
    var tmetrit = parseInt($('#langanpituus').val());  // tarvittava metrimäärä
    var lmetrit = parseInt($('#metrit').val()); // kerän metrimäärä langan tiedoista
    var grammat = parseInt($('#grammat').val()); // kerän grammakoko langan tiedoista

    grammamaara = Math.ceil(tmetrit * grammat / lmetrit) ; // lasketaan grammat ja pyöristetään ne ylös lähimpään kokonaislukuun

    $('#painometreista').text(grammamaara); // lisätään numero tekstiin
    $('#ltarve').text(tmetrit);
    $('#lankametrit').text(lmetrit);
    $('#lankagrammat').text(grammat);
    $('#laskutulosmetreista').show(); // näytetään teksti

    $('#tyhjennamgrammat').show(); // Näytetään laskurin tyhjennysnappi

    });
});



$(document).ready(function(){
    $('#tyhjennamgrammat').click(function () {
  
      $('#grammalaskuri')[0].reset(); // tyhjentää laskurin
      $('#laskutulosmetreista').hide(); // piilottaa tulosrivin 
      $('#tyhjennamgrammat').hide(); // piilottaa tyhjennysnapin
    
    });
  });


  $(document).ready(function(){
    $('#lasketulostexista').click(function () {
    var texmetrit = parseInt($('#ltlanganpituus').val());  // tarvittava metrimäärä
    var tex1 = parseInt($('#tex1').val()); // tex-luku
    var tex2 = parseInt($('#tex2').val()); // säiemäärä

    texgrammat = Math.ceil(texmetrit * tex1 * tex2 / 1000) ; // lasketaan grammat ja pyöristetään tulos kokonaisluvuksi ylöspäin

    $('#painotexista').text(texgrammat); // lisätään numero tekstiin
    $('#lttarve').text(texmetrit);
    $('#ltex1').text(tex1);
    $('#ltex2').text(tex2);
    $('#laskutulostexista').show(); // näytetään teksti

    $('#tyhjennatexit').show(); // Näytetään laskurin tyhjennysnappi

    });
});



$(document).ready(function(){
    $('#tyhjennatexit').click(function () {
  
      $('#texlaskuri')[0].reset(); // tyhjentää laskurin
      $('#laskutulostexista').hide(); // piilottaa tulosrivin 
      $('#tyhjennatexit').hide(); // piilottaa tyhjennysnapin
    
    });
  }); 