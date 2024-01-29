// implement function that writes process.stdin data into file fileToWrite.txt
// content using Writable Stream

import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const fileToWrite = join(__dirname, "files", "fileToWrite.txt");

const transform = async () => {
  const writable = fs.createWriteStream(fileToWrite);
  process.stdin.pipe(writable);
};

await transform();
