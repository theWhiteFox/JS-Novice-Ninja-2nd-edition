(function() {
  const name = "Iron Man";
  const realName = "Tony Stark";

  const ironMan = {
    name,
    realName,
    ["catch" + "Phrase"]: "Up and atom!",
    action() {
      return "Shooting rockets";
    }
  };

  ironMan.city = "NYC";

  ironMan["city"] = "LA";

  console.log(delete ironMan.city);

  console.log(
    `${ironMan.name}: ${ironMan.realName} ${
      ironMan.catchPhrase
    } ${ironMan.action()}`
  );
  for (const key in ironMan) {
    console.log(`${key}: ${ironMan[key]}`);
  }
  for (const key of Object.keys(ironMan)) {
    console.log(key);
  }
  for (const key of Object.keys(ironMan)) {
    console.log(key);
  }
  for (const value of Object.values(ironMan)) {
    console.log(value);
  }

  const starks = {
    Bran: { "Who is the three eyed raven?": "Brandon Stark" },
    Rob: { "Who was the eldest of Ned Stark's children?": "Robert Stark" },
    Arya: { "Who killed Walder Fray?": "Arya Stark" }
  };

  // for (const [key, value] of Object.entries(ironMan)) {
  //   document.getElementById("demo").innerHTML =
  //     "<li>" + key + ": " + value + "</li>";
  // }

  var str = "<ul>";

  // starks.forEach(function(stark) {
  //   str += "<li>" + stark + "</li>";
  // });

  // for (const key in starks) {
  //   str += "<li>" + key + ": " + starks[key] + "</li>";
  // }

  _.each(starks, function(name, key) {
    _.each(name, function(a, q) {
      str += "<li>" + key + " Question: " + q + " Answer: " + a + "</li>";
    });
  });

  str += "</ul>";
  document.getElementById("starkContainer").innerHTML = str;

  for (let [key, value] of Object.entries(starks)) {
    console.log(`${key}: ${value}`);
  }

  console.log(starks.Bran);
  Object.keys(starks).forEach(key => console.log(key, starks[key]));
})();
