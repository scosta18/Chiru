document.getElementById("rejectButton").addEventListener("click", function() {
    var acceptButton = document.getElementById("acceptButton");
    var currentFontSize = parseInt(window.getComputedStyle(acceptButton).fontSize);
    acceptButton.style.fontSize = (currentFontSize + 10) + "px"; // Increase by 1px each time
});

//open a different page and congrats her with a beautiful couple picture.
document.getElementById("acceptButton").addEventListener("click", function(){
    var conf = window.confirm("This page may contain viruses which may do harmfull damages to you device. Confirm to continue.")
    if(conf){
        window.location.href = "red.html"
    } else{
        
    }
})
