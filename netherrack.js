/*NetherrackJS v1.1*/

const EventEmitter = require('events');
const spawn = require('child_process').spawn;
let minecraftServerProcess;
spawnServerProcess();

class netherrackjs extends EventEmitter {}
const netherrack = new netherrackjs();
exports.event = netherrack;

function spawnServerProcess() {
  minecraftServerProcess = spawn('java', ['-Xmx1024M', '-Xms1024M', '-jar', 'netherrack_server.jar', 'nogui']);
  minecraftServerProcess.stdout.on('data', log);
  minecraftServerProcess.stderr.on('data', log);
}

function log(data) {
  const msg = data.toString();
  process.stdout.write(msg);
  netherrack.emit('console', msg);
  if (msg.indexOf("] [Server thread/INFO]: Done (") > -1 && msg.indexOf("! For help, type \"help\" or \"?\"") > -1) {
    netherrack.emit('start');
  } else if (msg.indexOf("] [Server thread/INFO]: ") > -1 && msg.indexOf(" logged in with entity id ") > -1) {
    netherrack.emit('join', msg.substr(msg.indexOf("] [Server")+24).substr(0, msg.substr(msg.indexOf("] [Server")+24).indexOf("[")));
  } else if (msg.indexOf("] [Server thread/INFO]: ") > -1 && msg.indexOf("Successfully reloaded loot tables, advancements and functions") > -1) {
    netherrack.emit('reload');
  } else if (msg.indexOf("] [Server thread/INFO]: ") > -1 && msg.indexOf("Saved the world") > -1) {
    netherrack.emit('save');
  } else if (msg.indexOf("] [Server thread/INFO]: <") > -1 && msg.indexOf("> ") > -1) {
    netherrack.emit('chat', msg.slice(33).substr(msg.indexOf(' ')+1).replace(/\r|\n/g, ""), msg.slice(33).substr(0,msg.indexOf(' ')).replace(/<|>/g, ""));
  } else if (msg.indexOf("] [Server thread/INFO]: Stopping server") > -1) {
    netherrack.emit('stop');
  }
}

exports.send = function send(input) {
  minecraftServerProcess.stdin.write(input + "\n");
}

exports.respawn = function respawn() {
  spawnServerProcess();
}
