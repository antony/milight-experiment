'use strict';

let MiLight = require('node-milight-promise'),
    Conroller = MiLight.MilightController,
    commands = MiLight.commands;

let light = new Conroller({}),
    zone = 1;

light.sendCommands(commands.rgbw.whiteMode(zone));
light.close();
