function insertionSort(inputArr) {
	let l = inputArr.length;
	for (let i = 1; i < l; i++) {
		// Choosing the first element in our unsorted subarray
		let current = inputArr[i];
		// The last element of our sorted subarray
		let j = i - 1;
		while (j > -1 && current < inputArr[j]) {
			inputArr[j + 1] = inputArr[j];
			j--;
		}
		inputArr[j + 1] = current;
	}
	return inputArr;
}

console.log(insertionSort([2, 3, 5, 6, 7, 8]));
