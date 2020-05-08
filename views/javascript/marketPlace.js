fetch(`http://www.dnd5eapi.co/api/equipment/`)
  .then((response) => {
    // console.log("======= response 2 =========");
    // console.log(response);

    return response.json();
  })
  .then((response) => {
    var equipmentOutPut = "";
    equipment = response.results;

    for (var i = 0; i < equipment.length; i++) {
      //   console.log(equipment[i].index);
      //   console.log(response.results[i]);
      var equip = equipment[i].index;

      equipmentOutPut +=
        "<button class='pickedEquipment' data-dismiss='modal'>" +
        equip +
        "</button>";
    }
    document.getElementById("equipmentList").innerHTML = equipmentOutPut;
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
              index + " - " + description1;
            document.getElementById("description2").innerHTML =
              index + " - " + description2;
            document.getElementById("description3").innerHTML =
              index + " - " + description3;
          } else if ((response.desc = undefined)) {
            description1 = "no description";
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
