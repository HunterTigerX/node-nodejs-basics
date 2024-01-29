// rewrite it to it's equivalent in ECMAScript notation (and rename it to esm.mjs)

import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url));

const copy = async () => {

  if (!fs.existsSync(join(__dirname, "files"))) {
    throw new Error("FS operation failed: Files folder doesn't exists");
  } else if (fs.existsSync(join(__dirname, "files_copy"))) {
    throw new Error("FS operation failed: files_copy folder already exists");
  } else {
    fs.cp(
      join(__dirname, "files"),
      join(__dirname, "files_copy"),
      { recursive: true },
      (err) => {
        if (err) {
          throw err;
        } else {
          console.log("All files were copied!");
        }
      }
    );
  }
};

await copy();
