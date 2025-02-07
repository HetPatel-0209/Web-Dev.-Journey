function upDate(previewPic) {
    console.log("Mouse over event triggered");
    console.log("Alt text:", previewPic.alt);
    console.log("Image source:", previewPic.src);

    let imageDiv = document.getElementById('image');
    
    // Change the text of the element with the id of 'image'
    imageDiv.textContent = previewPic.alt;
    
    // Change the background image of the element with the id of 'image'
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

function unDo() {
    let imageDiv = document.getElementById('image');
    
    // Reset the background image of the div with the id of 'image'
    imageDiv.style.backgroundImage = "url('')";
    
    // Reset the text of the div with the id of 'image'
    imageDiv.textContent = "Hover over an image below to display here.";
}