const container = document.getElementById("container");
const subjectButtons = document.getElementById("#asgmt .btn");
const submissionForm = document.getElementById("submissionForm");
const titleInput = document.getElementById("title");
const dateInput = document.getElementById("date");
const submissionList = document.getElementById("submissionList");
const doneMessage = document.getElementById("done");
const radioInputs = document.querySelectorAll("input[name='submissionType']");
const totalCountElem = document.createElement("p");
submissionList.parentNode.appendChild(totalCountElem);

let selectedSubject = null;
let submissionCount = 0;
totalCountElem.textContent = `Total Submissions: ${submissionCount}`;

