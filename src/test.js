const myWorker = new Worker('test.js')
const sum = 0
for (let i = 0; i <  10000000; i++) {
  sum += i
}


