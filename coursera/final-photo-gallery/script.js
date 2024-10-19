// Function to update the main image
function upDate(previewPic) {
    console.log("Update event triggered");
    console.log("Alt text:", previewPic.alt);
    console.log("Image source:", previewPic.src);

    let imageDiv = document.getElementById('image');
    
    imageDiv.textContent = previewPic.alt;
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

// Function to reset the main image
function unDo() {
    let imageDiv = document.getElementById('image');
    
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = "Interact with an image below to display here.";
}

// Function to add tabindex to images
function addTabIndex() {
    console.log("Adding tabindex to images");
    let images = document.querySelectorAll('.preview');
    
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
}

// Add event listener for page load
window.addEventListener('load', addTabIndex);