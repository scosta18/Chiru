document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("rejectButton").addEventListener("click", function() {
        var acceptButton = document.getElementById("acceptButton");
        var currentFontSize = parseInt(window.getComputedStyle(acceptButton).fontSize);
        acceptButton.style.fontSize = (currentFontSize + 10) + "px"; // Increase by 10px each time
    });

    document.getElementById("acceptButton").addEventListener("click", function() {
        var conf = window.confirm("This page may contain viruses which may do harmful damages to your device. Confirm to continue.")
        if (conf) {
            window.location.href = "/red"; // Redirect to '/red' route
        } else {
            // Do nothing
        }
    });
});
