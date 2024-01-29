// implement function that creates number of worker threads (equal to the number of host
// machine logical CPU cores) from file worker.js and able to send data to those threads
// and to receive result of the computation from them. You should send incremental number
// starting from 10 to each worker. For example: on host machine with 4 cores you should
// create 4 workers and send 10 to first worker, 11 to second worker, 12 to third worker,
// 13 to fourth worker. After all workers will finish, function should log array of results
// into console. The results are array of objects with 2 properties:
// status - 'resolved' in case of successfully received value from worker or 'error' in case
// of error in worker
// data - value from worker in case of success or null in case of error in worker
// The results in the array must be in the same order that the workers were created

import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { Worker } from "worker_threads";
import os from "os";

const __dirname = dirname(fileURLToPath(import.meta.url));
const workerJsPath = join(__dirname, "worker.js");
const cpuCount = os.cpus().length;

const performCalculations = async () => {
  const workersArray = [];
  for (let i = 0; i < cpuCount; i++) {
    const worker = new Worker(workerJsPath, {
      workerData: i + 10,
    });

    workersArray.push(
      new Promise((resolve, reject) => {
        worker;
        worker.on("message", (response) =>
          resolve({ status: "resolved", data: response })
        );
        worker.on("error", (error) => reject({ status: "error", data: error }));
      })
    );
  }

  console.log(await Promise.all(workersArray));
};

await performCalculations();
