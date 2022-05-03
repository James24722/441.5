function validateForm(){
var x=document.forms["myForm"]["fname"].value;
if (x==null || x==""){
  alert("Last name must be filled in");
  return false;
  }
var y=document.forms["myForm"]["yname"].value;
if (y==null || y==""){
  alert("First name must be filled in");
  return false;
  }
var a=document.forms["myForm"]["Ename"].value;
if (a==null || a==""){
  alert("English name must be filled in");
  return false;
  }
var password=document.myform.password.value;  
if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }  
}
$(function(){
  var str = '#len'; //increment by 1 up to 1-nelemnts
  $(document).ready(function(){
    var i, stop;
    i = 1;
    stop = 4; //num elements
    setInterval(function(){
      if (i > stop){
        return;
      }
      $('#len'+(i++)).toggleClass('bounce');
    }, 500)
  });
});
<script>
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-red";
}
</script>