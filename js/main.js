
  $(document).ready(function()
  {
    $('#shuffle').click(shuffle);
  });


  function shuffle()
  {
    $('.card').css({left: 100, position: 'absolute', top: 100});
  
    return false;
  }