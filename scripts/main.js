import {world} from "@minecraft/server"

world.beforeEvents.chatSend.subscribe(event => {
    event.cancel = true;
    event.sender.runCommandAsync("title @s times 0 0 0");

    const from = event.sender.getTags().find(t => t.startsWith("lang:")).slice(5);

    const to_array = world.getAllPlayers().map(p => p.getTags().find(t => t.startsWith("lang:")).slice(5));
    const to =  Array.from(new Set(to_array));

    const obj ={
        message: event.message,
        from: from,
        to: to
    }

    const strobj = JSON.stringify(obj);

    //world.sendMessage(strobj);

    event.sender.runCommandAsync(`title @s title ${strobj}`);
});