// implement function that prints all array of filenames from files folder into
// console (if files folder doesn't exists Error with message FS operation failed
// must be thrown)

import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
  if (!fs.existsSync(join(__dirname, "files"))) {
    throw new Error("FS operation failed: Folder files doesn't exists");
  } else {
    const result = [];
    fs.readdir(join(__dirname, "files"), (err, filesFolder) => {
      filesFolder.forEach(async (file, index) => {
        fs.lstat(join(__dirname, "files", file), (err, fileInFilesFolder) => {
          if (fileInFilesFolder.isFile()) {
            result.push(file.replace(/\.[^/.]+$/, ""));
            if (index === filesFolder.length - 1) {
              console.log(result);
              return result;
            }
          }
        });
      });
    });
  }
};

await list();
