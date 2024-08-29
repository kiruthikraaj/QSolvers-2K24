const { Worker } = require("worker_threads");

function server() {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./worker.js", {
      workerData: { name: "Antony" },
    });
    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
}

server()
  .then((result) => console.log(`I am worker ${process.pid}: ${result}`))
  .catch((err) => console.error(err));
