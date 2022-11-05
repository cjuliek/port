// Project Page button - Open + Close modal

document.getElementById("project_trigger").addEventListener("click", display);
function display() {
// find function of project prompt
// display screen centered 'project prompt'
  document.getElementById("project_modal").style.display = "block";
}

document.getElementById("close_project").addEventListener("click", close);
// be able to close out 'project prompt'
function close() {
  document.getElementById("project_modal").style.display="none";
}