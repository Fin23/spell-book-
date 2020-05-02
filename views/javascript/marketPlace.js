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
        "<button class='pickedEquipment'>" + equip + "</button>";
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
          //   console.log(response.desc[0]);
          //   console.log(response.desc[1]);
          //   console.log(response.desc[2]);

          let price = response.cost.quantity + response.cost.unit;
          let weight = response.weight + "lbs";
          //   let description1 = response.desc[0];
          //   let description2 = response.desc[1];
          //   let description3 = response.desc[2];
          //   document.getElementById("fetchData").innerHTML = description1;
          //   document.getElementById("fetchData3").innerHTML = description2;
          //   document.getElementById("fetchData4").innerHTML = description3;

          document.getElementById("fetchData2").innerHTML = price;
          document.getElementById("fetchData5").innerHTML = weight;
        });
    });
    //     .then((response) => {});
    // });
  })
  .catch((error) => {
    console.log("error!");
    console.error(error);
  });
