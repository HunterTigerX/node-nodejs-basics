// implement function spawnChildProcess that receives array of arguments args and 
// creates child process from file script.js, passing these args to it. This function 
// should create IPC-channel between stdin and stdout of master process and child process:
// child process stdin should receive input from master process stdin
// child process stdout should send data to master process stdout

import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { spawn } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const scriptJs = join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', [scriptJs, ...args], {
        stdio: ['pipe', 'pipe', process.stderr, 'ipc']
      });
    
      process.stdin.pipe(childProcess.stdin);
      childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['1', '2']);
