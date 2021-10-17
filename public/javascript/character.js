let hideMe = false;

document
  .querySelector("form.pure-form")
  .addEventListener("submit", async function (e) {
    //prevent the normal submission of the form
    e.preventDefault();

    await getRaces();
  });

function myFunction() {
  document.getElementById("hiddenDiv").removeAttribute("hidden");
  let showThisText = document.getElementById("showThis");
  showThisText.style.backgroundColor = "red";

  document.getElementById("firstLook").classList.add("hidden");
}
function hide() {
  let hideLists = document.getElementsByClassName("stat1");
  let hideStats = document.getElementsByClassName("hideStat1");

  hideLists[0].remove();
  hideStats[0].remove();
}

function hideMeClick() {
  if (hideMe === true) {
    hideMe = false;
    let showText = "close list";
    let hideList = document.getElementById("raceList");
    hideList.classList.remove("hidden");

    let showThisText = document.getElementById("showThis");

    showThisText.innerHTML = showText;
    showThisText.style.backgroundColor = "red";

    return;
  } else {
    hideMe = true;
    let showText = "show list";
    let hideList = document.getElementById("raceList");
    hideList.classList.add("hidden");

    let showThisText = document.getElementById("showThis");

    showThisText.innerHTML = showText;
    showThisText.style.backgroundColor = "blue";

    return;
  }
}
async function getRaces() {
  const responseAll = await fetch(`http://www.dnd5eapi.co/api/races/`);

  const allResponses = await responseAll.json();
  const allRaces = allResponses.results;

  let allRacesHtml = "";

  for (let i = 0; i < allRaces.length; i++) {
    allRacesHtml +=
      "<button id=" +
      "'" +
      i +
      "'" +
      " onclick='pickRace(" +
      i +
      ")' class='pickedRace'>" +
      "<span>" +
      allRaces[i].index +
      "</span>" +
      "</button>";

    document.getElementById("raceList").innerHTML = allRacesHtml;
  }
}

