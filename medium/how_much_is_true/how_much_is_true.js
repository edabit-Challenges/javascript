//Using Filter
function countTrue(arr) {
    return arr.filter(value => value === true).length;
  }
//Using Reduce
function countTrue(arr) {
    return arr.reduce((count, value) => count + (value === true ? 1 : 0), 0);
  }

  