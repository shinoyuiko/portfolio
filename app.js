

$('.Person').each(function() {

  let kimura_off = $(this).attr('src');
  let kimura_on = $(this).attr('src').replace('off', 'on');

  $(this).hover(
    function () {
      $(this).attr('src', kimura_on);
    },
    function () {
      $(this).attr('src', kimura_off);
    }
  );

});

$('.Item').each(function() {

  let kutsu_off = $(this).attr('src');
  let kutsu_on = $(this).attr('src').replace('off', 'on');

  $(this).hover(
    function () {
      $(this).attr('src', kutsu_on);
    },
    function () {
      $(this).attr('src', kutsu_off);
    }
  );

});
