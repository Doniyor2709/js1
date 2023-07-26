let N = 10000;

let restSeconds = N % 3600;

let hour = (N - restSeconds) / 3600;

let second = restSeconds % 60;

let minute = (restSeconds - second) / 60;

console.log(hour);
console.log(minute);
console.log(second);
