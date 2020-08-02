// {
//     "_id": "5e10e4790b1bb138c5b3b661",
//     "index": "dwarf",
//     "name": "Dwarf",
//     "speed": 30,
//     "ability_bonuses": [
//       {
//         "name": "CON",
//         "url": "/api/ability-scores/con",
//         "bonus": 2
//       }
//     ],
//     "alignment":
// var instance = M.FormSelect.getInstance(elem);
// document.addEventListener("DOMContentLoaded", function () {
//   var elems = document.querySelectorAll("select");
//   var instances = M.FormSelect.init(elems, options);
// });

fetch(`http://www.dnd5eapi.co/api/races/`)
  .then((response) => {
    // console.log("======= response 2 =========");
    console.log(response);

    return response.json();
  })
  .then((response) => {
    var raceOutPut = "";
    race = response.results;

    for (var i = 0; i < race.length; i++) {
      //   console.log(equipment[i].index);
      //   console.log(response.results[i]);
      var races = race[i].index;

      raceOutPut +=
        "<button class='pickedEquipment' data-dismiss='modal'>" +
        races +
        "</button>";
    }
    document.getElementById("equipmentList").innerHTML = raceOutPut;
    $(".pickedEquipment").click(function () {
      var cost = $(this).text();
      console.log(cost);
      var equipmentInput = document.getElementById("equipmentInput");
      equipmentInput.value = cost;
      let equipCost = cost;

      fetch(`http://www.dnd5eapi.co/api/equipment/${equipCost}`)
        .then((response) => {
          console.log("======= response 2 =========");
          //   console.log(response);
          return response.json();
        })
        .then((response) => {
          console.log(response);
          console.log(response.cost.quantity, response.cost.unit);
          console.log("pound", response.weight);
          //   console.log(response.cost.unit);

          //   console.log(response.desc[1]);
          //   console.log(response.desc[2]);
          let index = response.index;
          let price = response.cost.quantity + response.cost.unit;
          let weight = response.weight + " - lbs";

          document.getElementById("itemName").innerHTML = index;
          document.getElementById("itemPrice").innerHTML = price;
          document.getElementById("itemWeight").innerHTML = weight;

          if (response) {
            // console.log(response.desc[0]);
            // console.log(response.desc[1]);
            // console.log(response.desc[2]);

            let description1 = response.desc[0];
            let description2 = response.desc[1];
            let description3 = response.desc[2];

            document.getElementById("description1").innerHTML =
              index + " -<br/> " + description1;
            document.getElementById("description2").innerHTML =
              index + " -<br/> " + description2;
            document.getElementById("description3").innerHTML =
              index + " -<br/> " + description3;
          } else if ((response.desc = undefined)) {
            document.getElementById("description1").innerHTML =
              " no description";
            console.log(response.desc[0]);
          }
        });
    });
    //     .then((response) => {});
    // });
  })
  .catch((error) => {
    console.log("error!");
    console.error(error);
  });
