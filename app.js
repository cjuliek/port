// -- open + close modal of 'project' -- //
document.getElementById("project_trigger").addEventListener("click", display);
function display() {
  document.getElementById("project_modal").style.display = "block";
}

document.getElementById("close_project").addEventListener("click", close);
function close() {
  document.getElementById("project_modal").style.display="none";
}

// -- smile = reveal random img from pets folder -- // 
pets_array =[
    src="./images/pets/IMG_4354.jpeg",
    src="./images/pets/IMG_4440.jpeg",
    src="./images/pets/IMG_4519.jpg",
    src="./images/pets/IMG_4521 2.jpg",
    src="./images/pets/IMG_4522 2.jpg",
    src="./images/pets/IMG_4523 2.jpg",
    src="./images/pets/IMG_4524 2.jpg",
    src="./images/pets/IMG_4525 2.jpg",
    src="./images/pets/IMG_4526 2.jpg",
    src="./images/pets/IMG_4527 2.jpg",
    src="./images/pets/IMG_4528 2.jpg",
    src="./images/pets/IMG_4529 2.jpg",
    src="./images/pets/IMG_4530 2.jpg",
    src="./images/pets/IMG_4531 2.jpg",
    src="./images/pets/IMG_4532 2.jpg",
    src="./images/pets/IMG_6906.jpeg",
]
function randomImage() {
    //pull random index of img
random_index = Math.floor(Math.random() * pets_array.length);
    // get img at random index
    selected_image = pets_array[random_index]
    console.log(selected_image)
    //update img src to selected img
    document.getElementById('pets_reveal').src = `${selected_image}`
    //display img 
    document.getElementById("pets_reveal").style.display = "block"
}
document.getElementById("smile_trigger").addEventListener("click", randomImage);
function revealRan() {
    document.getElementById("pets_reveal").style.display = "block";
}
