// implement function that reads file fileToRead.txt
// content using Readable Stream and prints it's content into process.stdout

import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createReadStream } from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const fileStream = createReadStream(
    join(__dirname, "files", "fileToRead.txt")
  );
  return new Promise((resolve, reject) => {
    fileStream.on("data", (data) => {
      process.stdout.write(data);
    });

    fileStream.on("end", () => {
      resolve();
    });

    fileStream.on("error", (error) => {
      reject(error);
    });
  });
};

await read();
