/*NetherrackJS v1.0.1*/

const EventEmitter = require('events');
const spawn = require('child_process').spawn;
const minecraftServerProcess = spawn('java', ['-Xmx1024M', '-Xms1024M', '-jar', 'netherrack_server.jar', 'nogui']);

class netherrackjs extends EventEmitter {}
const netherrack = new netherrackjs();
exports.event = netherrack;

function log(data) {
  process.stdout.write(data.toString());
  netherrack.emit('console', data.toString());
}

minecraftServerProcess.stdout.on('data', log);
minecraftServerProcess.stderr.on('data', log);

exports.send = function send(input) {
  minecraftServerProcess.stdin.write(input + "\n");
}
