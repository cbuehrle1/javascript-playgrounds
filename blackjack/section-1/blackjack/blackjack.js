

function countCards(cards) {

  var count = 0;
  var ace = 0;

  cards.forEach((card) => {

    var face;

    if (card.number === "A") {
      ace++;
    }
    else if (typeof card.number !== "number") {
      face = 10;
      count = count + face;
    }
    else {
      count = count + card.number;
    }

  });

  for (var i = 0; i < ace; i++) {
    if (count > 10) {
      count = count + 1;
    } else {
      count = count + 11;
    }
  }

  return count;
}
