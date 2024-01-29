// // implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt
// // and logs it into console as hex using Streams API

import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createReadStream } from "fs";
import { createHash } from "crypto";
const __dirname = dirname(fileURLToPath(import.meta.url));

const hash = createHash("sha256");

async function calculateHash() {
  const fileStream = createReadStream(
    join(__dirname, "files", "fileToCalculateHashFor.txt")
  );

  return new Promise((resolve, reject) => {
    fileStream.on("data", (data) => {
      hash.update(data);
    });

    fileStream.on("end", () => {
      const hexHash = hash.digest("hex");
      console.log(`SHA256 hash is ${hexHash}`);
      resolve(hexHash);
    });

    fileStream.on("error", (error) => {
      reject(error);
    });
  });
}

await calculateHash();
