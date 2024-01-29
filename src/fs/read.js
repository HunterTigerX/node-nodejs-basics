// implement function that prints content of the fileToRead.txt into console (if there's no file fileToRead.txt
// Error with message FS operation failed must be thrown)

import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  if (!fs.existsSync(join(__dirname, "files", "fileToRead.txt"))) {
    console.log("wut");
    throw new Error("FS operation failed: File fileToRead.txt don't exist");
  } else {
    try {
      const data = await fs.promises.readFile(
        join(__dirname, "files", "fileToRead.txt"),
        "utf8"
      );
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
};

await read();
