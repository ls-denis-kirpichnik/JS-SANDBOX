// Only for sorted arrays

// function jumpSearch(arr, x, n) {
// 	// Finding block size to be jumped
// 	let step = Math.sqrt(n);

// 	console.log(step);

// 	// Finding the block where element is
// 	// present (if it is present)
// 	let prev = 0;
// 	while (arr[Math.min(step, n) - 1] < x) {
// 		prev = step;
// 		step += Math.sqrt(n);
// 		if (prev >= n) return -1;
// 	}

// 	// Doing a linear search for x in block
// 	// beginning with prev.
// 	while (arr[prev] < x) {
// 		prev++;

// 		// If we reached next block or end of
// 		// array, element is not present.
// 		if (prev == Math.min(step, n)) return -1;
// 	}
// 	// If element is found
// 	if (arr[prev] == x) return prev;

// 	return -1;
// }

function jumpSearch(arr, x, l) {
	let step = Math.sqrt(l);
	let prev = 0;

	while (arr[Math.min(step, l) - 1] < x) {
		prev = step;
		step += Math.sqrt(l);
		if (prev >= l) return -1;
	}

	while (arr[prev] < x) {
		prev++;

		if (prev == Math.min(step, l)) return -1;
	}

	if (arr[prev] == x) return prev;

	return -1;
}

// Driver program to test function
let arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
let x = 55;
let l = arr.length;

// Find the index of 'x' using Jump Search
let index = jumpSearch(arr, x, l);

console.log(jumpSearch(arr, 55, arr.length));
