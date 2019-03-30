let iconPosition = [1, 7];
let observers = [];

function emitChange() {
  observers.forEach(o => {
    o && o(iconPosition);
  });
}

export function observe(o) {
  observers.push(o);
  emitChange();
  return () => {
    observers = observers.filter(t => t !== o);
  };
}

export function moveIcon(toX, toY) {
  iconPosition = [toX, toY];
  emitChange();
}
