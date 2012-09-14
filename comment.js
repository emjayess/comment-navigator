(function(d, w, undefined){
  var comments = d.getElementsByClassName('comment'), current = -1;

  function move(dir) {

    switch (dir) {

      case 'next':
        current++;
        if ( current > comments.length - 1 ) current = 0;
        break;

      case 'prev':
        current--;
        if ( current < 0 ) current = comments.length - 1;
        break;
    }

    d.location.hash = '#' + comments[current].id;
  }

  d.addEventListener('keypress', function(e) {
    var _c = String.fromCharCode(e.which);

    // do nothing in these cases
    if ((_c !== 'c' && _c !== 'C') || (e.target.nodeName == 'TEXTAREA')) return;

    move((_c == 'c') ? 'next' : 'prev');
  });
}(document, window))
