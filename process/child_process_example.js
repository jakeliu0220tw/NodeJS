var execFile = require('child_process').execFile;
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;

var serverProcess = execFile("server.exe", [], [], (error, stdout, stderr) => {});
// var serverProcess = exec("server.exe");
// var serverProcess = spawn("server.exe");

serverProcess.stdout.on('data', function (data) {
    console.log('stdout: ', data);
});

serverProcess.stderr.on('data', function (data) {
    console.log('stderr: ', data);
});

serverProcess.on('close', function (code, signal) {
    console.log("[SystemProcessManager] rcv -> close");
    console.log('[SystemProcessManager] serverProcess close - code: ' + code + ', signal: ' + signal);
});

console.log('pid = ', serverProcess.pid);
