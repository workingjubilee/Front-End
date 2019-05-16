module.exports = function parseMedStrengths(meds) {
  const scaryRegex = /^(\D+)(\d+\.*\d*).+(mg|mcg|IU)/i

  const regexStrength = (medStr,regex) => 
    medStr.slice(0, -1).split(';').map(ingredient =>
      ingredient.split(regex).filter(Boolean))

  return meds.map(med => {
    med.strength = med.strength
      ? regexStrength(med.strength, scaryRegex)
      : [ ["unknown", null, null] ]
    return med
  })
}