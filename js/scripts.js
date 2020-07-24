$( function() {
    $( "#datepicker1" ).datepicker();
} );
$( function() {
    $( "#datepicker2" ).datepicker();
} );

$(function() {                       //run when the DOM is ready
    $(".clickable").click(function() {  //use a class, since your ID gets mangled
        $(this).parents(".monblan_item").toggleClass("active");      //add the class to the clicked element
    });
});
$(function() {                       //run when the DOM is ready
    $(".clickable_list").click(function() {  //use a class, since your ID gets mangled
        $(this).parents(".monblan_item") .toggleClass("active");    //add the class to the clicked element
    });
});