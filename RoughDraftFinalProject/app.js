// DESTINATION PAGES (TRINIDAD)
// declare variable
var i = 0
            // set an empty array
var images = []
var time = 2100;

// contents filling array (list of images)
images[0] ="images/cuba.jpeg";
images[1] ="images/cuba3.jpeg";
images [2] ="images/cuba2.jpeg";
images [3] ="images/cuba3.jpeg";
// set up function to change images
function changeImage(){
    document.slide.src = images[i]
    if(i < images.length -1){
        i++;
    }else{
        i = 0;
    }
    setTimeout("changeImage()", time);
}
window.onload = changeImage;



