const { workerData, parentPort } = require("worker_threads");

const result = "Hello " + workerData.name;

parentPort.postMessage(result);
