// implement function that compresses file fileToCompress.txt to archive.gz using
// zlib and Streams API

import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
const __dirname = dirname(fileURLToPath(import.meta.url));
const fileToCompress = join(__dirname, "files", "fileToCompress.txt");
const compressedFile = join(__dirname, "files", "archive.gz");

const compress = async () => {
  const handleStream = createReadStream(fileToCompress);
  handleStream
    .pipe(createGzip())
    .pipe(createWriteStream(compressedFile))
    .on("finish", () => {
      console.log(`Compression process done`);
    });
};

await compress();
