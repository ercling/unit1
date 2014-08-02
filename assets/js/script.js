$( document ).ready(function(){

  $('#searchbutton').click(function(e){
    e.preventDefault();
    $('#template').slideUp(300,renderSearch);


  });

  renderIndex();

//  $("#price-slider").slider({
//    tooltip: 'hide'
//  });
//  $("#price-slider").on('slide', function(slideEvt) {
//    $('#start-price-input').val(slideEvt.value[0]);
//    $('#end-price-input').val(slideEvt.value[1]);
//  });
//  $(document).off('.datepicker.data-api');
//  $('#max-date').datepicker({
//    format: 'mm/dd/yyyy',
//    startDate:new Date()
//  });

//  $.getJSON( "data/search-results.json", function( data ) {
//    //console.log(data);
//    $("#search-products").html(
//      $("#search-products-template").render( data )
//    );
//  }).fail(function(e) {
//    console.error( "Cannot get data." );
//  });

});

var renderIndex=function(){

  $.getJSON( "data/featured-products.json", function( data ) {
    $("#template").html(
        $("#index-template").render(data)
    );
  }).fail(function(e) {
    console.error( "Cannot get data." );
  });

};

var renderSearch=function(){

  $.getJSON( "data/search-results.json", function( data ) {
    $("#template").html(
        $("#search-products-template").render(data)
    );

    $("#price-slider").slider({
      tooltip: 'hide'
    });

    $("#price-slider").on('slide', function(slideEvt) {
      $('#start-price-input').val(slideEvt.value[0]);
      $('#end-price-input').val(slideEvt.value[1]);
    });

    $(document).off('.datepicker.data-api');
    $('#max-date').datepicker({
      format: 'mm/dd/yyyy',
      startDate:new Date()
    });

    $('.spinner .btn:first-of-type').on('click', function(e) {
      e.preventDefault();
      $('.spinner input').val( parseInt($('.spinner input').val(), 10) + 1);
    });
    $('.spinner .btn:last-of-type').on('click', function(e) {
      e.preventDefault();
      $('.spinner input').val( parseInt($('.spinner input').val(), 10) - 1);
    });


  }).fail(function(e) {
    console.error( "Cannot get data." );
  });



  $('#template').slideDown(300);

};