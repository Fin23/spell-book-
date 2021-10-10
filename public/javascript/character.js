// input = "dwarf";

// let raceInput = document.getElementById("raceInput");

document
  .querySelector("form.pure-form")
  .addEventListener("submit", async function (e) {
    //prevent the normal submission of the form
    e.preventDefault();

    // console.log(raceInput.value);
    // await getRaces(raceInput.value);
    await getRaces();
  });

// getRaces(raceInput);

async function getRaces() {
  // const response = await fetch(`http://www.dnd5eapi.co/api/races/${input}`);

  const responseAll = await fetch(`http://www.dnd5eapi.co/api/races/`);

  const allResponses = await responseAll.json();
  const allRaces = allResponses.results;
  // const race = await response.json();

  // console.log(" races = ", race);
  console.log("all races ", allRaces.length);
  let allRacesHtml = "";

  for (let i = 0; i < allRaces.length; i++) {
    allRacesHtml +=
      "<button id=" +
      "'" +
      i +
      "'" +
      " onclick='pickRace(" +
      i +
      ")' class='pickedRace' data-dismiss='modal'>" +
      allRaces[i].index +
      "</button>";
    // console.log("individual races =", allRaces[i].index);
    // console.log("list should = ", allRacesHtml);

    document.getElementById("raceList").innerHTML = allRacesHtml;

    // return allRaces[i];
  }
}

