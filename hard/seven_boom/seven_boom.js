function sevenBoom(arr) {
	for (let num of arr ){
        if (String(num).includes('7')) return "Boom!"
        return "there is no 7 in the array";
    }
}
