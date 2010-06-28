
  $(document).ready(function()
  {
    $('#shuffle').click(shuffle);
  });


  function shuffle()
  {
    $('.card').css('-moz-transform', 'scale(2)');
  
    return false;
  }