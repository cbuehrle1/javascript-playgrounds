if (window.CS === undefined) { window.CS = {}; }

(() => {

  let knightPosition = [0, 0];
  let observer = null;

  function emitChange() {
    observer(knightPosition);
  }

  window.CS.StateController = {
    observe: function (receive) {
      setInterval(() => receive([
        Math.floor(Math.random() * 8),
        Math.floor(Math.random() * 8)
      ]), 500);
    }

  }

})()
