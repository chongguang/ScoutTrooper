module.exports = Vat;

function Vat () {
  function getVat(countryCode) {
    var table = {
      "DE": 20,
      "UK": 21,
      "FR": 20,
      "IT": 25,
      "ES": 19,
      "PL": 21,
      "RO": 20,
      "NL": 20,
      "BE": 24,
      "EL": 20,
      "CZ": 19,
      "PT": 23,
      "HU": 27,
      "SE": 23,
      "AT": 22,
      "BG": 21,
      "DK": 21,
      "FI": 17,
      "SK": 18,
      "IE": 21,
      "HR": 23,
      "LT": 23,
      "SI": 24,
      "LV": 20,
      "EE": 22,
      "CY": 21,
      "LU": 25,
      "MT": 20
    }

    return table[countryCode];
  }
  return getVat;
}