async function pickRace(number) {
  // let raceId;
  if (number === 0) {
    let raceId = "dragonborn";
    console.log("number", number, raceId);
    const response = await fetch(`http://www.dnd5eapi.co/api/races/${raceId}`);
    const raceData = await response.json();
    console.log("race data ", raceData);
    const index = raceData.index;
    const name = raceData.name;
    const speed = raceData.speed;
    // const abilityBonusesAttribute =
    //   raceData.ability_bonuses.ability_score.index;
    // const abilityBonus = raceData.ability_bonuses.bonus;
    // const numberOfChoices = raceData.ability_bonus_options.choose;
    // const abilityBonusOptions = raceData.ability_bonus_options.from;
    const alignmentInfo = raceData.alignment;
    const ageInfo = raceData.age;
    const averageSize = raceData.size;
    const sizeDescription = raceData.size_description;
    // const startingProficiencies = raceData.starting_proficiencies;
    // const numberOfProficienciesToPick =
    //   raceData.starting_proficiencies_options.choose;
    // const startingProficienciesOptions =
    //   raceData.starting_proficiencies_options.from;
    // const startingKnownLanguages = raceData.languages;
    // const extraNumberOfLanguages = raceData.language_options.choose;
    // const extraLanguagesOptions = raceData.language_options.from;
    const languageDescription = raceData.language_desc;
    // const traits = raceData.traits;
    // const subRaces = raceData.subraces;

    // // console.log("race data", JSON.stringify(raceData, null, 2));
    console.log("index", index);
    console.log("name", name);
    console.log("speed", speed);
    // console.log("abilityBonusesAttribute", abilityBonusesAttribute);
    // console.log("abilityBonus", abilityBonus);
    // console.log("numberOfChoices", numberOfChoices);
    // console.log("abilityBonusOptions", abilityBonusOptions);
    console.log("alignmentInfo", alignmentInfo);
    console.log("ageInfo", ageInfo);
    console.log("averageSize", averageSize);
    console.log("sizeDescription", sizeDescription);
    // console.log("startingProficiencies", startingProficiencies);
    // console.log("numberOfProficienciesToPick", numberOfProficienciesToPick);
    // console.log("startingProficienciesOptions", startingProficienciesOptions);
    // console.log("startingKnownLanguages", startingKnownLanguages);
    // console.log("extraNumberOfLanguages", extraNumberOfLanguages);
    // console.log("extraLanguagesOptions", extraLanguagesOptions);
    console.log("languageDescription", languageDescription);
    // console.log("traits", traits);
    // console.log("subRaces", subRaces);
  }
  if (number === 1) {
    let raceId = "dwarf";
    console.log("number", number, raceId);
    const response = await fetch(`http://www.dnd5eapi.co/api/races/${raceId}`);
    const raceData = await response.json();
    console.log("race data", JSON.stringify(raceData, null, 2));
    const index = raceData.index;
    const name = raceData.name;
    const speed = raceData.speed;
    // const abilityBonusesAttribute =
    //   raceData.ability_bonuses.ability_score.index;
    // const abilityBonus = raceData.ability_bonuses.bonus;
    // const numberOfChoices = raceData.ability_bonus_options.choose;
    // const abilityBonusOptions = raceData.ability_bonus_options.from;
    const alignmentInfo = raceData.alignment;
    const ageInfo = raceData.age;
    const averageSize = raceData.size;
    const sizeDescription = raceData.size_description;
    // const startingProficiencies = raceData.starting_proficiencies;
    // const numberOfProficienciesToPick =
    //   raceData.starting_proficiencies_options.choose;
    // const startingProficienciesOptions =
    //   raceData.starting_proficiencies_options.from;
    // const startingKnownLanguages = raceData.languages;
    // const extraNumberOfLanguages = raceData.language_options.choose;
    // const extraLanguagesOptions = raceData.language_options.from;
    const languageDescription = raceData.language_desc;
    // const traits = raceData.traits;
    // const subRaces = raceData.subraces;

    // // console.log("race data", JSON.stringify(raceData, null, 2));
    console.log("index", index);
    console.log("name", name);
    console.log("speed", speed);
    // console.log("abilityBonusesAttribute", abilityBonusesAttribute);
    // console.log("abilityBonus", abilityBonus);
    // console.log("numberOfChoices", numberOfChoices);
    // console.log("abilityBonusOptions", abilityBonusOptions);
    console.log("alignmentInfo", alignmentInfo);
    console.log("ageInfo", ageInfo);
    console.log("averageSize", averageSize);
    console.log("sizeDescription", sizeDescription);
    // console.log("startingProficiencies", startingProficiencies);
    // console.log("numberOfProficienciesToPick", numberOfProficienciesToPick);
    // console.log("startingProficienciesOptions", startingProficienciesOptions);
    // console.log("startingKnownLanguages", startingKnownLanguages);
    // console.log("extraNumberOfLanguages", extraNumberOfLanguages);
    // console.log("extraLanguagesOptions", extraLanguagesOptions);
    console.log("languageDescription", languageDescription);
    // console.log("traits", traits);
    // console.log("subRaces", subRaces);
  }
  if (number === 2) {
    let raceId = "elf";
    console.log("number", number, raceId);
    const response = await fetch(`http://www.dnd5eapi.co/api/races/${raceId}`);
    const raceData = await response.json();

    // console.log("race data", JSON.stringify(raceData, null, 2));
    const index = raceData.index;
    const name = raceData.name;
    const speed = raceData.speed;
    // const abilityBonusesAttribute =
    //   raceData.ability_bonuses.ability_score.index;
    // const abilityBonus = raceData.ability_bonuses.bonus;
    // const numberOfChoices = raceData.ability_bonus_options.choose;
    // const abilityBonusOptions = raceData.ability_bonus_options.from;
    const alignmentInfo = raceData.alignment;
    const ageInfo = raceData.age;
    const averageSize = raceData.size;
    const sizeDescription = raceData.size_description;
    // const startingProficiencies = raceData.starting_proficiencies;
    // const numberOfProficienciesToPick =
    //   raceData.starting_proficiencies_options.choose;
    // const startingProficienciesOptions =
    //   raceData.starting_proficiencies_options.from;
    // const startingKnownLanguages = raceData.languages;
    // const extraNumberOfLanguages = raceData.language_options.choose;
    // const extraLanguagesOptions = raceData.language_options.from;
    const languageDescription = raceData.language_desc;
    // const traits = raceData.traits;
    // const subRaces = raceData.subraces;

    // // console.log("race data", JSON.stringify(raceData, null, 2));
    console.log("index", index);
    console.log("name", name);
    console.log("speed", speed);
    // console.log("abilityBonusesAttribute", abilityBonusesAttribute);
    // console.log("abilityBonus", abilityBonus);
    // console.log("numberOfChoices", numberOfChoices);
    // console.log("abilityBonusOptions", abilityBonusOptions);
    console.log("alignmentInfo", alignmentInfo);
    console.log("ageInfo", ageInfo);
    console.log("averageSize", averageSize);
    console.log("sizeDescription", sizeDescription);
    // console.log("startingProficiencies", startingProficiencies);
    // console.log("numberOfProficienciesToPick", numberOfProficienciesToPick);
    // console.log("startingProficienciesOptions", startingProficienciesOptions);
    // console.log("startingKnownLanguages", startingKnownLanguages);
    // console.log("extraNumberOfLanguages", extraNumberOfLanguages);
    // console.log("extraLanguagesOptions", extraLanguagesOptions);
    console.log("languageDescription", languageDescription);
    // console.log("traits", traits);
    // console.log("subRaces", subRaces);
  }
  if (number === 3) {
    let raceId = "gnome";
    console.log("number", number, raceId);
    const response = await fetch(`http://www.dnd5eapi.co/api/races/${raceId}`);
    const raceData = await response.json();

    // console.log("race data", JSON.stringify(raceData, null, 2));
    const index = raceData.index;
    const name = raceData.name;
    const speed = raceData.speed;
    // const abilityBonusesAttribute =
    //   raceData.ability_bonuses.ability_score.index;
    // const abilityBonus = raceData.ability_bonuses.bonus;
    // const numberOfChoices = raceData.ability_bonus_options.choose;
    // const abilityBonusOptions = raceData.ability_bonus_options.from;
    const alignmentInfo = raceData.alignment;
    const ageInfo = raceData.age;
    const averageSize = raceData.size;
    const sizeDescription = raceData.size_description;
    // const startingProficiencies = raceData.starting_proficiencies;
    // const numberOfProficienciesToPick =
    //   raceData.starting_proficiencies_options.choose;
    // const startingProficienciesOptions =
    //   raceData.starting_proficiencies_options.from;
    // const startingKnownLanguages = raceData.languages;
    // const extraNumberOfLanguages = raceData.language_options.choose;
    // const extraLanguagesOptions = raceData.language_options.from;
    const languageDescription = raceData.language_desc;
    // const traits = raceData.traits;
    // const subRaces = raceData.subraces;

    // // console.log("race data", JSON.stringify(raceData, null, 2));
    console.log("index", index);
    console.log("name", name);
    console.log("speed", speed);
    // console.log("abilityBonusesAttribute", abilityBonusesAttribute);
    // console.log("abilityBonus", abilityBonus);
    // console.log("numberOfChoices", numberOfChoices);
    // console.log("abilityBonusOptions", abilityBonusOptions);
    console.log("alignmentInfo", alignmentInfo);
    console.log("ageInfo", ageInfo);
    console.log("averageSize", averageSize);
    console.log("sizeDescription", sizeDescription);
    // console.log("startingProficiencies", startingProficiencies);
    // console.log("numberOfProficienciesToPick", numberOfProficienciesToPick);
    // console.log("startingProficienciesOptions", startingProficienciesOptions);
    // console.log("startingKnownLanguages", startingKnownLanguages);
    // console.log("extraNumberOfLanguages", extraNumberOfLanguages);
    // console.log("extraLanguagesOptions", extraLanguagesOptions);
    console.log("languageDescription", languageDescription);
    // console.log("traits", traits);
    // console.log("subRaces", subRaces);
  }
  if (number === 4) {
    let raceId = "half-elf";
    console.log("number", number, raceId);
    const response = await fetch(`http://www.dnd5eapi.co/api/races/${raceId}`);
    const raceData = await response.json();

    // console.log("race data", JSON.stringify(raceData, null, 2));
    const index = raceData.index;
    const name = raceData.name;
    const speed = raceData.speed;
    // const abilityBonusesAttribute =
    //   raceData.ability_bonuses.ability_score.index;
    // const abilityBonus = raceData.ability_bonuses.bonus;
    // const numberOfChoices = raceData.ability_bonus_options.choose;
    // const abilityBonusOptions = raceData.ability_bonus_options.from;
    const alignmentInfo = raceData.alignment;
    const ageInfo = raceData.age;
    const averageSize = raceData.size;
    const sizeDescription = raceData.size_description;
    // const startingProficiencies = raceData.starting_proficiencies;
    // const numberOfProficienciesToPick =
    //   raceData.starting_proficiencies_options.choose;
    // const startingProficienciesOptions =
    //   raceData.starting_proficiencies_options.from;
    // const startingKnownLanguages = raceData.languages;
    // const extraNumberOfLanguages = raceData.language_options.choose;
    // const extraLanguagesOptions = raceData.language_options.from;
    const languageDescription = raceData.language_desc;
    // const traits = raceData.traits;
    // const subRaces = raceData.subraces;

    // // console.log("race data", JSON.stringify(raceData, null, 2));
    console.log("index", index);
    console.log("name", name);
    console.log("speed", speed);
    // console.log("abilityBonusesAttribute", abilityBonusesAttribute);
    // console.log("abilityBonus", abilityBonus);
    // console.log("numberOfChoices", numberOfChoices);
    // console.log("abilityBonusOptions", abilityBonusOptions);
    console.log("alignmentInfo", alignmentInfo);
    console.log("ageInfo", ageInfo);
    console.log("averageSize", averageSize);
    console.log("sizeDescription", sizeDescription);
    // console.log("startingProficiencies", startingProficiencies);
    // console.log("numberOfProficienciesToPick", numberOfProficienciesToPick);
    // console.log("startingProficienciesOptions", startingProficienciesOptions);
    // console.log("startingKnownLanguages", startingKnownLanguages);
    // console.log("extraNumberOfLanguages", extraNumberOfLanguages);
    // console.log("extraLanguagesOptions", extraLanguagesOptions);
    console.log("languageDescription", languageDescription);
    // console.log("traits", traits);
    // console.log("subRaces", subRaces);
  }
  if (number === 5) {
    let raceId = "half-orc";
    console.log("number", number, raceId);
    const response = await fetch(`http://www.dnd5eapi.co/api/races/${raceId}`);
    const raceData = await response.json();

    // console.log("race data", JSON.stringify(raceData, null, 2));
    const index = raceData.index;
    const name = raceData.name;
    const speed = raceData.speed;
    // const abilityBonusesAttribute =
    //   raceData.ability_bonuses.ability_score.index;
    // const abilityBonus = raceData.ability_bonuses.bonus;
    // const numberOfChoices = raceData.ability_bonus_options.choose;
    // const abilityBonusOptions = raceData.ability_bonus_options.from;
    const alignmentInfo = raceData.alignment;
    const ageInfo = raceData.age;
    const averageSize = raceData.size;
    const sizeDescription = raceData.size_description;
    // const startingProficiencies = raceData.starting_proficiencies;
    // const numberOfProficienciesToPick =
    //   raceData.starting_proficiencies_options.choose;
    // const startingProficienciesOptions =
    //   raceData.starting_proficiencies_options.from;
    // const startingKnownLanguages = raceData.languages;
    // const extraNumberOfLanguages = raceData.language_options.choose;
    // const extraLanguagesOptions = raceData.language_options.from;
    const languageDescription = raceData.language_desc;
    // const traits = raceData.traits;
    // const subRaces = raceData.subraces;

    // // console.log("race data", JSON.stringify(raceData, null, 2));
    console.log("index", index);
    console.log("name", name);
    console.log("speed", speed);
    // console.log("abilityBonusesAttribute", abilityBonusesAttribute);
    // console.log("abilityBonus", abilityBonus);
    // console.log("numberOfChoices", numberOfChoices);
    // console.log("abilityBonusOptions", abilityBonusOptions);
    console.log("alignmentInfo", alignmentInfo);
    console.log("ageInfo", ageInfo);
    console.log("averageSize", averageSize);
    console.log("sizeDescription", sizeDescription);
    // console.log("startingProficiencies", startingProficiencies);
    // console.log("numberOfProficienciesToPick", numberOfProficienciesToPick);
    // console.log("startingProficienciesOptions", startingProficienciesOptions);
    // console.log("startingKnownLanguages", startingKnownLanguages);
    // console.log("extraNumberOfLanguages", extraNumberOfLanguages);
    // console.log("extraLanguagesOptions", extraLanguagesOptions);
    console.log("languageDescription", languageDescription);
    // console.log("traits", traits);
    // console.log("subRaces", subRaces);
  }
  if (number === 6) {
    let raceId = "halfling";
    console.log("number", number, raceId);
    const response = await fetch(`http://www.dnd5eapi.co/api/races/${raceId}`);
    const raceData = await response.json();

    // console.log("race data", JSON.stringify(raceData, null, 2));
    const index = raceData.index;
    const name = raceData.name;
    const speed = raceData.speed;
    // const abilityBonusesAttribute =
    //   raceData.ability_bonuses.ability_score.index;
    // const abilityBonus = raceData.ability_bonuses.bonus;
    // const numberOfChoices = raceData.ability_bonus_options.choose;
    // const abilityBonusOptions = raceData.ability_bonus_options.from;
    const alignmentInfo = raceData.alignment;
    const ageInfo = raceData.age;
    const averageSize = raceData.size;
    const sizeDescription = raceData.size_description;
    // const startingProficiencies = raceData.starting_proficiencies;
    // const numberOfProficienciesToPick =
    //   raceData.starting_proficiencies_options.choose;
    // const startingProficienciesOptions =
    //   raceData.starting_proficiencies_options.from;
    // const startingKnownLanguages = raceData.languages;
    // const extraNumberOfLanguages = raceData.language_options.choose;
    // const extraLanguagesOptions = raceData.language_options.from;
    const languageDescription = raceData.language_desc;
    // const traits = raceData.traits;
    // const subRaces = raceData.subraces;

    // // console.log("race data", JSON.stringify(raceData, null, 2));
    console.log("index", index);
    console.log("name", name);
    console.log("speed", speed);
    // console.log("abilityBonusesAttribute", abilityBonusesAttribute);
    // console.log("abilityBonus", abilityBonus);
    // console.log("numberOfChoices", numberOfChoices);
    // console.log("abilityBonusOptions", abilityBonusOptions);
    console.log("alignmentInfo", alignmentInfo);
    console.log("ageInfo", ageInfo);
    console.log("averageSize", averageSize);
    console.log("sizeDescription", sizeDescription);
    // console.log("startingProficiencies", startingProficiencies);
    // console.log("numberOfProficienciesToPick", numberOfProficienciesToPick);
    // console.log("startingProficienciesOptions", startingProficienciesOptions);
    // console.log("startingKnownLanguages", startingKnownLanguages);
    // console.log("extraNumberOfLanguages", extraNumberOfLanguages);
    // console.log("extraLanguagesOptions", extraLanguagesOptions);
    console.log("languageDescription", languageDescription);
    // console.log("traits", traits);
    // console.log("subRaces", subRaces);
  }
  if (number === 7) {
    let raceId = "human";
    console.log("number", number, raceId);
    const response = await fetch(`http://www.dnd5eapi.co/api/races/${raceId}`);
    const raceData = await response.json();

    // console.log("race data", JSON.stringify(raceData, null, 2));
    const index = raceData.index;
    const name = raceData.name;
    const speed = raceData.speed;
    // const abilityBonusesAttribute =
    //   raceData.ability_bonuses.ability_score.index;
    // const abilityBonus = raceData.ability_bonuses.bonus;
    // const numberOfChoices = raceData.ability_bonus_options.choose;
    // const abilityBonusOptions = raceData.ability_bonus_options.from;
    const alignmentInfo = raceData.alignment;
    const ageInfo = raceData.age;
    const averageSize = raceData.size;
    const sizeDescription = raceData.size_description;
    // const startingProficiencies = raceData.starting_proficiencies;
    // const numberOfProficienciesToPick =
    //   raceData.starting_proficiencies_options.choose;
    // const startingProficienciesOptions =
    //   raceData.starting_proficiencies_options.from;
    // const startingKnownLanguages = raceData.languages;
    // const extraNumberOfLanguages = raceData.language_options.choose;
    // const extraLanguagesOptions = raceData.language_options.from;
    const languageDescription = raceData.language_desc;
    // const traits = raceData.traits;
    // const subRaces = raceData.subraces;

    // // console.log("race data", JSON.stringify(raceData, null, 2));
    console.log("index", index);
    console.log("name", name);
    console.log("speed", speed);
    // console.log("abilityBonusesAttribute", abilityBonusesAttribute);
    // console.log("abilityBonus", abilityBonus);
    // console.log("numberOfChoices", numberOfChoices);
    // console.log("abilityBonusOptions", abilityBonusOptions);
    console.log("alignmentInfo", alignmentInfo);
    console.log("ageInfo", ageInfo);
    console.log("averageSize", averageSize);
    console.log("sizeDescription", sizeDescription);
    // console.log("startingProficiencies", startingProficiencies);
    // console.log("numberOfProficienciesToPick", numberOfProficienciesToPick);
    // console.log("startingProficienciesOptions", startingProficienciesOptions);
    // console.log("startingKnownLanguages", startingKnownLanguages);
    // console.log("extraNumberOfLanguages", extraNumberOfLanguages);
    // console.log("extraLanguagesOptions", extraLanguagesOptions);
    console.log("languageDescription", languageDescription);
    // console.log("traits", traits);
    // console.log("subRaces", subRaces);
  }
  if (number === 8) {
    let raceId = "tiefling";
    console.log("number", number, raceId);
    const response = await fetch(`http://www.dnd5eapi.co/api/races/${raceId}`);
    const raceData = await response.json();
    // console.log('response', response)
    //     console.log("race data ", raceData);

    // console.log("race data", JSON.stringify(raceData, null, 2));
    const index = raceData.index;
    const name = raceData.name;
    const speed = raceData.speed;
    // const abilityBonusesAttribute =
    //   raceData.ability_bonuses.ability_score.index;
    // const abilityBonus = raceData.ability_bonuses.bonus;
    // const numberOfChoices = raceData.ability_bonus_options.choose;
    // const abilityBonusOptions = raceData.ability_bonus_options.from;
    const alignmentInfo = raceData.alignment;
    const ageInfo = raceData.age;
    const averageSize = raceData.size;
    const sizeDescription = raceData.size_description;
    // const startingProficiencies = raceData.starting_proficiencies;
    // const numberOfProficienciesToPick =
    //   raceData.starting_proficiencies_options.choose;
    // const startingProficienciesOptions =
    //   raceData.starting_proficiencies_options.from;
    // const startingKnownLanguages = raceData.languages;
    // const extraNumberOfLanguages = raceData.language_options.choose;
    // const extraLanguagesOptions = raceData.language_options.from;
    const languageDescription = raceData.language_desc;
    // const traits = raceData.traits;
    // const subRaces = raceData.subraces;

    // // console.log("race data", JSON.stringify(raceData, null, 2));
    console.log("index", index);
    console.log("name", name);
    console.log("speed", speed);
    // console.log("abilityBonusesAttribute", abilityBonusesAttribute);
    // console.log("abilityBonus", abilityBonus);
    // console.log("numberOfChoices", numberOfChoices);
    // console.log("abilityBonusOptions", abilityBonusOptions);
    console.log("alignmentInfo", alignmentInfo);
    console.log("ageInfo", ageInfo);
    console.log("averageSize", averageSize);
    console.log("sizeDescription", sizeDescription);
    // console.log("startingProficiencies", startingProficiencies);
    // console.log("numberOfProficienciesToPick", numberOfProficienciesToPick);
    // console.log("startingProficienciesOptions", startingProficienciesOptions);
    // console.log("startingKnownLanguages", startingKnownLanguages);
    // console.log("extraNumberOfLanguages", extraNumberOfLanguages);
    // console.log("extraLanguagesOptions", extraLanguagesOptions);
    console.log("languageDescription", languageDescription);
    // console.log("traits", traits);
    // console.log("subRaces", subRaces);
  }
}
