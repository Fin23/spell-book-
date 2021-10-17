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

    document.getElementById("showThis").innerHTML = showText;

    return;
  } else {
    hideMe = true;
    let showText = "show list";
    let hideList = document.getElementById("raceList");
    hideList.classList.add("hidden");

    document.getElementById("showThis").innerHTML = showText;

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
      "<div   id=stat" +
        number +
        " class='stat1'> TEST </div>" +
        "<div class='hideStat1' style='border:solid white 1px;' onclick='hide()'> hide</div>"
    );
  }
  if (number === 0) {
    let raceId = "dragonborn";
    let statData = document.getElementById("stat" + number);
    // console.log("number", number, raceId);
    const response = await fetch(`http://www.dnd5eapi.co/api/races/${raceId}`);
    const raceData = await response.json();
    // console.log("race data ", raceData);
    //////////////////////////////////////
    ///////////////////////////////////////
    // console.log("race data", JSON.stringify(raceData, null, 2));
    const abilityBonus = raceData.ability_bonuses;
    // console.log("ability Bonus  == ", abilityBonus);
    abilityBonus.forEach((abilitys) =>
      console.log("abilitys == ", abilitys.ability_score.index, abilitys.bonus)
    );
    const age = raceData.age;
    // console.log("age == ", age);
    const alignmentInfo = raceData.alignment;
    // console.log("alignment == ", alignmentInfo);
    const index = raceData.index;
    // console.log("index ==", index);
    const languageDescription = raceData.language_desc;
    // console.log("language Description == ", languageDescription);
    const languages = raceData.languages;
    // console.log("languages == ", languages);
    languages.forEach((language) =>
      console.log("language == ", language.index)
    );
    const name = raceData.name;
    // console.log("name ==", name);
    const averageSize = raceData.size;
    // console.log("Size == ", averageSize);
    const sizeDescription = raceData.size_description;
    // console.log("size Description == ", sizeDescription);
    const speed = raceData.speed;
    // console.log("speed == ", speed);

    statData.innerHTML +=
      "<div>" +
      speed +
      " </div>" +
      "<div>" +
      sizeDescription +
      "</div>" +
      "<div>" +
      averageSize +
      "</div>" +
      "<div>" +
      name +
      "</div>" +
      "<div>" +
      languageDescription +
      "</div>" +
      "<div>" +
      alignmentInfo +
      "</div>" +
      "<div>" +
      age +
      "</div>";

    const startingProficiencies = raceData.starting_proficiencies;
    console.log("starting Proficiencies == ", startingProficiencies.length);
    startingProficiencies.forEach(
      (startingProficiency) =>
        (statData.innerHTML += "<div>" + startingProficiency.index + " </div>")
    );

    const subRaces = raceData.subraces;
    console.log("amount of sub Races == ", subRaces.length);
    subRaces.forEach(
      (subRace) => (statData.innerHTML += "<div>" + subRace.index + " </div>")
    );

    const traits = raceData.traits;
    traits.forEach(
      (trait) => (statData.innerHTML += "<div>" + trait.index + " </div>")
    );

    //////////////////////////////moment().format('YYYY/MM/DD')
    const traitsTotal = raceData.traits.length;
    console.log(" traits total == ", traitsTotal);
  }
  if (number === 1) {
    let raceId = "dwarf";
    console.log("number", number, raceId);
    const response = await fetch(`http://www.dnd5eapi.co/api/races/${raceId}`);
    const raceData = await response.json();

    //////////////////////////////////////
    ///////////////////////////////////////
    // console.log("race data", JSON.stringify(raceData, null, 2));
    const abilityBonus = raceData.ability_bonuses;
    // console.log("ability Bonus  == ", abilityBonus);
    abilityBonus.forEach((abilitys) =>
      console.log("abilitys == ", abilitys.ability_score.index, abilitys.bonus)
    );
    const age = raceData.age;
    console.log("age == ", age);
    const alignmentInfo = raceData.alignment;
    console.log("alignment == ", alignmentInfo);
    const index = raceData.index;
    console.log("index ==", index);
    const languageDescription = raceData.language_desc;
    console.log("language Description == ", languageDescription);
    const languages = raceData.languages;
    // console.log("languages == ", languages);
    languages.forEach((language) =>
      console.log("language == ", language.index)
    );
    const name = raceData.name;
    console.log("name ==", name);
    const averageSize = raceData.size;
    console.log("Size == ", averageSize);
    const sizeDescription = raceData.size_description;
    console.log("size Description == ", sizeDescription);
    const speed = raceData.speed;
    console.log("speed == ", speed);
    const startingProficiencies = raceData.starting_proficiencies;
    // console.log("starting Proficiencies == ", startingProficiencies);
    startingProficiencies.forEach((startingProficiency) =>
      console.log("starting Proficiency == ", startingProficiency.index)
    );
    const subRaces = raceData.subraces;
    // console.log("amount of sub Races == ", subRaces);
    subRaces.forEach((subRace) => console.log("sub Race == ", subRace.index));
    const traitsTotal = raceData.traits.length;
    console.log(" traits total == ", traitsTotal);
    const traits = raceData.traits;
    // console.log("traits == ", traits);
    traits.forEach((trait) => console.log("trait == ", trait.index));
    console.log(
      "//=============================================================="
    );
  }
  if (number === 2) {
    let raceId = "elf";
    console.log("number", number, raceId);
    const response = await fetch(`http://www.dnd5eapi.co/api/races/${raceId}`);
    const raceData = await response.json();

    //////////////////////////////////////
    ///////////////////////////////////////
    // console.log("race data", JSON.stringify(raceData, null, 2));
    const abilityBonus = raceData.ability_bonuses;
    // console.log("ability Bonus  == ", abilityBonus);
    abilityBonus.forEach((abilitys) =>
      console.log("abilitys == ", abilitys.ability_score.index, abilitys.bonus)
    );
    const age = raceData.age;
    console.log("age == ", age);
    const alignmentInfo = raceData.alignment;
    console.log("alignment == ", alignmentInfo);
    const index = raceData.index;
    console.log("index ==", index);
    const languageDescription = raceData.language_desc;
    console.log("language Description == ", languageDescription);
    const languages = raceData.languages;
    // console.log("languages == ", languages);
    languages.forEach((language) =>
      console.log("language == ", language.index)
    );
    const name = raceData.name;
    console.log("name ==", name);
    const averageSize = raceData.size;
    console.log("Size == ", averageSize);
    const sizeDescription = raceData.size_description;
    console.log("size Description == ", sizeDescription);
    const speed = raceData.speed;
    console.log("speed == ", speed);
    const startingProficiencies = raceData.starting_proficiencies;
    // console.log("starting Proficiencies == ", startingProficiencies);
    startingProficiencies.forEach((startingProficiency) =>
      console.log("starting Proficiency == ", startingProficiency.index)
    );
    const subRaces = raceData.subraces;
    // console.log("amount of sub Races == ", subRaces);
    subRaces.forEach((subRace) => console.log("sub Race == ", subRace.index));
    const traitsTotal = raceData.traits.length;
    console.log(" traits total == ", traitsTotal);
    const traits = raceData.traits;
    // console.log("traits == ", traits);
    traits.forEach((trait) => console.log("trait == ", trait.index));
    console.log(
      "//=============================================================="
    );
  }
  if (number === 3) {
    let raceId = "gnome";
    console.log("number", number, raceId);
    const response = await fetch(`http://www.dnd5eapi.co/api/races/${raceId}`);
    const raceData = await response.json();

    //////////////////////////////////////
    ///////////////////////////////////////
    // console.log("race data", JSON.stringify(raceData, null, 2));
    const abilityBonus = raceData.ability_bonuses;
    // console.log("ability Bonus  == ", abilityBonus);
    abilityBonus.forEach((abilitys) =>
      console.log("abilitys == ", abilitys.ability_score.index, abilitys.bonus)
    );
    const age = raceData.age;
    console.log("age == ", age);
    const alignmentInfo = raceData.alignment;
    console.log("alignment == ", alignmentInfo);
    const index = raceData.index;
    console.log("index ==", index);
    const languageDescription = raceData.language_desc;
    console.log("language Description == ", languageDescription);
    const languages = raceData.languages;
    // console.log("languages == ", languages);
    languages.forEach((language) =>
      console.log("language == ", language.index)
    );
    const name = raceData.name;
    console.log("name ==", name);
    const averageSize = raceData.size;
    console.log("Size == ", averageSize);
    const sizeDescription = raceData.size_description;
    console.log("size Description == ", sizeDescription);
    const speed = raceData.speed;
    console.log("speed == ", speed);
    const startingProficiencies = raceData.starting_proficiencies;
    // console.log("starting Proficiencies == ", startingProficiencies);
    startingProficiencies.forEach((startingProficiency) =>
      console.log("starting Proficiency == ", startingProficiency.index)
    );
    const subRaces = raceData.subraces;
    // console.log("amount of sub Races == ", subRaces);
    subRaces.forEach((subRace) => console.log("sub Race == ", subRace.index));
    const traitsTotal = raceData.traits.length;
    console.log(" traits total == ", traitsTotal);
    const traits = raceData.traits;
    // console.log("traits == ", traits);
    traits.forEach((trait) => console.log("trait == ", trait.index));
    console.log(
      "//=============================================================="
    );
  }
  if (number === 4) {
    let raceId = "half-elf";
    console.log("number", number, raceId);
    const response = await fetch(`http://www.dnd5eapi.co/api/races/${raceId}`);
    const raceData = await response.json();

    //////////////////////////////////////
    ///////////////////////////////////////
    // console.log("race data", JSON.stringify(raceData, null, 2));
    const abilityBonus = raceData.ability_bonuses;
    // console.log("ability Bonus  == ", abilityBonus);
    abilityBonus.forEach((abilitys) =>
      console.log("abilitys == ", abilitys.ability_score.index, abilitys.bonus)
    );
    const age = raceData.age;
    console.log("age == ", age);
    const alignmentInfo = raceData.alignment;
    console.log("alignment == ", alignmentInfo);
    const index = raceData.index;
    console.log("index ==", index);
    const languageDescription = raceData.language_desc;
    console.log("language Description == ", languageDescription);
    const languages = raceData.languages;
    // console.log("languages == ", languages);
    languages.forEach((language) =>
      console.log("language == ", language.index)
    );
    const name = raceData.name;
    console.log("name ==", name);
    const averageSize = raceData.size;
    console.log("Size == ", averageSize);
    const sizeDescription = raceData.size_description;
    console.log("size Description == ", sizeDescription);
    const speed = raceData.speed;
    console.log("speed == ", speed);
    const startingProficiencies = raceData.starting_proficiencies;
    // console.log("starting Proficiencies == ", startingProficiencies);
    startingProficiencies.forEach((startingProficiency) =>
      console.log("starting Proficiency == ", startingProficiency.index)
    );
    const subRaces = raceData.subraces;
    // console.log("amount of sub Races == ", subRaces);
    subRaces.forEach((subRace) => console.log("sub Race == ", subRace.index));
    const traitsTotal = raceData.traits.length;
    console.log(" traits total == ", traitsTotal);
    const traits = raceData.traits;
    // console.log("traits == ", traits);
    traits.forEach((trait) => console.log("trait == ", trait.index));
    console.log(
      "//=============================================================="
    );
  }
  if (number === 5) {
    let raceId = "half-orc";
    console.log("number", number, raceId);
    const response = await fetch(`http://www.dnd5eapi.co/api/races/${raceId}`);
    const raceData = await response.json();

    //////////////////////////////////////
    ///////////////////////////////////////
    // console.log("race data", JSON.stringify(raceData, null, 2));
    const abilityBonus = raceData.ability_bonuses;
    // console.log("ability Bonus  == ", abilityBonus);
    abilityBonus.forEach((abilitys) =>
      console.log("abilitys == ", abilitys.ability_score.index, abilitys.bonus)
    );
    const age = raceData.age;
    console.log("age == ", age);
    const alignmentInfo = raceData.alignment;
    console.log("alignment == ", alignmentInfo);
    const index = raceData.index;
    console.log("index ==", index);
    const languageDescription = raceData.language_desc;
    console.log("language Description == ", languageDescription);
    const languages = raceData.languages;
    // console.log("languages == ", languages);
    languages.forEach((language) =>
      console.log("language == ", language.index)
    );
    const name = raceData.name;
    console.log("name ==", name);
    const averageSize = raceData.size;
    console.log("Size == ", averageSize);
    const sizeDescription = raceData.size_description;
    console.log("size Description == ", sizeDescription);
    const speed = raceData.speed;
    console.log("speed == ", speed);
    const startingProficiencies = raceData.starting_proficiencies;
    // console.log("starting Proficiencies == ", startingProficiencies);
    startingProficiencies.forEach((startingProficiency) =>
      console.log("starting Proficiency == ", startingProficiency.index)
    );
    const subRaces = raceData.subraces;
    // console.log("amount of sub Races == ", subRaces);
    subRaces.forEach((subRace) => console.log("sub Race == ", subRace.index));
    const traitsTotal = raceData.traits.length;
    console.log(" traits total == ", traitsTotal);
    const traits = raceData.traits;
    // console.log("traits == ", traits);
    traits.forEach((trait) => console.log("trait == ", trait.index));
    console.log(
      "//=============================================================="
    );
  }
  if (number === 6) {
    let raceId = "halfling";
    console.log("number", number, raceId);
    const response = await fetch(`http://www.dnd5eapi.co/api/races/${raceId}`);
    const raceData = await response.json();

    //////////////////////////////////////
    ///////////////////////////////////////
    // console.log("race data", JSON.stringify(raceData, null, 2));
    const abilityBonus = raceData.ability_bonuses;
    // console.log("ability Bonus  == ", abilityBonus);
    abilityBonus.forEach((abilitys) =>
      console.log("abilitys == ", abilitys.ability_score.index, abilitys.bonus)
    );
    const age = raceData.age;
    console.log("age == ", age);
    const alignmentInfo = raceData.alignment;
    console.log("alignment == ", alignmentInfo);
    const index = raceData.index;
    console.log("index ==", index);
    const languageDescription = raceData.language_desc;
    console.log("language Description == ", languageDescription);
    const languages = raceData.languages;
    // console.log("languages == ", languages);
    languages.forEach((language) =>
      console.log("language == ", language.index)
    );
    const name = raceData.name;
    console.log("name ==", name);
    const averageSize = raceData.size;
    console.log("Size == ", averageSize);
    const sizeDescription = raceData.size_description;
    console.log("size Description == ", sizeDescription);
    const speed = raceData.speed;
    console.log("speed == ", speed);
    const startingProficiencies = raceData.starting_proficiencies;
    // console.log("starting Proficiencies == ", startingProficiencies);
    startingProficiencies.forEach((startingProficiency) =>
      console.log("starting Proficiency == ", startingProficiency.index)
    );
    const subRaces = raceData.subraces;
    // console.log("amount of sub Races == ", subRaces);
    subRaces.forEach((subRace) => console.log("sub Race == ", subRace.index));
    const traitsTotal = raceData.traits.length;
    console.log(" traits total == ", traitsTotal);
    const traits = raceData.traits;
    // console.log("traits == ", traits);
    traits.forEach((trait) => console.log("trait == ", trait.index));
    console.log(
      "//=============================================================="
    );
  }
  if (number === 7) {
    let raceId = "human";
    console.log("number", number, raceId);
    const response = await fetch(`http://www.dnd5eapi.co/api/races/${raceId}`);
    const raceData = await response.json();

    //////////////////////////////////////
    ///////////////////////////////////////
    // console.log("race data", JSON.stringify(raceData, null, 2));
    const abilityBonus = raceData.ability_bonuses;
    // console.log("ability Bonus  == ", abilityBonus);
    abilityBonus.forEach((abilitys) =>
      console.log("abilitys == ", abilitys.ability_score.index, abilitys.bonus)
    );
    const age = raceData.age;
    console.log("age == ", age);
    const alignmentInfo = raceData.alignment;
    console.log("alignment == ", alignmentInfo);
    const index = raceData.index;
    console.log("index ==", index);
    const languageDescription = raceData.language_desc;
    console.log("language Description == ", languageDescription);
    const languages = raceData.languages;
    // console.log("languages == ", languages);
    languages.forEach((language) =>
      console.log("language == ", language.index)
    );
    const name = raceData.name;
    console.log("name ==", name);
    const averageSize = raceData.size;
    console.log("Size == ", averageSize);
    const sizeDescription = raceData.size_description;
    console.log("size Description == ", sizeDescription);
    const speed = raceData.speed;
    console.log("speed == ", speed);
    const startingProficiencies = raceData.starting_proficiencies;
    // console.log("starting Proficiencies == ", startingProficiencies);
    startingProficiencies.forEach((startingProficiency) =>
      console.log("starting Proficiency == ", startingProficiency.index)
    );
    const subRaces = raceData.subraces;
    // console.log("amount of sub Races == ", subRaces);
    subRaces.forEach((subRace) => console.log("sub Race == ", subRace.index));
    const traitsTotal = raceData.traits.length;
    console.log(" traits total == ", traitsTotal);
    const traits = raceData.traits;
    // console.log("traits == ", traits);
    traits.forEach((trait) => console.log("trait == ", trait.index));
    console.log(
      "//=============================================================="
    );
  }
  if (number === 8) {
    let raceId = "tiefling";
    console.log("number", number, raceId);
    const response = await fetch(`http://www.dnd5eapi.co/api/races/${raceId}`);
    const raceData = await response.json();
    //////////////////////////////////////
    ///////////////////////////////////////
    // console.log("race data", JSON.stringify(raceData, null, 2));
    const abilityBonus = raceData.ability_bonuses;
    // console.log("ability Bonus  == ", abilityBonus);
    abilityBonus.forEach((abilitys) =>
      console.log("abilitys == ", abilitys.ability_score.index, abilitys.bonus)
    );
    const age = raceData.age;
    console.log("age == ", age);
    const alignmentInfo = raceData.alignment;
    console.log("alignment == ", alignmentInfo);
    const index = raceData.index;
    console.log("index ==", index);
    const languageDescription = raceData.language_desc;
    console.log("language Description == ", languageDescription);
    const languages = raceData.languages;
    // console.log("languages == ", languages);
    languages.forEach((language) =>
      console.log("language == ", language.index)
    );
    const name = raceData.name;
    console.log("name ==", name);
    const averageSize = raceData.size;
    console.log("Size == ", averageSize);
    const sizeDescription = raceData.size_description;
    console.log("size Description == ", sizeDescription);
    const speed = raceData.speed;
    console.log("speed == ", speed);
    const startingProficiencies = raceData.starting_proficiencies;
    // console.log("starting Proficiencies == ", startingProficiencies);
    startingProficiencies.forEach((startingProficiency) =>
      console.log("starting Proficiency == ", startingProficiency.index)
    );
    const subRaces = raceData.subraces;
    // console.log("amount of sub Races == ", subRaces);
    subRaces.forEach((subRace) => console.log("sub Race == ", subRace.index));
    const traitsTotal = raceData.traits.length;
    console.log(" traits total == ", traitsTotal);
    const traits = raceData.traits;
    // console.log("traits == ", traits);
    traits.forEach((trait) => console.log("trait == ", trait.index));
    console.log(
      "//=============================================================="
    );
  }
}
