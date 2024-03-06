function differenceWith(arr1, arr2, comparator) {
    return arr1.filter(item1 => !arr2.some(item2 => comparator(item1, item2)));
  }