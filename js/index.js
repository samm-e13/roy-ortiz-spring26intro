const foot = document.createElement("footer");
document.body.appendChild(foot);

const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");
copyright.innerHTML = "Ortiz, " + thisYear;
foot.appendChild(copyright);

const skills = [
  "Snowflake/Vertica/SQL",
  "Tableau",
  "R Software",
  "Statistical Analysis",
  "Basic Modeling",
];

const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

const messageForm = document.querySelector("#leave_message");
messageForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const usersName = event.target.usersName;
  const usersEmail = event.target.usersEmail;
  const usersMessage = event.target.usersMessage;
  console.log(usersName, usersEmail, usersMessage);
  const messageSection = document.querySelector("#messages");
  const messageList = messages.querySelector("ul");
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a>: <span>${usersMessage}</span>`;
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  removeButton.addEventListener("click", function (event) {
    const entry = removeButton.parentNode;
    entry.remove();
  });
  event.target.reset();
});
