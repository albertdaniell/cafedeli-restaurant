$(document).ready(function(){
              
    $("#nav a,#topdiv a,.cover a, footer a[href='#myPage']").on('click', function(event) {

// Make sure this.hash has a value before overriding default behavior
if (this.hash !== "") {

// Prevent default anchor click behavior
event.preventDefault();

// Store hash
var hash = this.hash;

// Using jQuery's animate() method to add smooth page scroll
// The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
$('html, body').animate({
scrollTop: $(hash).offset().top
}, 1500, function(){

// Add hash (#) to URL when done scrolling (default click behavior)
window.location.hash = hash;
});
} // End if
});
   
   
   
   
$("#mymodal").hide();
  $("#welcome").hide();
         $("#welcome").fadeIn(1000).delay(3000).fadeOut(3000);    
   $("#nav").hide();
    $("btn").show();
    $("#menubar").click(function(){
        $("#welcome").hide();
        $("#nav").slideDown(500);
       $("#menubar").fadeOut(50);
       // $("#body").fadeOut(10);
        $("#nav").css({"position":"fixed","top":"0","left":"0","width":"100%","color":"white","height":"100%","opacity":"","z-inder":"10"})
        $("body").css({"background-color":"black",
                       
                     "transition":"0.9s",
                       "color":"darkgrey"
                     
                      });
         //$("button").text("Toggle back");
        //$("button").addClass("Toggle back");
       // alert("Hidding paragraph");
        
        
     });
   
   
   $(".btnsubscribe").click(function(){
     $("#mymodal").slideDown();  
    
      // $("#subscribe").hide();
       
       
   });
   
   
    $("#cancelmodal").click(function(){
        $("#mymodal").slideUp(300);   
        
    });
   
   $("#cancelid").click(function(){
      $("#nav").slideUp(300);
         $("#mymodal").slideUp(300);
        $("#menubar").fadeIn(800);
       $("#body").fadeIn(800);
       
         $("body").css({"background-color":"white",
                       
                     "transition":"0.9s",
                       "color":"black"
                     
                      });
       
       
       
   });
   
   $("#nav a").click(function(){
      // $("#cancelid").text("...");
       $("#nav").slideUp(300);
        $("#menubar").fadeIn(800);
       $("#body").fadeIn(800);
       
         $("body").css({"background-color":"white",
                       
                     "transition":"0.9s",
                       "color":"black"
                     
                      });
     
       
   });
   
  
   
 
 });
 
  
 
 $(document).on('load',function(){
     $("#nav").hide(); 
 
     
 });
 
 
 