module.exports = function parseMedStrengths(meds) {

  const mappedStrengths = array => 
    array.map(med => {
      med.strength = med.strength
      ? med.strength.split(';')
        .filter(Boolean)
        .map(string => string.split(/^(\D+)(\d+\.*\d*).+(mg|mcg|IU)/i).filter(Boolean))
      : [ ["unknown", null, null] ]
    return med
  })

  return mappedStrengths(meds)
}