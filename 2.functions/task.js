function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
    sum += arr[i];
  }

  let avg = Number((sum / arr.length).toFixed(2));


  return {
    min: min,
    max: max,
    avg: avg
  };
}

function summElementsWorker(...arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num;
    } else {
      sumOddElement += num;
    }
  }

  return sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;


  for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }


  return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;

}

function makeWork(arrOfArr, func) {

  let maxWorkerResult = -Infinity;


  for (let i = 0; i < arrOfArr.length; i++) {

    const result = func(...arrOfArr[i]);


    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}