async function pickRace(number) {
  if (number >= 0) {
    statBlock = document.getElementById(number);

    statBlock.insertAdjacentHTML(
      "afterend",
      "<button class='hideStat1' onclick='hide()'> hide stats</button>" +
        "<div   id=stat" +
        number +
        " class='stat1'>  </div>"
    );
  }
  if (number === 0) {
    let raceId = "dragonborn";

    let statData = document.getElementById("stat" + number);
    const response = await fetch(`http://www.dnd5eapi.co/api/races/${raceId}`);
    const raceData = await response.json();
    const abilityBonus = raceData.ability_bonuses;
    abilityBonus.forEach(
      (abilitys) =>
        (statData.innerHTML +=
          "<div> ability score race bonus : " +
          abilitys.ability_score.index +
          ": +" +
          abilitys.bonus +
          "</div>")
    );
    const age = raceData.age;
    const alignmentInfo = raceData.alignment;
    const index = raceData.index;
    const languageDescription = raceData.language_desc;
    const languages = raceData.languages;
    languages.forEach((language) =>
      console.log("language == ", language.index)
    );
    const name = raceData.name;
    const averageSize = raceData.size;
    const sizeDescription = raceData.size_description;
    const speed = raceData.speed;
    statData.innerHTML +=
      "<div> speed : " +
      speed +
      "ft </div>" +
      "<div> size description : " +
      sizeDescription +
      "</div>" +
      "<div> language description : " +
      languageDescription +
      "</div>" +
      "<div> alignment info : " +
      alignmentInfo +
      "</div>" +
      "<div> aging : " +
      age +
      "</div>";

    const startingProficiencies = raceData.starting_proficiencies;
    startingProficiencies.forEach(
      (startingProficiency) =>
        (statData.innerHTML +=
          "<div> starting proficiencis : " +
          startingProficiency.index +
          " </div>")
    );
    const subRaces = raceData.subraces;
    subRaces.forEach(
      (subRace) =>
        (statData.innerHTML +=
          "<div> sub race options : " + subRace.index + " </div>")
    );
    const traits = raceData.traits;
    traits.forEach(
      (trait) =>
        (statData.innerHTML +=
          "<div> racial traits : " + trait.index + " </div>")
    );
    const traitsTotal = raceData.traits.length;
    console.log(" traits total == ", traitsTotal);
  }
  if (number === 1) {
    let raceId = "dwarf";

    let statData = document.getElementById("stat" + number);
    const response = await fetch(`http://www.dnd5eapi.co/api/races/${raceId}`);
    const raceData = await response.json();
    const abilityBonus = raceData.ability_bonuses;
    abilityBonus.forEach(
      (abilitys) =>
        (statData.innerHTML +=
          "<div> ability score race bonus : " +
          abilitys.ability_score.index +
          ": +" +
          abilitys.bonus +
          "</div>")
    );
    const age = raceData.age;
    const alignmentInfo = raceData.alignment;
    const index = raceData.index;
    const languageDescription = raceData.language_desc;
    const languages = raceData.languages;
    languages.forEach((language) =>
      console.log("language == ", language.index)
    );
    const name = raceData.name;
    const averageSize = raceData.size;
    const sizeDescription = raceData.size_description;
    const speed = raceData.speed;
    statData.innerHTML +=
      "<div> speed : " +
      speed +
      "ft </div>" +
      "<div> size description : " +
      sizeDescription +
      "</div>" +
      "<div> language description : " +
      languageDescription +
      "</div>" +
      "<div> alignment info : " +
      alignmentInfo +
      "</div>" +
      "<div> aging : " +
      age +
      "</div>";

    const startingProficiencies = raceData.starting_proficiencies;
    startingProficiencies.forEach(
      (startingProficiency) =>
        (statData.innerHTML +=
          "<div> starting proficiencis : " +
          startingProficiency.index +
          " </div>")
    );
    const subRaces = raceData.subraces;
    subRaces.forEach(
      (subRace) =>
        (statData.innerHTML +=
          "<div> sub race options : " + subRace.index + " </div>")
    );
    const traits = raceData.traits;
    traits.forEach(
      (trait) =>
        (statData.innerHTML +=
          "<div> racial traits : " + trait.index + " </div>")
    );
    const traitsTotal = raceData.traits.length;
    console.log(" traits total == ", traitsTotal);
  }
  if (number === 2) {
    let raceId = "elf";

    let statData = document.getElementById("stat" + number);
    const response = await fetch(`http://www.dnd5eapi.co/api/races/${raceId}`);
    const raceData = await response.json();
    const abilityBonus = raceData.ability_bonuses;
    abilityBonus.forEach(
      (abilitys) =>
        (statData.innerHTML +=
          "<div> ability score race bonus : " +
          abilitys.ability_score.index +
          ": +" +
          abilitys.bonus +
          "</div>")
    );
    const age = raceData.age;
    const alignmentInfo = raceData.alignment;
    const index = raceData.index;
    const languageDescription = raceData.language_desc;
    const languages = raceData.languages;
    languages.forEach((language) =>
      console.log("language == ", language.index)
    );
    const name = raceData.name;
    const averageSize = raceData.size;
    const sizeDescription = raceData.size_description;
    const speed = raceData.speed;
    statData.innerHTML +=
      "<div> speed : " +
      speed +
      "ft </div>" +
      "<div> size description : " +
      sizeDescription +
      "</div>" +
      "<div> language description : " +
      languageDescription +
      "</div>" +
      "<div> alignment info : " +
      alignmentInfo +
      "</div>" +
      "<div> aging : " +
      age +
      "</div>";

    const startingProficiencies = raceData.starting_proficiencies;
    startingProficiencies.forEach(
      (startingProficiency) =>
        (statData.innerHTML +=
          "<div> starting proficiencis : " +
          startingProficiency.index +
          " </div>")
    );
    const subRaces = raceData.subraces;
    subRaces.forEach(
      (subRace) =>
        (statData.innerHTML +=
          "<div> sub race options : " + subRace.index + " </div>")
    );
    const traits = raceData.traits;
    traits.forEach(
      (trait) =>
        (statData.innerHTML +=
          "<div> racial traits : " + trait.index + " </div>")
    );
    const traitsTotal = raceData.traits.length;
    console.log(" traits total == ", traitsTotal);
  }
  if (number === 3) {
    let raceId = "gnome";

    let statData = document.getElementById("stat" + number);
    const response = await fetch(`http://www.dnd5eapi.co/api/races/${raceId}`);
    const raceData = await response.json();
    const abilityBonus = raceData.ability_bonuses;
    abilityBonus.forEach(
      (abilitys) =>
        (statData.innerHTML +=
          "<div> ability score race bonus : " +
          abilitys.ability_score.index +
          ": +" +
          abilitys.bonus +
          "</div>")
    );
    const age = raceData.age;
    const alignmentInfo = raceData.alignment;
    const index = raceData.index;
    const languageDescription = raceData.language_desc;
    const languages = raceData.languages;
    languages.forEach((language) =>
      console.log("language == ", language.index)
    );
    const name = raceData.name;
    const averageSize = raceData.size;
    const sizeDescription = raceData.size_description;
    const speed = raceData.speed;
    statData.innerHTML +=
      "<div> speed : " +
      speed +
      "ft </div>" +
      "<div> size description : " +
      sizeDescription +
      "</div>" +
      "<div> language description : " +
      languageDescription +
      "</div>" +
      "<div> alignment info : " +
      alignmentInfo +
      "</div>" +
      "<div> aging : " +
      age +
      "</div>";

    const startingProficiencies = raceData.starting_proficiencies;
    startingProficiencies.forEach(
      (startingProficiency) =>
        (statData.innerHTML +=
          "<div> starting proficiencis : " +
          startingProficiency.index +
          " </div>")
    );
    const subRaces = raceData.subraces;
    subRaces.forEach(
      (subRace) =>
        (statData.innerHTML +=
          "<div> sub race options : " + subRace.index + " </div>")
    );
    const traits = raceData.traits;
    traits.forEach(
      (trait) =>
        (statData.innerHTML +=
          "<div> racial traits : " + trait.index + " </div>")
    );
    const traitsTotal = raceData.traits.length;
    console.log(" traits total == ", traitsTotal);
  }
  if (number === 4) {
    let raceId = "half-elf";

    let statData = document.getElementById("stat" + number);
    const response = await fetch(`http://www.dnd5eapi.co/api/races/${raceId}`);
    const raceData = await response.json();
    const abilityBonus = raceData.ability_bonuses;
    abilityBonus.forEach(
      (abilitys) =>
        (statData.innerHTML +=
          "<div> ability score race bonus : " +
          abilitys.ability_score.index +
          ": +" +
          abilitys.bonus +
          "</div>")
    );
    const age = raceData.age;
    const alignmentInfo = raceData.alignment;
    const index = raceData.index;
    const languageDescription = raceData.language_desc;
    const languages = raceData.languages;
    languages.forEach((language) =>
      console.log("language == ", language.index)
    );
    const name = raceData.name;
    const averageSize = raceData.size;
    const sizeDescription = raceData.size_description;
    const speed = raceData.speed;
    statData.innerHTML +=
      "<div> speed : " +
      speed +
      "ft </div>" +
      "<div> size description : " +
      sizeDescription +
      "</div>" +
      "<div> language description : " +
      languageDescription +
      "</div>" +
      "<div> alignment info : " +
      alignmentInfo +
      "</div>" +
      "<div> aging : " +
      age +
      "</div>";

    const startingProficiencies = raceData.starting_proficiencies;
    startingProficiencies.forEach(
      (startingProficiency) =>
        (statData.innerHTML +=
          "<div> starting proficiencis : " +
          startingProficiency.index +
          " </div>")
    );
    const subRaces = raceData.subraces;
    subRaces.forEach(
      (subRace) =>
        (statData.innerHTML +=
          "<div> sub race options : " + subRace.index + " </div>")
    );
    const traits = raceData.traits;
    traits.forEach(
      (trait) =>
        (statData.innerHTML +=
          "<div> racial traits : " + trait.index + " </div>")
    );
    const traitsTotal = raceData.traits.length;
    console.log(" traits total == ", traitsTotal);
  }
  if (number === 5) {
    let raceId = "half-orc";

    let statData = document.getElementById("stat" + number);
    const response = await fetch(`http://www.dnd5eapi.co/api/races/${raceId}`);
    const raceData = await response.json();
    const abilityBonus = raceData.ability_bonuses;
    abilityBonus.forEach(
      (abilitys) =>
        (statData.innerHTML +=
          "<div> ability score race bonus : " +
          abilitys.ability_score.index +
          ": +" +
          abilitys.bonus +
          "</div>")
    );
    const age = raceData.age;
    const alignmentInfo = raceData.alignment;
    const index = raceData.index;
    const languageDescription = raceData.language_desc;
    const languages = raceData.languages;
    languages.forEach((language) =>
      console.log("language == ", language.index)
    );
    const name = raceData.name;
    const averageSize = raceData.size;
    const sizeDescription = raceData.size_description;
    const speed = raceData.speed;
    statData.innerHTML +=
      "<div> speed : " +
      speed +
      "ft </div>" +
      "<div> size description : " +
      sizeDescription +
      "</div>" +
      "<div> language description : " +
      languageDescription +
      "</div>" +
      "<div> alignment info : " +
      alignmentInfo +
      "</div>" +
      "<div> aging : " +
      age +
      "</div>";

    const startingProficiencies = raceData.starting_proficiencies;
    startingProficiencies.forEach(
      (startingProficiency) =>
        (statData.innerHTML +=
          "<div> starting proficiencis : " +
          startingProficiency.index +
          " </div>")
    );
    const subRaces = raceData.subraces;
    subRaces.forEach(
      (subRace) =>
        (statData.innerHTML +=
          "<div> sub race options : " + subRace.index + " </div>")
    );
    const traits = raceData.traits;
    traits.forEach(
      (trait) =>
        (statData.innerHTML +=
          "<div> racial traits : " + trait.index + " </div>")
    );
    const traitsTotal = raceData.traits.length;
    console.log(" traits total == ", traitsTotal);
  }
  if (number === 6) {
    let raceId = "halfling";

    let statData = document.getElementById("stat" + number);
    const response = await fetch(`http://www.dnd5eapi.co/api/races/${raceId}`);
    const raceData = await response.json();
    const abilityBonus = raceData.ability_bonuses;
    abilityBonus.forEach(
      (abilitys) =>
        (statData.innerHTML +=
          "<div> ability score race bonus : " +
          abilitys.ability_score.index +
          ": +" +
          abilitys.bonus +
          "</div>")
    );
    const age = raceData.age;
    const alignmentInfo = raceData.alignment;
    const index = raceData.index;
    const languageDescription = raceData.language_desc;
    const languages = raceData.languages;
    languages.forEach((language) =>
      console.log("language == ", language.index)
    );
    const name = raceData.name;
    const averageSize = raceData.size;
    const sizeDescription = raceData.size_description;
    const speed = raceData.speed;
    statData.innerHTML +=
      "<div> speed : " +
      speed +
      "ft </div>" +
      "<div> size description : " +
      sizeDescription +
      "</div>" +
      "<div> language description : " +
      languageDescription +
      "</div>" +
      "<div> alignment info : " +
      alignmentInfo +
      "</div>" +
      "<div> aging : " +
      age +
      "</div>";

    const startingProficiencies = raceData.starting_proficiencies;
    startingProficiencies.forEach(
      (startingProficiency) =>
        (statData.innerHTML +=
          "<div> starting proficiencis : " +
          startingProficiency.index +
          " </div>")
    );
    const subRaces = raceData.subraces;
    subRaces.forEach(
      (subRace) =>
        (statData.innerHTML +=
          "<div> sub race options : " + subRace.index + " </div>")
    );
    const traits = raceData.traits;
    traits.forEach(
      (trait) =>
        (statData.innerHTML +=
          "<div> racial traits : " + trait.index + " </div>")
    );
    const traitsTotal = raceData.traits.length;
    console.log(" traits total == ", traitsTotal);
  }
  if (number === 7) {
    let raceId = "human";

    let statData = document.getElementById("stat" + number);
    const response = await fetch(`http://www.dnd5eapi.co/api/races/${raceId}`);
    const raceData = await response.json();
    const abilityBonus = raceData.ability_bonuses;
    abilityBonus.forEach(
      (abilitys) =>
        (statData.innerHTML +=
          "<div> ability score race bonus : " +
          abilitys.ability_score.index +
          ": +" +
          abilitys.bonus +
          "</div>")
    );
    const age = raceData.age;
    const alignmentInfo = raceData.alignment;
    const index = raceData.index;
    const languageDescription = raceData.language_desc;
    const languages = raceData.languages;
    languages.forEach((language) =>
      console.log("language == ", language.index)
    );
    const name = raceData.name;
    const averageSize = raceData.size;
    const sizeDescription = raceData.size_description;
    const speed = raceData.speed;
    statData.innerHTML +=
      "<div> speed : " +
      speed +
      "ft </div>" +
      "<div> size description : " +
      sizeDescription +
      "</div>" +
      "<div> language description : " +
      languageDescription +
      "</div>" +
      "<div> alignment info : " +
      alignmentInfo +
      "</div>" +
      "<div> aging : " +
      age +
      "</div>";

    const startingProficiencies = raceData.starting_proficiencies;
    startingProficiencies.forEach(
      (startingProficiency) =>
        (statData.innerHTML +=
          "<div> starting proficiencis : " +
          startingProficiency.index +
          " </div>")
    );
    const subRaces = raceData.subraces;
    subRaces.forEach(
      (subRace) =>
        (statData.innerHTML +=
          "<div> sub race options : " + subRace.index + " </div>")
    );
    const traits = raceData.traits;
    traits.forEach(
      (trait) =>
        (statData.innerHTML +=
          "<div> racial traits : " + trait.index + " </div>")
    );
    const traitsTotal = raceData.traits.length;
    console.log(" traits total == ", traitsTotal);
  }
  if (number === 8) {
    let raceId = "tiefling";

    let statData = document.getElementById("stat" + number);
    const response = await fetch(`http://www.dnd5eapi.co/api/races/${raceId}`);
    const raceData = await response.json();
    const abilityBonus = raceData.ability_bonuses;
    abilityBonus.forEach(
      (abilitys) =>
        (statData.innerHTML +=
          "<div> ability score race bonus : " +
          abilitys.ability_score.index +
          ": +" +
          abilitys.bonus +
          "</div>")
    );
    const age = raceData.age;
    const alignmentInfo = raceData.alignment;
    const index = raceData.index;
    const languageDescription = raceData.language_desc;
    const languages = raceData.languages;
    languages.forEach((language) =>
      console.log("language == ", language.index)
    );
    const name = raceData.name;
    const averageSize = raceData.size;
    const sizeDescription = raceData.size_description;
    const speed = raceData.speed;
    statData.innerHTML +=
      "<div> speed : " +
      speed +
      "ft </div>" +
      "<div> size description : " +
      sizeDescription +
      "</div>" +
      "<div> language description : " +
      languageDescription +
      "</div>" +
      "<div> alignment info : " +
      alignmentInfo +
      "</div>" +
      "<div> aging : " +
      age +
      "</div>";

    const startingProficiencies = raceData.starting_proficiencies;
    startingProficiencies.forEach(
      (startingProficiency) =>
        (statData.innerHTML +=
          "<div> starting proficiencis : " +
          startingProficiency.index +
          " </div>")
    );
    const subRaces = raceData.subraces;
    subRaces.forEach(
      (subRace) =>
        (statData.innerHTML +=
          "<div> sub race options : " + subRace.index + " </div>")
    );
    const traits = raceData.traits;
    traits.forEach(
      (trait) =>
        (statData.innerHTML +=
          "<div> racial traits : " + trait.index + " </div>")
    );
    const traitsTotal = raceData.traits.length;
    console.log(" traits total == ", traitsTotal);
  }
}
