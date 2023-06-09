
(function() {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector("#elem1");
  // Magic happens here
  function parallax(e) {
      let _w = window.innerWidth/2;
      let _h = window.innerHeight/2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth1 = `${50 - (_mouseX - _w) * 0.0025}% ${50 - (_mouseY - _h) * 0.01}%`;
      let _depth2 = `${50 - (_mouseX - _w) * 0.005}% ${50 - (_mouseY - _h) * 0.02}%`;
      let _depth3 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.06}%`;
      let x = `${_depth3}, ${_depth2}, ${_depth1}`;
      console.log(x);
      elem.style.backgroundPosition = x;
  }
})();

window.onscroll = function() { updateProgressBar() };

function updateProgressBar() {
  var winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myProgressBar").style.width = scrolled + "%";
}
