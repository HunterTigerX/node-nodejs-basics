// implement function that copies folder files files with all its content
// into folder files_copy at the same level (if files folder doesn't
// exists or files_copy has already been created Error with message FS
// operation failed must be thrown)

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
