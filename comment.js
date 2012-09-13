(function(){
  var comments, current;

  comments = document.querySelectorAll('.commit-comment-header');
  current = -1;

  function findOffset(obj) {
    var box = obj.getBoundingClientRect();
    return box.top + window.pageYOffset;
  }

  function next(e){
    if( String.fromCharCode(e.which) !== "c" ) return;

    current++;
    if( current > comments.length - 1 ) current = 0;

    window.scroll( 0, findOffset( comments[current] ) );
  }

  function prev(e){
    if( String.fromCharCode(e.which) !== "C" ) return;

    current--;
    if( current < 0 ) current = comments.length - 1;

    window.scroll( 0, findOffset( comments[current] ) );
  }

  function prevOrNext(e){
    prev(e);
    next(e);
  }

  document.addEventListener("keypress", prevOrNext);
})()
