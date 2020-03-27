var hasGroupsSizeX = function(deck) {
  let deckMap = new Map()
  let flag 
  for (let i of deck) {
    deckMap.set(i, (deckMap.has(i) ? deckMap.get(i) + 1 : 1))
  }
  for (let x = 2; x <= deck.length; x++) {
    if (deck.length % x === 0) {
      for ([k, v] of deckMap) {
        if (v % x != 0) {
          flag = false;
          break;
        } else {
          flag = true
        }
      }
      // console.log(x)
      if (flag) {
        break;
      }
    }
  }
  if (deck.length < 2) {
    flag = false
  }
  return flag
};
console.log(hasGroupsSizeX([1]))