function Keyboarder() {
  this.KEYS = { LEFT: 'ArrowLeft', RIGHT: 'ArrowRight', UP: 'ArrowUp' };
  this.keyState = {};

  const self = this;

  window.onkeydown = function onKeyDown(e) {
    self.keyState.ArrowLeft = true;
  };
}
