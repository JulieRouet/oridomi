var oridomi = new OriDomi ('.oridomi', {
  vPanels : 5,
  ripple : true

});

oridomi.reveal(40);

/*
var oriDomi2 = new OriDomi('.oridomi2');
oriDomi2.curl(40);*/

var oro = new OriDomi ('.oridomi2', {
  hPanels : 1,
  ripple : true

});

oro.curl(-24);


var oriDomi = new OriDomi('.oridomi3', {
   vPanels: 10,
   speed: 2000,

});document.getElementById('button').addEventListener('click', function() {
   oriDomi.collapse(40);
});
