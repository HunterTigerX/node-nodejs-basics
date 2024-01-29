// implement function that renames file wrongFilename.txt to
// properFilename with extension .md (if there's no file
// wrongFilename.txt or properFilename.md already exists
// Error with message FS operation failed must be thrown)

import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url));

const rename = async () => {
  if (!fs.existsSync(join(__dirname, "files", "wrongFilename.txt"))) {
    throw new Error("FS operation failed: File wrongFilename.txt don't exist");
  } else if (fs.existsSync(join(__dirname, "files", "properFilename.md"))) {
    throw new Error("FS operation failed: properFilename.md already exists");
  } else {
    fs.rename(
      join(__dirname, "files", "wrongFilename.txt"),
      join(__dirname, "files", "properFilename.md"),
      (error) => {
        if (error) {
        } else {
        }
      }
    );
  }
};

await rename();
