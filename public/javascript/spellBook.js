document.getElementById("spellInput").addEventListener("input", function () {
  //  document.getElementById("spellInput");

  // event.preventDefault();
  this.value = this.value.replace(" ", "-");
  console.log("spell name: ", this.value);

  let spells = this.value;

  console.log("========= fetch spell input ============");
  fetch(`http://www.dnd5eapi.co/api/spells/${spells}`)
    .then((response) => {
      console.log("======= response =========");
      console.log(response);
      return response.json();
    })
    .then((response) => {
      let IndexJ = response.index;
      // let NameJ = response.name;
      // let PageJ = response.page;
      let LevelJ = response.level;
      let MaterialJ = response.material;
      let CastingTimeJ = response.casting_time;
      let DurationJ = response.duration;
      let ConcentrationJ = response.concentration;
      let RangeJ = response.range;
      let DescriptionJ = response.desc;
      let HigherLevelJ = response.higher_level;
      console.log(response);
      document.getElementById("fetchData").innerHTML = IndexJ;
      // document.getElementById("fetchData3").innerHTML = PageJ;

      // document.getElementById("fetchData4").innerHTML = NameJ;
      document.getElementById("fetchData5").innerHTML = LevelJ;
      document.getElementById("fetchData6").innerHTML = MaterialJ;
      document.getElementById("fetchData7").innerHTML = CastingTimeJ;
      document.getElementById("fetchData8").innerHTML = DurationJ;
      document.getElementById("fetchData9").innerHTML = ConcentrationJ;
      document.getElementById("fetchData10").innerHTML = RangeJ;
      document.getElementById("fetchData11").innerHTML = DescriptionJ;
      document.getElementById("fetchData12").innerHTML = HigherLevelJ;
    });
});

fetch(`http://www.dnd5eapi.co/api/spells/`)
  .then((response) => {
    // console.log("======= response 2 =========");
    // console.log(response);
    return response.json();
  })
  .then((response) => {
    spells = response.results;

    // console.log(spells);
    var spellOutPut = "";
    for (var i = 0; i < spells.length; i++) {
      // console.log(spells[i].page);
      // console.log(spells[i]);
      spellOutPut +=
        "<button class='pickedSpell' data-dismiss='modal'>" +
        spells[i].index +
        "</button>";
    }

    document.getElementById("spellList").innerHTML = spellOutPut;

    $(".pickedSpell").click(function () {
      var id = $(this).text();
      // console.log(id);
      var spellInput = document.getElementById("spellInput");

      spellInput.value = id;

      let spells = id;

      console.log("========= fetch spell input ============");
      fetch(`http://www.dnd5eapi.co/api/spells/${spells}`)
        .then((response) => {
          // console.log("======= response =========");
          console.log(response);
          return response.json();
        })
        .then((response) => {
          let IndexJ = response.index;
          // let NameJ = response.name;
          // let PageJ = response.page;
          let LevelJ = response.level;
          let MaterialJ = response.material;
          let CastingTimeJ = response.casting_time;
          let DurationJ = response.duration;
          let ConcentrationJ = response.concentration;
          let RangeJ = response.range;
          let DescriptionJ = response.desc;
          let HigherLevelJ = response.higher_level;
          // console.log(response);
          document.getElementById("fetchData").innerHTML = IndexJ;
          // document.getElementById("fetchData3").innerHTML = PageJ;

          // document.getElementById("fetchData4").innerHTML = NameJ;
          document.getElementById("fetchData5").innerHTML = LevelJ;
          document.getElementById("fetchData6").innerHTML = MaterialJ;
          document.getElementById("fetchData7").innerHTML = CastingTimeJ;
          document.getElementById("fetchData8").innerHTML = DurationJ;
          document.getElementById("fetchData9").innerHTML = ConcentrationJ;
          document.getElementById("fetchData10").innerHTML = RangeJ;
          document.getElementById("fetchData11").innerHTML = DescriptionJ;
          document.getElementById("fetchData12").innerHTML = HigherLevelJ;
        });

      // console.log("Text: " + $(".pickedSpell").text());
    });
  })
  .catch((error) => {
    console.log("error!");
    console.error(error);
  });
