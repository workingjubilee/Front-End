module.exports = function parseMedStrengths(meds) {
  const scaryRegex = /^([^0-9]*?)(\d*[.]?\d*)(\D*?)$/gi;

  // console.log("Received as: ", meds);

  const regexStrength = (medStr, regex) =>
    medStr
      .split(';')
      .filter(Boolean)
      .map(ingredient => ingredient.split(regex).filter(Boolean));

  const typeCheck = maybeJSON => {
    if (maybeJSON instanceof Array) {
      if (maybeJSON.length === 1) return [JSON.parse(maybeJSON[0])];
      else {
        return maybeJSON;
      }
    } else if (typeof maybeJSON === 'string') {
      if (maybeJSON.charAt(0) === '[') {
        return maybeJSON.split(',').flatMap(array => array);
      } else if (maybeJSON.charAt(0) === '{') {
        return JSON.parse(`[${maybeJSON.slice()}]`);
      }
    }
  };

  try {
    const extractedMeds = typeCheck(meds);
    return extractedMeds.map(med => {
      med['strength'] = med['spl_strength']
        ? regexStrength(med['spl_strength'], scaryRegex)
        : [['unknown', null, null]];
      return med;
    });
  } catch (error) {
    console.error(error);
    return meds;
  }
};
