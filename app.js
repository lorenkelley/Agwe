//-------------------------- index4.html----------------------------------------
// declare variables (global)
var i = 0
            // set an empty array
var images = []
var time = 2100;
// contents filling array (list of images)
images[0] = "../images/0_400x600.jpg";
// image came from j.moultrie
images[1] = "../images/trin.jpg";
// image came from j.moultrie
images [2] = "../images/array2.jpeg";
// image came from https://unsplash.com/search/photos/beach
images[3] = "../images/array3.jpeg";
// image came from https://unsplash.com/search/photos/beach
// images[4] = "../images/array5.jpeg";
// // image came from https://unsplash.com/search/photos/beach

function changeImage(){
// set up function to change images
    document.slide1.src = images[i]
    // if else statement
    if(i < images.length -1){
        // if i is less than/equal to the length of images 
        // i is like our counter
        i++;
        // iteriate by one everytime while i is less than the length of images - 1
    }else{
        i = 0;
        // when i is = to 0 (else do this) display first image
    }
    setTimeout("changeImage()", time);
}
window.onload = changeImage;

// ----------------------------- index6.html --------------------------------
// declare function
function messageAlert(){
    alert("See You Soon!");
    // alert box will display and say thank you when button is clicked
}
// -------------------------------- index8.html-------------------------------------
// create variables
var modal = document.getElementById("btnModal");
// get the modal by calling the id
var btn = document.getElementById("bookBtn");
// get the button to open the modal by calling the id 
var span = document.getElementsByClassName("closeBtn")[0];
// get button to close modal by the class name!!!

btn.onclick = function(){
    // create and run function to display the modal which is intially set to display: none; in the css running function when you hit the button will set it to actually display
    modal.style.display ="block";
}
span.onclick = function(){
    // create function that will close out of the modal (x)
    modal.style.display="none";
}
//----------------------------------- index9.html---------------------------------
function addText2(){
    // create function
    var text2 = "YES!";
    // set variables
    $('.secondBtn').append(text2);
                    // add on we will add text2 to the pre existing text
    // let jquery do the work!
               
}