// implement function that reads data from process.stdin, reverses text
// using Transform Stream and then writes it into process.stdout

import { dirname, join } from "path";
import { fileURLToPath } from "url";
import stream from "stream";
const Transform = stream.Transform || import("readable-stream").Transform;
import fs from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const fileToWrite = join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  const writable = fs.createWriteStream(fileToWrite);
  const reverseStream = new Transform({
    transform(data, encoding, callback) {
      const reversedData =
        data
          .toString()
          .replace(/\n/g, "")
          .split("")
          .reverse()
          .join("")
          .trimStart() + "\n";
      this.push(reversedData);
      callback();
    },
  });
  process.stdin.pipe(reverseStream).pipe(writable);
};

await write();
