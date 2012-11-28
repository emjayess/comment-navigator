;(function(d){
  var comments = d.getElementsByClassName('comment'), current = -1;

  d.addEventListener('keypress', function(e) {
    var dir, _c = String.fromCharCode(e.which);

    // do nothing in these cases
    if ((!(dir = _c == 'c') && _c !== 'C') || (e.target.nodeName == 'TEXTAREA')) return;

    dir ? current++ : current--;

    if ( current > comments.length - 1 ) current = 0;
    if ( current < 0 ) current = comments.length - 1;

    d.location.hash = '#' + comments[current].id;
  });
}(document));
