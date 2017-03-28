if (window.CS === undefined) { window.CS = {}; }

(() => {

  let knightPosition = [1, 7];
  let observer = null;

  function emitChange() {
    observer(knightPosition);
  }

  window.CS.StateController = {
    observe: function (o) {
      if (observer) {
        throw new Error('Multiple observers not implemented.');
      }

      observer = o;
      emitChange();

    },

    moveKnight: function (toX, toY) {
      knightPosition = [toX, toY];
      emitChange();
    },

    canMoveKnight(toX, toY) {
      const [x, y] = knightPosition;
      const dx = toX - x;
      const dy = toY - y;

      return (Math.abs(dx) === 2 && Math.abs(dy) === 1) || (Math.abs(dx) === 1 && Math.abs(dy) === 2);
    }

  }

})()
