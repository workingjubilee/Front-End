module.exports = function parseMedStrengths(meds) {
  const scaryRegex = /^(\D+)(\d+\.*\d*).+(mg|mcg|IU)/i;

  console.log(meds);

  const regexStrength = (medStr, regex) =>
    medStr
      .split(';')
      .map(ingredient => ingredient.split(regex).filter(Boolean));

  const typeCheck = (maybeJSON) => {
    if (maybeJSON instanceof Array) {
      return maybeJSON
    } else if (typeof maybeJSON === 'string') {
      if (maybeJSON.charAt(0) === '[') {
        return maybeJSON.split(',').flatMap(array => array)
      } else if (maybeJSON.charAt(0) === '{') {
        return JSON.parse(`[${maybeJSON.slice()}]`)
      }
    }
  }

  try {
    const extractedMeds = typeCheck(meds);
    return extractedMeds.map(med => {
      med["strength"] = med["spl_strength"]
        ? regexStrength(med["spl_strength"], scaryRegex)
        : [['unknown', null, null]]
      return med
    });
  } catch(error) {
    console.error(error);
    return meds
  }
}
