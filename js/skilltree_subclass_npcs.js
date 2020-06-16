$(document).ready(function() {

    // req skills collapse events
        $('#collapseOne').on('hidden.bs.collapse', function () {
            $('#headingOne').css("background-color", "#343A40"); // set bg colour or req skills header to gray upon collapse
        });
        
        $('#collapseOne').on('show.bs.collapse', function () {
            $('#headingOne').css("background-color", "#6aa84f"); // return to default colour upon un-collapse-ening
        });

     // recommended skills collapse events
        $('#collapseTwo').on('hidden.bs.collapse', function () {
            $('#headingTwo').css("background-color", "#343A40"); // set bg colour or req skills header to gray upon collapse
        });
        
        $('#collapseTwo').on('show.bs.collapse', function () {
            $('#headingTwo').css("background-color", "#6d9eeb"); // return to default colour upon un-collapse-ening
        });

     // optional skills collapse events
        $('#collapseThree').on('hidden.bs.collapse', function () {
            $('#headingThree').css("background-color", "#343A40"); // set bg colour or req skills header to gray upon collapse
        });
        
        $('#collapseThree').on('show.bs.collapse', function () {
            $('#headingThree').css("background-color", "#a8a14f"); // return to default colour upon un-collapse-ening
        });

     // please don't collapse events
        $('#collapseFour').on('hidden.bs.collapse', function () {
            $('#headingFour').css("background-color", "#343A40"); // set bg colour or req skills header to gray upon collapse
        });
        
        $('#collapseFour').on('show.bs.collapse', function () {
            $('#headingFour').css("background-color", "#bd4544"); // return to default colour upon un-collapse-ening
        });

});   
