function getArrayParams(...arr) {

	let min = Infinity;
	let max = -Infinity;
	let sum = 0;


	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];

		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	let avg = (sum / arr.length).toFixed(2);
	return {
		min: min,
		max: max,
		avg: +avg
	};
}

function summElementsWorker(...arr) {

	let result = arr.reduce(function(sum, elem) {
		return sum + elem;
	}, 0);
	return result;
}


function differenceMaxMinWorker(...arr) {

	let max = Math.max.apply(null, arr);
	let min = Math.min.apply(null, arr);

	if (arr.length == 0) {
		return 0;
	} else return max - min;

}


function differenceEvenOddWorker(...arr) {

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}


function averageEvenElementsWorker(...arr) {

	let sumEvenElement = 0;
	let countEvenElement = 0;

	if (arr.length == 0) {
		return 0;
	}

	for (let i = 0; i < arr.length; i++) {


		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	return sumEvenElement / countEvenElement;
}


function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const arr = arrOfArr[i]
		const sum = func(...arr);
		if (sum > maxWorkerResult) {
			maxWorkerResult = sum;
		}
		console.log(arrOfArr[i], sum, maxWorkerResult);
	}

	return maxWorkerResult;

}