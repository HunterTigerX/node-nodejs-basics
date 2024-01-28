// implement function that deletes file fileToRemove.txt (if there's no file
// fileToRemove.txt Error with message FS operation failed must be thrown)

import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  if (!fs.existsSync(join(__dirname, "files", "fileToRemove.txt"))) {
    throw new Error("FS operation failed: File fileToRemove.txt don't exist");
  } else {
    fs.unlink(join(__dirname, "files", "fileToRemove.txt"), (err) => {
      if (err) {
        console.log(err.message);
        throw err;
      }
    });
  }
};

await remove();
