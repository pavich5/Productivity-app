function getFullNames(firstNames, lastNames) {
    const fullNames = [];
    for (let i = 0; i < firstNames.length; i++) {
      fullNames.push(`${i + 1}. ${firstNames[i]} ${lastNames[i]}`);
    }
    return fullNames;
  }

  console.log(getFullNames(["Bob", "Jill", "Kire"], ["Gregory", "Wurtz","Tasev"]));
