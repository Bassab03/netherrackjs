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
1. Find your server root and rename your server `.jar` to `netherrack_server.jar`.
2. Open the command line and navigate to your server root with `cd`.
3. Type in `npm install netherrackjs` and hit `Enter`.
4. Create a new JavaScript file called `test.js` in the server root and paste in the following line of code:
`const netherrack = require('netherrackjs');`
5. Go back into the command line, type in `node test.js` and hit `Enter`.
6. The server should start running! The server console will be streamed to the command line, so you can easily see if it works.

If the file throws an error, go through the steps one more time and try again. If the problem persists, please ask for help in [this](https://discord.gg/pTcuDn2) Discord server.

## Bugs, issues and suggestions
If you come across something you believe is a bug or otherwise an issue, please report it on [GitHub](https://github.com/Bassab03/netherrackjs/issues) or on the [NetherrackJS Discord server](https://discord.gg/9Dm68N4).

If you have a suggestion for NetherrackJS, the easiest way to get it noticed is also by posting on the [Discord server](https://discord.gg/YmKWRE3).
