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

  ironMan.city = 'NYC';

  ironMan['city'] = "LA";

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
  for (const [key,value] of Object.entries(ironMan)) {
    console.log(`${key}: ${value}`);
  }
})();
