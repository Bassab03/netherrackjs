# NetherrackJS
NetherrackJS is a simple Node.js wrapper for the vanilla Minecraft server.

## Features
* Starts the vanilla Minecraft server `.jar` and streams the server console to the CLI.
* Allows you to easily send commands to the server.
* Emits an event whenever certain events happen in the Minecraft world.

## Installation
NetherrackJS requires [node.js](https://nodejs.org") to run (v6.11.2 or later recommended).

Open the command line and type:

    npm install netherrackjs

## Usage
First, rename your server file to `netherrack_server.jar`.

Require the package in a `.js` file in the server root to start using NetherrackJS:

    const netherrack = require('netherrackjs');

You can now use NetherrackJS in that file! Check out [the docs](https://github.com/Bassab03/netherrackjs/wiki/Documentation) for more information.

## Bugs, issues and suggestions
If you come across something you believe is a bug or otherwise an issue, please report it on [GitHub](https://github.com/Bassab03/netherrackjs/issues) or on the [NetherrackJS Discord server](https://discord.gg/9Dm68N4).

If you have a suggestion for NetherrackJS, the easiest way to get it noticed is also by posting on the [Discord server](https://discord.gg/YmKWRE3).
