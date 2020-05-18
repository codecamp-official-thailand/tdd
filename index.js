const handleShoutName = nameList => {
  if (nameList.length === 1) return `HELLO ${nameList[0]}!`;

  let message = `HELLO ${nameList[0]} `;

  for (let i = 1; i < nameList.length - 1; i++) {
    message = message + `${nameList[i]} `;
  }

  message = message + `AND ${nameList[nameList.length - 1]}!`;

  return message;
};

const handleNormalName = nameList => {
  if (nameList.length === 1) return `Hello, ${nameList[0]}.`;

  let message = ` and ${nameList[nameList.length - 1]}.`;

  if (nameList.length > 2) message = `,` + message;

  for (let i = nameList.length - 2; i >= 1; i--) {
    message = `, ${nameList[i]}` + message;
  }

  message = `, ${nameList[0]}` + message;

  message = `Hello` + message;

  return message;
};

const handleNameList = nameList => {
  const normalName = nameList.filter(name => name !== name.toUpperCase());
  const shoutedName = nameList.filter(name => name === name.toUpperCase());

  let message = "";

  if (normalName.length !== 0) {
    message = handleNormalName(normalName);
  }

  if (shoutedName.length !== 0 && normalName.length !== 0) {
    message = message + ` AND `;
  }

  if (shoutedName.length !== 0) {
    message = message + handleShoutName(shoutedName);
  }

  return message;
};

const changeToNormalArray = nameList => {
  const newNormalArray = [];
  nameList.map(name => {
    if (name.includes('"')) name = name.slice(1, -1);
    newNormalArray.push(...name.split(", "));
  });

  return newNormalArray;
};

export const greet = (name, anotherName) => {
  if (anotherName) {
    return `Hello, ${name} and ${anotherName}.`;
  } else if (Array.isArray(name)) {
    const normalArray = changeToNormalArray(name);
    return handleNameList(normalArray);
  } else {
    switch (name) {
      case null:
        return `Hello, my friend.`;
      case name.toUpperCase():
        return `HELLO ${name}!`;
      default:
        return `Hello, ${name}.`;
    }
  }
};
