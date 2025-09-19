// cached elements for the buttons, form and tasks list 
const container = document.getElementById("container");
const subjectButtons = document.querySelectorAll("#asgmt .btn");
const submissionForm = document.getElementById("submissionForm");
const titleInput = document.getElementById("title");
const dateInput = document.getElementById("date");
const submissionList = document.getElementById("submissionList");
const doneMessage = document.getElementById("done");
const radioInputs = document.querySelectorAll("input[name='submissionType']");
const totalCountElem = document.createElement("p");
submissionList.parentNode.appendChild(totalCountElem);

// Track selected subject with submission count
let selectedSubject = null;
let submissionCount = 0;
totalCountElem.textContent = `Total Submissions: ${submissionCount}`;

// loop over all subject btn, highlight selected subject and save the choice
subjectButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        selectedSubject = btn.textContent;
        subjectButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        console.log("Selected subject:", selectedSubject);
    });
});

// preload sample task in the list for display
const fragment = document.createDocumentFragment();
const li = document.createElement("li");
li.textContent = "Subject - Description - Due Date - [Type]";
fragment.appendChild(li);
submissionList.appendChild(fragment);

// submission form validation
submissionForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!selectedSubject) {
        alert("please select a subject first!");
        return;
    }
    if (titleInput.value.length < 5) {
        alert("Title must be at least 5 characters!");
        return;
    }
    if (!dateInput.value) {
        alert("Please select date!");
        return;
    }
    let selectedType = null;
    radioInputs.forEach((radio) => {
        if (radio.checked) selectedType = radio.value;
    });
    if (!selectedType) {
        alert("Please select submission type!");
        return;
    }
    // create and append new submission item 
    const li = document.createElement("li");
    li.textContent = `${selectedSubject} - ${titleInput.value} - ${dateInput.value} - [${selectedType.toUpperCase()}]`;
    li.setAttribute("data-subject", selectedSubject);
    li.setAttribute("data-type", selectedType);
    submissionList.appendChild(li);

    // update counter 
    submissionCount++; 
    totalCountElem.textContent = `Total Submissions: ${submissionCount}`;

    // reminder message if the tasks cross the limit
    if (submissionCount >= 5) {
        doneMessage.hidden = false;
        doneMessage.querySelector('h1').textContent = "Please Get Some Tasks Done First!";
    }

    // reset the form selection
    submissionForm.reset();
    subjectButtons.forEach(b => b.classList.remove("active"));
    selectedSubject = null;
});
// BOM properties and method
console.log("Window width:", window.innerWidth);
console.log("Window height", window.innerHeight);

window.addEventListener("load", () => {
    alert("Welcome to the submission Tacker Page");
});
