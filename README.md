# NetherrackJS
NetherrackJS is a simple Node.js wrapper for the vanilla Minecraft server.

## Features
* Starts the vanilla Minecraft server `.jar` and streams the server console to the CLI.
* Allows you to easily send commands to the server.
* Emits an event every time something is logged to the console.

Consult [the wiki](http://github.com/Bassab03/netherrackjs/wiki) for more details.

## Requirements
* [node.js](http://nodejs.org) (v6.11.2 or later recommended)

## Installation
1. Download this repository.
2. Unpack the file you downloaded.
3. Copy `netherrack.js` from the new folder and paste it in a folder containing your initialized vanilla server.
4. If your server is not running the Minecraft version specified in `netherrack.js` or if the file has been renamed, change the `.jar` reference in `netherrack.js`.
5. Create a new JavaScript file called `code.js` in the same folder and paste in the following line of code:
`const netherrack = require('netherrack.js');`
6. Open the command line, navigate to the server folder, type in `node code.js` and hit `Enter`.
7. The server should start running! The server console will be streamed to the command line, so you can easily see if it works.

If the file throws an error, go through the steps one more time and try again. If the problem persists, please ask for help in [this](https://discord.gg/pTcuDn2) Discord server.

## Bugs, issues and suggestions
If you come across something you believe is a bug or otherwise an issue, please report it on the [NetherrackJS Discord server](https://discord.gg/9Dm68N4).

If you have a suggestion for NetherrackJS, the easiest way to get it noticed is also by posting on the [Discord server](https://discord.gg/YmKWRE3).
