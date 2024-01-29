import { dirname, join } from "path";
import path from 'path';
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import "./files/c.js";
import objectA from "./files/a.json" assert { type: "json" };
import objectB from "./files/b.json" assert { type: "json" };

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = objectA;
} else {
  unknownObject = objectB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
