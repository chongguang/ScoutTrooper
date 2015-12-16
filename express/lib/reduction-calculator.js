module.exports = ReductionCalculator;

function ReductionCalculator () {
  function getReduction(value) {
    var table = [
      { value: 50000, reduction: 15 },
      { value: 10000, reduction: 10 },
      { value: 7000, reduction: 7 },
      { value: 5000, reduction: 5 },
      { value: 1000, reduction: 3 }
    ]

    for (var i = 0; i < table.length; i++) {
      if (value >= table[i].value) {
        return table[i].reduction;
      }
    }
    return 0;
  }
  return getReduction;
}
