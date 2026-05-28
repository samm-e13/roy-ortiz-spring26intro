const footer = document.createElement("footer");
document.body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");
copyright.innerHTML = "Ortiz, " + thisYear;
footer.appendChild(copyright);

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
