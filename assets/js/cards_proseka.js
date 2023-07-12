function gID(sID) {
  return document.getElementById(sID);
}

function cE(sName) {
  return document.createElement(sName);
}

function cT(sD) {
  return document.createTextNode(sD);
}

function sC(oID, cN) {
  oID.setAttribute('class', cN, 0);
  oID.className = cN;
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

var shihoCards = [];
var honamiCards = [];
var kanadeCards = [];
var otherCards = [];
var waifus = [];

function startup() {
  Papa.parse("https://svenxiety.xyz/assets/csv/proseka_fav_card.csv", {
    download: true,
    complete: function(results) {
      for (var i = 1; i < results.data.length; i++) {

        switch(results.data[i][0]) {
          case 'Shiho':
          shihoCards.push(results.data[i][1]);
          break;
          case 'Honami':
          honamiCards.push(results.data[i][1]);
          break;
          case 'Kanade':
          kanadeCards.push(results.data[i][1]);
          break;
          case 'ProsekaOther':
          otherCards.push(results.data[i][1]);
          break;
        }
      }
      //console.log(hagumiCards);
      waifus = [["Shiho", shihoCards], ["Honami", honamiCards], ["Kanade", kanadeCards], ["ProsekaOther", otherCards]];

      for (var i = 0; i < waifus.length; i++) {
        var waifuData = waifus[i];
        //console.log("waifuData: " + waifuData);
        var waifu = waifuData[0];
        var waifuLower = waifu.toLowerCase();

        var cards = waifuData[1];
        //console.log("cards: " + cards);
        var cardsShuffled = shuffle(cards);
        //console.log("cards: " + cardsShuffled);

        for (var j = 0; j < cardsShuffled.length; j++) {
          var card = cardsShuffled[j];
          //console.log("card: " + card);

          var grid = gID('cards-' + waifuLower);
          //console.log("grid: " + grid);

          var gridCol = cE('div');
          grid.appendChild(gridCol);
          gridCol.className = 'col-xl-3 col-lg-4 col-md-6';

          var gridGalleryItem = cE('div');
          gridCol.appendChild(gridGalleryItem);
          gridGalleryItem.className = 'gallery-item h-100';

          var gridGalleryImg = cE('img');
          gridGalleryItem.appendChild(gridGalleryImg);
          gridGalleryImg.className = 'img-fluid';
          gridGalleryImg.setAttribute('src', '/assets/cards/' + waifuLower + '/' + card + '.webp');

          var gridGalleryImgLinksDiv = cE('div');
          gridGalleryItem.appendChild(gridGalleryImgLinksDiv);
          gridGalleryImgLinksDiv.className = 'gallery-links d-flex align-items-center justify-content-center';

          var gridGalleryImgLink = cE('a');
          gridGalleryImgLinksDiv.appendChild(gridGalleryImgLink);
          gridGalleryImgLink.setAttribute('href', '/assets/cards/' + waifuLower + '/' + card + '.webp');
          gridGalleryImgLink.setAttribute('data-gallery', 'gallery-' + waifuLower);
          gridGalleryImgLink.className = 'glightbox preview-link';

          var gridGalleryImgLinkIcon = cE('i');
          gridGalleryImgLink.appendChild(gridGalleryImgLinkIcon);
          gridGalleryImgLinkIcon.className = 'bi bi-arrows-angle-expand';

          var gridGalleryImgLinkExt = cE('a');
          gridGalleryImgLinksDiv.appendChild(gridGalleryImgLinkExt);
          gridGalleryImgLinkExt.setAttribute('href', 'https://sekai.best/card/' + parseInt(card) + '/');
          gridGalleryImgLinkExt.setAttribute('target', '_blank');
          gridGalleryImgLinkExt.className = 'details-link';

          var gridGalleryImgLinkIconExt = cE('i');
          gridGalleryImgLinkExt.appendChild(gridGalleryImgLinkIconExt);
          gridGalleryImgLinkIconExt.className = 'bi bi-link-45deg';
        }
      }

      /**
       * Initiate glightbox
       */
      const glightbox = GLightbox({
        selector: '.glightbox'
      });
    }
  });
}
