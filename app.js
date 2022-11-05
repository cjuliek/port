// -- open + close modal of 'project' -- //
document.getElementById("project_trigger").addEventListener("click", display);
function display() {
  document.getElementById("project_modal").style.display = "block";
}

document.getElementById("close_project").addEventListener("click", close);
function close() {
  document.getElementById("project_modal").style.display="none";
}

// -- display img on click of 'smile' -- //
document.getElementById("smile_trigger").addEventListener("click", reveal);
function reveal() {
    document.getElementById("latte").style.display="block"}

const pets =[
        {src:"/Users/jules/GA/Portfolio_JC/images/pets/IMG_4354.jpeg",},
        {src:"/Users/jules/GA/Portfolio_JC/images/pets/IMG_4440.jpeg"},
        {src:"/Users/jules/GA/Portfolio_JC/images/pets/IMG_6906.jpeg"}
    ]
