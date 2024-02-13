document.getElementById("uploadButton").addEventListener("click", function() {
    var uploadForm = document.getElementById("uploadForm");
    if (uploadForm.style.display === "none" || uploadForm.style.display === "") {
        uploadForm.style.display = "block";
    } else {
        uploadForm.style.display = "none";
    }
});



document.getElementById("uploadButton").addEventListener("click", function() {
    var uploadForm = document.getElementById("uploadForm");
    if (uploadForm.classList.contains("visible")) {
        uploadForm.classList.remove("visible");
    } else {
        uploadForm.classList.add("visible");
    }
});

