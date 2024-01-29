//  implement function that decompresses archive.gz back to the fileToCompress.txt
// with same content as before compression using zlib and Streams API

import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createReadStream, createWriteStream } from "fs";
import { createUnzip } from "zlib";
const __dirname = dirname(fileURLToPath(import.meta.url));
const decompressedFile = join(__dirname, "files", "fileToCompress.txt");
const compressedFile = join(__dirname, "files", "archive.gz");

const decompress = async () => {
  const handleStream = createReadStream(compressedFile);
  handleStream
    .pipe(createUnzip())
    .pipe(createWriteStream(decompressedFile))
    .on("finish", () => {
      console.log(`Decompression process done`);
    });
};

await decompress();
