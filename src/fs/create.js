// create.js - implement function that creates new file fresh.txt
// with content I am fresh and young inside of the files folder
// (if file already exists Error with message FS operation failed must
// be thrown)

import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url));

const create = async () => {
  if (fs.existsSync(join(__dirname, "files", "fresh.txt"))) {
    throw new Error("FS operation failed: File already exists");
  } else {
    fs.writeFile(join(__dirname, "files", "fresh.txt"), "I am fresh and young", (err) => {
      if (err) {
        console.log(err.message);
        throw err;
      }
      console.log("Operation was a success");
    });
  }
};

await create();
