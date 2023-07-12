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

var waifus = [
  ["Ran",
    ['398t', '409', '467', '467t', '597t', '661t', '922t', '1099t', '1287t', '1354t', '1381t', '1528t']
  ],
  ["Layer",
    ["970", "970t", "1072t", "1189", "1316", "1374t", "1514", "1514t", "1539", "1539t"]
  ],
  ["Tae",
    ["1131", "1131t", "1317", "8", "133", "430t", "581t", "609", "819", "944", "944t", "1592"]
  ],
  ["Shiho",
    ["457", "457t", "170t", "207t", "275t", "282t", "388t", "419t", "493", "493t"]
  ],
  ["Saki",
    ["383", "383t", "417t", "109t", "185", "260t", "469t", "495", "495t"]
  ],
  ["Emu",
    ["452t", "55", "122t", "124", "180t", "261t", "302t", "413t", "476", "501"]
  ],
  ["Kanade",
    ["177", "177t", "195", "195t", "237", "294t", "309t", "361t", "398", "398t"]
  ]
];

(function() {
  window.addEventListener('DOMContentLoaded', function() {
    for (var i = 0; i < waifus.length; i++) {
      var waifuData = waifus[i];
      console.log(waifuData);
      var waifu = waifuData[0];
      var waifuLower = waifu.toLowerCase();

      var cards = waifuData[1];
      console.log(cards);
      var cardsShuffled = shuffle(cards);

      for (var j = 0; j < cardsShuffled.length; j++) {
        var card = cardsShuffled[j];
        console.log(card);

        var grid = gID('cards-' + waifuLower);
        var gridLink = cE('a');
        grid.appendChild(gridLink);
        gridLink.setAttribute('href', 'assets/cards/' + waifuLower + '/' + card + '.jpg');
        var gridDiv = cE('div');
        gridLink.appendChild(gridDiv);
        gridDiv.className = 'bg';
        gridDiv.setAttribute('style', 'background-image: url("assets/cards/' + waifuLower + '/' + card + '.jpg");');
      }
    }

//<a href="assets/cards/bandori/ran/398t.jpg"><div class="bg" style="background-image: url('assets/cards/bandori/ran/398t_th.jpg');"></div></a>
    });
})();
